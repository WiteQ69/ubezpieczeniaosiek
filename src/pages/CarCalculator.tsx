import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Car } from "lucide-react";
import { useForm } from "@formspree/react";
import { useMemo } from "react";

const CarCalculator = () => {
  const { toast } = useToast();
  const [state, formspreeSubmit] = useForm("mgoevana");
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await formspreeSubmit(e);

    if (state.succeeded) {
      toast({
        title: "Formularz wysłany!",
        description: "Zapytanie o wycenę OC/AC zostało wysłane do doradcy.",
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
                  <CardDescription>Zapytanie o wycenę OC/AC zostało wysłane.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Wkrótce skontaktujemy się z Tobą z ofertami.</p>
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
                <Car className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl font-bold text-foreground mb-4">Kalkulator OC / AC</h1>
              <p className="text-lg text-muted-foreground">
                Wypełnij formularz i dołącz zdjęcia dokumentów — otrzymasz wycenę polisy.
              </p>
            </div>

            <Card className="border-border">
              <CardHeader>
                <CardTitle>KALKULATOR OC AC</CardTitle>
                <CardDescription>Wszystkie pola oznaczone * są wymagane</CardDescription>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-8" encType="multipart/form-data">
                  <input type="hidden" name="_subject" value="KALKULATOR OC/AC - NOWE ZGŁOSZENIE" />

                  {/* DANE POJAZDU / DOKUMENTY */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">DANE POJAZDU</h3>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="doc1">SKANY / ZDJĘCIA DOKUMENTÓW</Label>
                        <Label htmlFor="doc1" className="text-sm text-muted-foreground">
                          ZDJĘCIE DOWODU REJESTRACYJNEGO STRONA 1
                        </Label>
                        <Input
                          id="doc1"
                          name="ZDJĘCIE DOWODU REJESTRACYJNEGO STRONA 1"
                          type="file"
                          accept="image/*,application/pdf"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="doc2" className="text-sm text-muted-foreground">
                          ZDJĘCIE DOWODU REJESTRACYJNEGO STRONA 2
                        </Label>
                        <Input
                          id="doc2"
                          name="ZDJĘCIE DOWODU REJESTRACYJNEGO STRONA 2"
                          type="file"
                          accept="image/*,application/pdf"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="policy" className="text-sm text-muted-foreground">
                          ZDJĘCIE OSTATNIEJ POLISY
                        </Label>
                        <Input
                          id="policy"
                          name="ZDJĘCIE OSTATNIEJ POLISY"
                          type="file"
                          accept="image/*,application/pdf"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="newOwner">CZY JESTEŚ NOWONABYWCĄ POJAZDU? *</Label>
                      <Select name="CZY JESTEŚ NOWONABYWCĄ POJAZDU?" required>
                        <SelectTrigger id="newOwner">
                          <SelectValue placeholder="WYBIERZ..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="TAK">TAK</SelectItem>
                          <SelectItem value="NIE">NIE</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* DANE DODATKOWE */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">DANE DODATKOWE</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="mileage">AKTUALNY PRZEBIEG POJAZDU (KM)</Label>
                        <Input id="mileage" name="AKTUALNY PRZEBIEG POJAZDU (KM)" type="number" min="0" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="originCountry">KRAJ POCHODZENIA POJAZDU</Label>
                        <Input id="originCountry" name="KRAJ POCHODZENIA POJAZDU" placeholder="np. Polska" />
                      </div>

                      <input type="hidden" name="KIEROWNICA PO PRAWEJ STRONIE" value="NIE" />
                      <div className="space-y-2">
                        <Label htmlFor="rightHandDrive">KIEROWNICA PO PRAWEJ STRONIE</Label>
                        <div className="flex items-center space-x-2 pt-2">
                          <Checkbox id="rightHandDrive" name="KIEROWNICA PO PRAWEJ STRONIE" value="TAK" />
                          <Label htmlFor="rightHandDrive" className="font-normal cursor-pointer">
                            TAK
                          </Label>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="usage">SPOSÓB UŻYTKOWANIA POJAZDU *</Label>
                        <Select name="SPOSÓB UŻYTKOWANIA POJAZDU" required>
                          <SelectTrigger id="usage">
                            <SelectValue placeholder="WYBIERZ..." />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="PRYWATNIE">PRYWATNIE</SelectItem>
                            <SelectItem value="FIRMA">FIRMA</SelectItem>
                            <SelectItem value="MIESZANY">MIESZANY</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="licenseDate">DATA UZYSKANIA PRAWA JAZDY KAT. B WŁAŚCICIELA POJAZDU</Label>
                        <Input id="licenseDate" name="DATA UZYSKANIA PRAWA JAZDY KAT. B WŁAŚCICIELA POJAZDU" type="date" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="driverUnder26">CZY POJAZDEM BĘDZIE KIEROWAŁA OSOBA DO 26 ROKU ŻYCIA? *</Label>
                        <Select name="CZY POJAZDEM BĘDZIE KIEROWAŁA OSOBA DO 26 ROKU ŻYCIA?" required>
                          <SelectTrigger id="driverUnder26">
                            <SelectValue placeholder="WYBIERZ..." />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="TAK">TAK</SelectItem>
                            <SelectItem value="NIE">NIE</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="carValue">SZACUNKOWA WARTOŚĆ SAMOCHODU (ZŁ)</Label>
                        <Input id="carValue" name="SZACUNKOWA WARTOŚĆ SAMOCHODU (ZŁ)" type="number" min="0" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="productionYear">ROK PRODUKCJI (opcjonalnie)</Label>
                        <Input
                          id="productionYear"
                          name="ROK PRODUKCJI"
                          type="number"
                          min="1900"
                          max={currentYear}
                        />
                      </div>
                    </div>
                  </div>

                  {/* ZAZNACZ UBEZPIECZENIE */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">ZAZNACZ UBEZPIECZENIE KTÓRE CIĘ INTERESUJE</h3>

                    {[
                      "OC",
                      "NNW",
                      "AC",
                      "ASS",
                      "SZYBY",
                      "OPONY",
                    ].map((k) => (
                      <div className="flex items-center space-x-2" key={k}>
                        <input type="hidden" name={`UBEZPIECZENIE: ${k}`} value="NIE" />
                        <Checkbox id={`ins_${k}`} name={`UBEZPIECZENIE: ${k}`} value="TAK" />
                        <Label htmlFor={`ins_${k}`} className="font-normal cursor-pointer">
                          {k}
                        </Label>
                      </div>
                    ))}
                  </div>

                  {/* KONTAKT */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">KONTAKT</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="contactName">IMIĘ I NAZWISKO *</Label>
                        <Input id="contactName" name="IMIĘ I NAZWISKO" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="contactPhone">TELEFON KONTAKTOWY *</Label>
                        <Input id="contactPhone" name="TELEFON KONTAKTOWY" type="tel" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="contactEmail">E-MAIL DO WYCENY POLISY *</Label>
                        <Input id="contactEmail" name="E-MAIL DO WYCENY POLISY" type="email" required />
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
                    {state.submitting ? "Wysyłanie..." : "Wyślij formularz"}
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

export default CarCalculator;
