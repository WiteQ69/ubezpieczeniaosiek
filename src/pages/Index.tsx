import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import { Home, Car, FileText, Calculator, GraduationCap, Plane, Wrench, CheckCircle2, Zap, TrendingDown } from "lucide-react";

const Index = () => {
  const services = [
    {
      icon: Home,
      title: "Dom i mieszkanie",
      description: "Kompleksowa ochrona nieruchomości z elastycznymi pakietami",
      link: "/ubezpieczenie-domu",
    },
    {
      icon: Calculator,
      title: "Kalkulator OC/AC",
      description: "Porównaj oferty i wybierz najkorzystniejszą opcję",
      link: "/kalkulator-oc-ac",
    },
    {
      icon: Car,
      title: "Zakup pojazdu",
      description: "Szybkie zgłoszenie zakupu z pomocą eksperta",
      link: "/zgloszenie-zakupu",
    },
    {
      icon: FileText,
      title: "Sprzedaż pojazdu",
      description: "Sprawna aktualizacja ubezpieczenia po sprzedaży",
      link: "/zgloszenie-sprzedazy",
    },
    {
      icon: GraduationCap,
      title: "Ochrona szkolna",
      description: "Bezpieczeństwo dzieci w szkole i poza nią",
      link: "/ubezpieczenia-szkolne",
    },
    {
      icon: Plane,
      title: "Podróże",
      description: "Spokojne wakacje z kompleksową ochroną",
      link: "/ubezpieczenia-turystyczne",
    },
    {
      icon: Wrench,
      title: "Assistance",
      description: "Pomoc drogowa dostępna przez całą dobę",
      link: "/assistance",
    },
  ];

  const benefits = [
    {
      icon: CheckCircle2,
      title: "Profesjonalna obsługa",
      description: "Doświadczony agent dopasuje najlepsze rozwiązanie",
    },
    {
      icon: Zap,
      title: "Wszystko online",
      description: "Załatw formalności bez wychodzenia z domu",
    },
    {
      icon: TrendingDown,
      title: "Najlepsze stawki",
      description: "Porównujemy oferty wielu ubezpieczycieli",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        
        {/* Services Section */}
        <section id="oferty" className="py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-16">
            <div className="text-center mb-16 space-y-4 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
                Nasze usługi
              </h2>
              <p className="text-lg text-muted-foreground font-light">
                Wybierz obszar, którym się zajmiemy
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {services.map((service, index) => (
                <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                  <ServiceCard {...service} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
          <div className="container mx-auto px-4 lg:px-16">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {benefits.map((benefit, index) => (
                  <div key={index} className="text-center space-y-4 group">
                    <div className="inline-flex p-5 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors mb-2">
                      <benefit.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{benefit.title}</h3>
                    <p className="text-muted-foreground font-light leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
