import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Plane, ExternalLink } from "lucide-react";

const TravelInsurance = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12 bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex p-3 rounded-full bg-primary/10 mb-4">
                <Plane className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl font-bold text-foreground mb-4">
                Ubezpieczenia turystyczne
              </h1>
              <p className="text-lg text-muted-foreground">
                Zaplanuj bezpieczny wyjazd z ubezpieczeniem turystycznym
              </p>
            </div>

            <Card className="border-border hover:shadow-xl transition-smooth">
              <CardHeader>
                <CardTitle className="text-2xl">Podróżuj bez obaw z Warta</CardTitle>
                <CardDescription>
                  Kompleksowa ochrona podczas podróży krajowych i zagranicznych
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="prose prose-sm max-w-none">
                  <p className="text-muted-foreground">
                    Ubezpieczenie turystyczne to must-have dla każdego wyjazdu. Zapewnia ochronę 
                    przed nieprzewidzianymi wydatkami związanymi z kosztami leczenia za granicą, 
                    odpowiedzialnością cywilną, utratą bagażu i wieloma innymi zdarzeniami.
                  </p>
                </div>

                <div className="bg-secondary/50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3">Co obejmuje ubezpieczenie?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">✓</span>
                        <span>Koszty leczenia za granicą</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">✓</span>
                        <span>Odpowiedzialność cywilna</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">✓</span>
                        <span>Assistance 24/7</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">✓</span>
                        <span>Koszty rezygnacji z podróży</span>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">✓</span>
                        <span>Opóźnienie lub utrata bagażu</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">✓</span>
                        <span>Następstwa nieszczęśliwych wypadków</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">✓</span>
                        <span>Sport i rekreacja</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">✓</span>
                        <span>Pomoc prawna za granicą</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Oblicz składkę i kup online:</h3>
                  
                  <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-6 rounded-lg border border-primary/20">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg mb-2">Kalkulator Warta</h4>
                        <p className="text-sm text-muted-foreground">
                          Szybko oblicz składkę dopasowaną do Twojej podróży i kup polisę online w kilka minut
                        </p>
                      </div>
                      <a 
                        href="https://www.warta.pl/kalkulator/ubezpieczenie-turystyczne/twoja-podroz?p=A00010388121" 
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
                    <div className="text-sm text-muted-foreground">Assistance</div>
                  </div>
                  <div className="text-center p-4 bg-secondary/30 rounded-lg">
                    <div className="text-2xl font-bold text-primary mb-1">180+</div>
                    <div className="text-sm text-muted-foreground">Krajów</div>
                  </div>
                  <div className="text-center p-4 bg-secondary/30 rounded-lg">
                    <div className="text-2xl font-bold text-primary mb-1">100%</div>
                    <div className="text-sm text-muted-foreground">Online</div>
                  </div>
                </div>

                <div className="bg-accent/10 border border-accent/30 p-4 rounded-lg">
                  <p className="text-sm text-foreground">
                    <strong className="text-accent">Masz pytania?</strong> Skontaktuj się z nami, 
                    a pomożemy dobrać najlepszy wariant ubezpieczenia dla Twojej podróży.
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

export default TravelInsurance;
