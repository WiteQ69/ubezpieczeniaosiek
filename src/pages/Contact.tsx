import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "@formspree/react";

const Contact = () => {
  const { toast } = useToast();
  const [state, formspreeSubmit] = useForm("mgoevana");
  const [isSubmitting, setIsSubmitting] = useState(false); 


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        toast({
          title: "Wiadomość wysłana!",
          description: "Dziękujemy — odezwiemy się jak najszybciej.",
        });
        (e.target as HTMLFormElement).reset();
      } else {
        toast({
          title: "Błąd wysyłania",
          description: "Sprawdź pola i spróbuj ponownie.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Błąd wysyłania",
        description: "Sprawdź pola i spróbuj ponownie.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* jak w HTML: białe tło, delikatny top padding */}
      <main className="flex-1 bg-white pt-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          {/* nagłówek jak w HTML */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-4 tracking-tight">
              Skontaktuj się z nami
            </h1>
            <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
              Masz pytania o nasze usługi? Chcesz umówić się na spotkanie? Napisz lub zadzwoń do nas!
            </p>
          </div>

          {/* 3 kolumny jak w HTML */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {/* 1) Formularz */}
<div className="h-full">
  <Card className="h-full flex flex-col">
    <CardHeader>
      <CardTitle className="text-2xl flex items-center gap-2">
        <Mail className="h-5 w-5" />
        Formularz kontaktowy
      </CardTitle>
    </CardHeader>

    <CardContent className="flex-1">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* temat maila */}
        <input type="hidden" name="_subject" value="FORMULARZ KONTAKTOWY - NOWA WIADOMOŚĆ" />

        <div className="space-y-2">
          <Label htmlFor="name">Imię i nazwisko *</Label>
          <Input
            id="name"
            name="IMIĘ I NAZWISKO"
            placeholder="Wprowadź swoje imię i nazwisko"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Numer telefonu *</Label>
          <Input
            id="phone"
            name="NUMER TELEFONU"
            type="tel"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Wiadomość *</Label>
          <Textarea
            id="message"
            name="WIADOMOŚĆ"
            placeholder="Opisz swoje pytanie lub zainteresowanie..."
            required
            rows={6}
            className="resize-none"
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-zinc-900 hover:bg-zinc-800 text-white h-11"
          disabled={isSubmitting}
        >
          <Send className="h-5 w-5 mr-2" />
          {isSubmitting ? "Wysyłanie..." : "Wyślij wiadomość"}
        </Button>
      </form>
    </CardContent>
  </Card>
</div>


            {/* 2) Info kontaktowe */}
            <div className="h-full">
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="text-2xl">Informacje kontaktowe</CardTitle>
                  <CardDescription>SIGMA Ubezpieczenia - Beata Paczyńska</CardDescription>
                </CardHeader>

                <CardContent className="space-y-6 flex-1">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-zinc-100">
                      <Phone className="h-6 w-6 text-zinc-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-zinc-900">Telefon</p>
                      <a href="tel:+48693632068" className="text-zinc-600 hover:underline">
                        +48 693 632 068
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-zinc-100">
                      <Mail className="h-6 w-6 text-zinc-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-zinc-900">Email</p>
                      <a href="mailto:sigmaosiek@gmail.com" className="text-zinc-600 hover:underline">
                        sigmaosiek@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-zinc-100">
                      <MapPin className="h-6 w-6 text-zinc-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-zinc-900">Lokalizacja</p>
                      <p className="text-zinc-600">
                        Kościelna 5, 32-608 Osiek
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-zinc-100">
                      <Clock className="h-6 w-6 text-zinc-600" />
                    </div>
                   <div>
  <p className="font-semibold text-zinc-900">Godziny otwarcia</p>
  <p className="text-zinc-600 text-sm mt-1">
    Poniedziałek – Piątek: <br />08:00–16:00<br />
    Sobota – Niedziela: Zamknięte
  </p>
</div>

                  </div>
                </CardContent>
              </Card>
            </div>

            {/* 3) Mapa */}
            <div className="h-full">
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="text-2xl">Gdzie nas znajdziesz</CardTitle>
                </CardHeader>

             <CardContent className="flex-1">
  <div className="h-full min-h-[320px] rounded-2xl overflow-hidden shadow">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2567.2003378887293!2d19.26182617682214!3d49.95134432317445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471696cd5f5501f1%3A0xe98378efb88f08a2!2sUBEZPIECZENIA%20OSIEK%20SIGMA%20Beata%20Paczy%C5%84ska!5e0!3m2!1spl!2spl!4v1766080623562!5m2!1spl!2spl"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
      title="Mapa dojazdu"
      className="block w-full h-full border-0"
    />
  </div>
</CardContent>

              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
