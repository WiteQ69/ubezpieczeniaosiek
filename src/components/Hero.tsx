import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, PhoneCall } from "lucide-react";
import heroImage from "@/assets/rozmowa.jpeg";
import { Link } from "react-router-dom"; // <-- TO MUSI BYĆ TAK (bez klamerek)

const Hero = () => {
  const scrollToOffers = () => {
    const offersSection = document.getElementById("oferty");
    if (offersSection) {
      offersSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-secondary/30 to-background">
      {/* dekoracja w tle */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-10 -top-10 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-secondary/30 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-16 py-20 md:py-24 relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* lewa kolumna */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-background/60 border px-4 py-1 text-sm text-muted-foreground backdrop-blur">
              <ShieldCheck className="h-4 w-4 text-primary" />
              SIGMA Ubezpieczenia • od 2012 roku
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight tracking-tight text-foreground">
                Ubezpieczenia, które
                <span className="text-primary block">naprawdę Cię chronią.</span>
              </h1>
              <p className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
                Dom, auto, firma, życie – dobieramy polisę do Ciebie, nie odwrotnie.
                Szybko, po ludzku i bez ukrytych kosztów.
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="rounded-full px-9 py-6 text-base shadow-lg hover:shadow-xl transition-all"
                onClick={scrollToOffers}
              >
                Zobacz ofertę
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              {/* NAJLEPSZA PRAKTYKA: Button asChild + Link */}
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full px-9 py-6 text-base border-2 flex items-center gap-2"
              >
                <Link to="/kontakt">
                  <PhoneCall className="h-5 w-5" />
                  Kontakt
                </Link>
              </Button>
            </div>

            {/* USP */}
            <div className="flex flex-wrap gap-6 pt-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Ponad 1200 obsłużonych klientów
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-amber-400" />
                Wsparcie przy szkodzie
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-sky-400" />
                Współpraca z wieloma towarzystwami
              </div>
            </div>
          </div>

          {/* prawa kolumna */}
          <div className="relative">
            <div className="relative mx-auto max-w-md lg:max-w-full">
              <div className="rounded-3xl overflow-hidden border bg-background/40 backdrop-blur shadow-2xl">
                <img
                  src={heroImage}
                  alt="Profesjonalne ubezpieczenia SIGMA"
                  className="w-full h-[380px] md:h-[460px] object-cover"
                />
              </div>

              {/* karta info na obrazku */}
              <Link
                to="/wizyta-online"
                className="absolute -bottom-8 -left-4 bg-background border rounded-3xl shadow-lg px-7 py-4 w-60 block hover:scale-[1.02] hover:shadow-xl transition-all text-left"
              >
                <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">
                  Kliknij →
                </p>
                <p className="text-base font-semibold text-foreground">
                  Rozmawiaj na żywo przez kamerę!
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  WIZYTA ONLINE - w naszym biurze.
                </p>
              </Link>

              {/* badge */}
              <div className="absolute -top-8 right-0 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                Bezpłatna konsultacja
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
