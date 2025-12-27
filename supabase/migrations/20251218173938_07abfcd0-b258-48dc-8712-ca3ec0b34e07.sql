-- Typ roli użytkownika
CREATE TYPE public.app_role AS ENUM ('admin', 'consultant', 'user');

-- Typ statusu konsultanta
CREATE TYPE public.consultant_status AS ENUM ('online', 'offline', 'in_call');

-- Typ sesji konsultacji
CREATE TYPE public.consultation_type AS ENUM ('chat', 'video');

-- Typ statusu sesji
CREATE TYPE public.session_status AS ENUM ('waiting', 'active', 'ended');

-- Tabela profili użytkowników
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  full_name TEXT,
  status consultant_status DEFAULT 'offline',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tabela ról użytkowników
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role app_role NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, role)
);

-- Tabela kolejki konsultacji
CREATE TABLE public.consultation_queue (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_name TEXT NOT NULL,
  client_email TEXT,
  consultation_type consultation_type NOT NULL DEFAULT 'chat',
  position INTEGER NOT NULL,
  session_id TEXT NOT NULL UNIQUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tabela sesji konsultacji
CREATE TABLE public.consultation_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  consultant_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  client_session_id TEXT NOT NULL,
  client_name TEXT NOT NULL,
  consultation_type consultation_type NOT NULL,
  status session_status DEFAULT 'waiting',
  started_at TIMESTAMPTZ,
  ended_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tabela wiadomości czatu
CREATE TABLE public.chat_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id UUID NOT NULL REFERENCES public.consultation_sessions(id) ON DELETE CASCADE,
  sender_type TEXT NOT NULL CHECK (sender_type IN ('client', 'consultant')),
  sender_name TEXT NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Włącz RLS
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.consultation_queue ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.consultation_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chat_messages ENABLE ROW LEVEL SECURITY;

-- Funkcja sprawdzająca rolę
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- Polityki RLS dla profiles
CREATE POLICY "Profiles viewable by everyone" ON public.profiles
  FOR SELECT USING (true);

CREATE POLICY "Users can update own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile" ON public.profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

-- Polityki RLS dla user_roles
CREATE POLICY "Roles viewable by admins and consultants" ON public.user_roles
  FOR SELECT USING (
    public.has_role(auth.uid(), 'admin') OR 
    public.has_role(auth.uid(), 'consultant') OR
    user_id = auth.uid()
  );

CREATE POLICY "Admins can manage roles" ON public.user_roles
  FOR ALL USING (public.has_role(auth.uid(), 'admin'));

-- Polityki RLS dla consultation_queue (publiczna dla odczytu)
CREATE POLICY "Queue viewable by everyone" ON public.consultation_queue
  FOR SELECT USING (true);

CREATE POLICY "Anyone can join queue" ON public.consultation_queue
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Consultants can manage queue" ON public.consultation_queue
  FOR DELETE USING (
    public.has_role(auth.uid(), 'admin') OR 
    public.has_role(auth.uid(), 'consultant')
  );

CREATE POLICY "Anyone can update queue position" ON public.consultation_queue
  FOR UPDATE USING (true);

-- Polityki RLS dla consultation_sessions
CREATE POLICY "Sessions viewable by consultants" ON public.consultation_sessions
  FOR SELECT USING (
    public.has_role(auth.uid(), 'admin') OR 
    public.has_role(auth.uid(), 'consultant')
  );

CREATE POLICY "Anyone can create session" ON public.consultation_sessions
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Consultants can update sessions" ON public.consultation_sessions
  FOR UPDATE USING (
    public.has_role(auth.uid(), 'admin') OR 
    public.has_role(auth.uid(), 'consultant')
  );

-- Polityki RLS dla chat_messages
CREATE POLICY "Messages viewable by session participants" ON public.chat_messages
  FOR SELECT USING (true);

CREATE POLICY "Anyone can send messages" ON public.chat_messages
  FOR INSERT WITH CHECK (true);

-- Trigger do aktualizacji updated_at
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$;

CREATE TRIGGER on_profiles_updated
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

-- Trigger do tworzenia profilu po rejestracji
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name)
  VALUES (NEW.id, NEW.email, NEW.raw_user_meta_data ->> 'full_name');
  RETURN NEW;
END;
$$;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Włącz realtime dla kolejki i wiadomości
ALTER PUBLICATION supabase_realtime ADD TABLE public.consultation_queue;
ALTER PUBLICATION supabase_realtime ADD TABLE public.chat_messages;
ALTER PUBLICATION supabase_realtime ADD TABLE public.consultation_sessions;
ALTER PUBLICATION supabase_realtime ADD TABLE public.profiles;