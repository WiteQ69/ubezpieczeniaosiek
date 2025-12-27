import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { FileText } from "lucide-react";
import { useForm } from "@formspree/react";

const CarSale = () => {
  const { toast } = useToast();
  const [state, formspreeSubmit] = useForm("mgoevana");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await formspreeSubmit(e);

    if (state.succeeded) {
      toast({
        title: "Zgłoszenie wysłane!",
        description: "Zgłoszenie sprzedaży pojazdu zostało wysłane do doradcy.",
      });
      (e.target as HTMLFormElement).reset();
    } else if (state.errors) {
      toast({
        title: "Błąd wysyłania",
        description: "Sprawdź pola i spróbuj ponownie.",
        variant: "destructive",
      });
    }
  };

  if (state.succeeded) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 py-12 bg-secondary/20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle>Dziękujemy!</CardTitle>
                  <CardDescription>Zgłoszenie sprzedaży pojazdu zostało wysłane.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Wkrótce skontaktujemy się z Tobą.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12 bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex p-3 rounded-full bg-primary/10 mb-4">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl font-bold text-foreground mb-4">Zgłoszenie sprzedaży pojazdu</h1>
              <p className="text-lg text-muted-foreground">
                Wypełnij formularz i dołącz umowę sprzedaży (zdjęcie / skan).
              </p>
            </div>

            <Card className="border-border">
              <CardHeader>
                <CardTitle>Zgłoszenie sprzedaży pojazdu</CardTitle>
                <CardDescription>Wszystkie pola oznaczone * są wymagane</CardDescription>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-8" encType="multipart/form-data">
                  <input type="hidden" name="_subject" value="ZGŁOSZENIE SPRZEDAŻY POJAZDU - NOWE ZGŁOSZENIE" />

                  {/* DANE UMOWY */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">DANE UMOWY</h3>

                    <div className="space-y-2">
                      <Label htmlFor="saleAgreement">SKANY / ZDJĘCIA DOKUMENTÓW *</Label>
                      <Label htmlFor="saleAgreement" className="text-sm text-muted-foreground">
                        ZDJĘCIE / SKAN UMOWY SPRZEDAŻY *
                      </Label>
                      <Input
                        id="saleAgreement"
                        name="ZDJĘCIE / SKAN UMOWY SPRZEDAŻY"
                        type="file"
                        accept="image/*,application/pdf"
                        required
                      />
                    </div>
                  </div>

                  {/* KONTAKT */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">KONTAKT</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="fullName">IMIĘ I NAZWISKO *</Label>
                        <Input id="fullName" name="IMIĘ I NAZWISKO" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">TELEFON KONTAKTOWY *</Label>
                        <Input id="phone" name="TELEFON KONTAKTOWY" type="tel" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">E-MAIL KONTAKTOWY *</Label>
                        <Input id="email" name="E-MAIL KONTAKTOWY" type="email" required />
                      </div>
                    </div>
                  </div>

                  {/* WIADOMOŚĆ */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">WIADOMOŚĆ DO AGENTA</h3>
                    <div className="space-y-2">
                      <Label htmlFor="message">NAPISZ WIADOMOŚĆ DO AGENTA</Label>
                      <Textarea id="message" name="NAPISZ WIADOMOŚĆ DO AGENTA" className="min-h-[120px]" />
                    </div>
                  </div>

                  {/* ZGODY */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">ZGODY</h3>

                    <input type="hidden" name="ZGODA: PRZETWARZANIE DANYCH OSOBOWYCH" value="NIE" />
                    <input type="hidden" name="ZGODA: INFORMACJE HANDLOWE EMAIL" value="NIE" />
                    <input type="hidden" name="ZGODA: KONTAKT TELEFONICZNY" value="NIE" />
                    <input type="hidden" name="AKCEPTUJĘ REGULAMIN I POLITYKĘ PRYWATNOŚCI" value="NIE" />

                    <div className="space-y-3">
                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="consentPersonalData"
                          name="ZGODA: PRZETWARZANIE DANYCH OSOBOWYCH"
                          value="TAK"
                          required
                        />
                        <Label htmlFor="consentPersonalData" className="font-normal cursor-pointer leading-relaxed">
                          Wyrażam zgodę na przetwarzanie moich danych osobowych przez multiagenta ubezpieczeniowego{" "}
                          <span className="font-medium">"SIGMA" Beata Paczyńska NIP 5492191680</span> w celu przedstawienia
                          i porównania ofert oraz kontaktu. *
                        </Label>
                      </div>

                      <div className="flex items-start space-x-2">
                        <Checkbox id="consentEmailMarketing" name="ZGODA: INFORMACJE HANDLOWE EMAIL" value="TAK" />
                        <Label htmlFor="consentEmailMarketing" className="font-normal cursor-pointer leading-relaxed">
                          Wyrażam zgodę na otrzymywanie informacji handlowych drogą elektroniczną (kontakt emailowy).
                        </Label>
                      </div>

                      <div className="flex items-start space-x-2">
                        <Checkbox id="consentPhoneMarketing" name="ZGODA: KONTAKT TELEFONICZNY" value="TAK" />
                        <Label htmlFor="consentPhoneMarketing" className="font-normal cursor-pointer leading-relaxed">
                          Wyrażam zgodę na kontakt telefoniczny.
                        </Label>
                      </div>

                      <div className="flex items-start space-x-2">
                        <Checkbox id="acceptTerms" name="AKCEPTUJĘ REGULAMIN I POLITYKĘ PRYWATNOŚCI" value="TAK" required />
                        <Label htmlFor="acceptTerms" className="font-normal cursor-pointer leading-relaxed">
                          Akceptuję regulamin i politykę prywatności serwisu ubezpieczeniowego Sigma Ubezpieczenia. *
                        </Label>
                      </div>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary-dark text-primary-foreground text-lg py-6"
                    disabled={state.submitting}
                  >
                    {state.submitting ? "Wysyłanie..." : "Wyślij zgłoszenie"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CarSale;
