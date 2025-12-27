import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, ExternalLink } from "lucide-react";

const Assistance = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12 bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex p-3 rounded-full bg-primary/10 mb-4">
                <Wrench className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl font-bold text-foreground mb-4">
                Assistance
              </h1>
              <p className="text-lg text-muted-foreground">
                Zadbaj o spokój na drodze dzięki pakietom assistance
              </p>
            </div>

            <Card className="border-border hover:shadow-xl transition-smooth">
              <CardHeader>
                <CardTitle className="text-2xl">Pomoc drogowa 24/7</CardTitle>
                <CardDescription>
                  Kompleksowa pomoc w razie awarii lub wypadku
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="prose prose-sm max-w-none">
                  <p className="text-muted-foreground">
                    Assistance to pakiet usług, który zapewnia pomoc w trudnych sytuacjach na drodze. 
                    Bez względu na to, gdzie jesteś i o której godzinie – zawsze możesz liczyć 
                    na szybkie wsparcie.
                  </p>
                </div>

                <div className="bg-secondary/50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3">Co oferuje assistance?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">✓</span>
                        <span>Holowanie pojazdu</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">✓</span>
                        <span>Pomoc techniczna na miejscu zdarzenia</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">✓</span>
                        <span>Samochód zastępczy</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">✓</span>
                        <span>Nocleg i wyżywienie</span>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">✓</span>
                        <span>Pomoc w razie wypadku</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">✓</span>
                        <span>Dostarczenie paliwa</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">✓</span>
                        <span>Uruchomienie pojazdu</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">✓</span>
                        <span>Opieka nad dziećmi i zwierzętami</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Oblicz składkę i kup assistance:</h3>
                  
                  <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-6 rounded-lg border border-primary/20">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg mb-2">Kalkulator CUK Assistance</h4>
                        <p className="text-sm text-muted-foreground">
                          Sprawdź dostępne pakiety assistance i wybierz najlepszy dla siebie. 
                          Kup polisę online w kilka minut.
                        </p>
                      </div>
                      <a 
                        href="https://cuk.pl/kalkulator-assistance?utm_source=linkdoradca&utm_medium=referral#kod=ce4317273543f4523c70" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-shrink-0"
                      >
                        <Button 
                          size="lg"
                          className="bg-primary hover:bg-primary-dark text-primary-foreground group px-8"
                        >
                          Przejdź do kalkulatora
                          <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-smooth" />
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                  <div className="text-center p-4 bg-secondary/30 rounded-lg">
                    <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                    <div className="text-sm text-muted-foreground">Dostępność</div>
                  </div>
                  <div className="text-center p-4 bg-secondary/30 rounded-lg">
                    <div className="text-2xl font-bold text-primary mb-1">365</div>
                    <div className="text-sm text-muted-foreground">Dni w roku</div>
                  </div>
                  <div className="text-center p-4 bg-secondary/30 rounded-lg">
                    <div className="text-2xl font-bold text-primary mb-1">PL+EU</div>
                    <div className="text-sm text-muted-foreground">Zasięg</div>
                  </div>
                </div>

                <div className="bg-accent/10 border border-accent/30 p-4 rounded-lg">
                  <p className="text-sm text-foreground">
                    <strong className="text-accent">Potrzebujesz pomocy w wyborze?</strong> Skontaktuj się z nami, 
                    a pomożemy dobrać odpowiedni pakiet assistance do Twoich potrzeb.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Assistance;
