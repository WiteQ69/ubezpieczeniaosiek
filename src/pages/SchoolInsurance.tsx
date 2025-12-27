import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, ExternalLink } from "lucide-react";

const SchoolInsurance = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12 bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex p-3 rounded-full bg-primary/10 mb-4">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl font-bold text-foreground mb-4">
                Ubezpieczenia szkolne
              </h1>
              <p className="text-lg text-muted-foreground">
                Ubezpiecz swoje dziecko online – szybko, wygodnie i bez wychodzenia z domu
              </p>
            </div>

            <div className="space-y-6">
              <Card className="border-border hover:shadow-xl transition-smooth">
                <CardHeader>
                  <CardTitle className="text-2xl">Kompleksowa ochrona dziecka</CardTitle>
                  <CardDescription>
                    Wybierz najlepszą opcję ubezpieczenia NNW dla swojego dziecka
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="prose prose-sm max-w-none">
                    <p className="text-muted-foreground">
                      Ubezpieczenie szkolne zapewnia ochronę Twojego dziecka nie tylko w szkole, 
                      ale również w czasie wolnym, podczas zajęć pozalekcyjnych i wycieczek. 
                      To kompleksowa ochrona na wypadek nieszczęśliwych wypadków.
                    </p>
                  </div>

                  <div className="bg-secondary/50 p-6 rounded-lg">
                    <h3 className="font-semibold text-lg mb-3">Co obejmuje ubezpieczenie?</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">✓</span>
                        <span>Następstwa nieszczęśliwych wypadków (NNW)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">✓</span>
                        <span>Ochrona 24h na dobę przez cały rok</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">✓</span>
                        <span>Koszty leczenia i rehabilitacji</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">✓</span>
                        <span>Świadczenie w razie trwałego uszczerbku</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">✓</span>
                        <span>Pomoc psychologiczna po wypadku</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Wybierz ofertę i ubezpiecz online:</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card className="border-primary/30">
                        <CardHeader>
                          <CardTitle className="text-lg">Signal Iduna</CardTitle>
                          <CardDescription>NNW Szkolne</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <a 
                            href="https://eshop.unilink.pl/nnw-szkolne?agent_code=BP20969" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="block"
                          >
                            <Button className="w-full bg-primary hover:bg-primary-dark text-primary-foreground group">
                              Przejdź do oferty
                              <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-smooth" />
                            </Button>
                          </a>
                        </CardContent>
                      </Card>

                      <Card className="border-primary/30">
                        <CardHeader>
                          <CardTitle className="text-lg">Generali</CardTitle>
                          <CardDescription>Bezpieczny.pl</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <a 
                            href="https://bezpieczny.pl/25508" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="block"
                          >
                            <Button className="w-full bg-primary hover:bg-primary-dark text-primary-foreground group">
                              Przejdź do oferty
                              <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-smooth" />
                            </Button>
                          </a>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  <div className="bg-accent/10 border border-accent/30 p-4 rounded-lg">
                    <p className="text-sm text-foreground">
                      <strong className="text-accent">Potrzebujesz pomocy?</strong> Skontaktuj się z nami, 
                      a pomożemy wybrać najlepszą opcję dla Twojego dziecka.
                    </p>
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

export default SchoolInsurance;
