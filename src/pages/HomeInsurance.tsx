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
import { Home } from "lucide-react";
import { useMemo } from "react";
import { useForm } from "@formspree/react";

const HomeInsurance = () => {
  const { toast } = useToast();
  const [state, formspreeSubmit] = useForm("mgoevana");
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await formspreeSubmit(e);

    // Formspree zmienia state asynchronicznie, ale w praktyce toast zadziała poprawnie.
    if (state.succeeded) {
      toast({
        title: "Formularz wysłany!",
        description: "Zgłoszenie zostało wysłane do doradcy.",
      });
      (e.target as HTMLFormElement).reset();
    } else if (state.errors && Object.keys(state.errors).length > 0) {
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
                  <CardDescription>Formularz został wysłany.</CardDescription>
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
                <Home className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl font-bold text-foreground mb-4">Ubezpieczenie domu i mieszkania</h1>
              <p className="text-lg text-muted-foreground">
                Wypełnij formularz, a my znajdziemy dla Ciebie najlepsze oferty ubezpieczenia nieruchomości
              </p>
            </div>

            <Card className="border-border">
              <CardHeader>
                <CardTitle>Kalkulator ubezpieczenia nieruchomości</CardTitle>
                <CardDescription>Wszystkie pola oznaczone * są wymagane</CardDescription>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Temat maila w Formspree */}
                  <input
                    type="hidden"
                    name="_subject"
                    value="KALKULATOR UBEZPIECZENIA - NOWE ZGŁOSZENIE"
                  />

                  {/* ===================== DANE OSOBY UBEZPIECZAJĄCEJ ===================== */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">DANE OSOBY UBEZPIECZAJĄCEJ</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="insurerFullName">IMIĘ I NAZWISKO UBEZPIECZAJĄCEGO *</Label>
                        <Input
                          id="insurerFullName"
                          name="IMIĘ I NAZWISKO UBEZPIECZAJĄCEGO"
                          required
                          placeholder="Imię i nazwisko"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="pesel">PESEL *</Label>
                        <Input
                          id="pesel"
                          name="PESEL"
                          required
                          inputMode="numeric"
                          pattern="^[0-9]{11}$"
                          placeholder="11 cyfr"
                          title="PESEL powinien mieć 11 cyfr"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">TELEFON *</Label>
                        <Input id="phone" name="TELEFON" type="tel" required placeholder="123-456-789" />
                      </div>

                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="email">EMAIL *</Label>
                        <Input id="email" name="EMAIL" type="email" required placeholder="example@domain.com" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="insurerStreet">ULICA *</Label>
                        <Input id="insurerStreet" name="ULICA (UBEZPIECZAJĄCY)" required placeholder="np. Główna" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="insurerHouseNo">NR. DOMU / MIESZKANIA *</Label>
                        <Input id="insurerHouseNo" name="NR. DOMU / MIESZKANIA (UBEZPIECZAJĄCY)" required placeholder="np. 114" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="insurerPostalCode">KOD POCZTOWY *</Label>
                        <Input
                          id="insurerPostalCode"
                          name="KOD POCZTOWY (UBEZPIECZAJĄCY)"
                          required
                          placeholder="00-000"
                          pattern="^[0-9]{2}-[0-9]{3}$"
                          title="Kod pocztowy w formacie 00-000"
                        />
                      </div>

                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="insurerCity">MIASTO *</Label>
                        <Input id="insurerCity" name="MIASTO (UBEZPIECZAJĄCY)" required placeholder="np. Osiek" />
                      </div>

                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="coOwner">CZY JEST WSPÓŁWŁAŚCICIEL? *</Label>
                        <Select name="CZY JEST WSPÓŁWŁAŚCICIEL?" required>
                          <SelectTrigger id="coOwner">
                            <SelectValue placeholder="WYBIERZ" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="TAK">TAK</SelectItem>
                            <SelectItem value="NIE">NIE</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* ===================== ADRES MIEJSCA UBEZPIECZENIA ===================== */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">ADRES MIEJSCA UBEZPIECZENIA</h3>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="riskStreet">ULICA *</Label>
                        <Input id="riskStreet" name="ULICA (MIEJSCE UBEZPIECZENIA)" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="riskHouseNo">NR. DOMU / MIESZKANIA *</Label>
                        <Input id="riskHouseNo" name="NR. DOMU / MIESZKANIA (MIEJSCE UBEZPIECZENIA)" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="riskPostalCode">KOD POCZTOWY *</Label>
                        <Input
                          id="riskPostalCode"
                          name="KOD POCZTOWY (MIEJSCE UBEZPIECZENIA)"
                          required
                          placeholder="00-000"
                          pattern="^[0-9]{2}-[0-9]{3}$"
                          title="Kod pocztowy w formacie 00-000"
                        />
                      </div>

                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="riskCity">MIASTO *</Label>
                        <Input id="riskCity" name="MIASTO (MIEJSCE UBEZPIECZENIA)" required />
                      </div>

                      {/* fallback dla checkboxa */}
                      <input type="hidden" name="ADRES TAKI SAM JAK UBEZPIECZAJĄCEGO" value="NIE" />
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="sameAsInsurerAddress">ADRES TAKI SAM JAK UBEZPIECZAJĄCEGO</Label>
                        <div className="flex items-center space-x-2 pt-2">
                          <Checkbox
                            id="sameAsInsurerAddress"
                            name="ADRES TAKI SAM JAK UBEZPIECZAJĄCEGO"
                            value="TAK"
                          />
                          <Label htmlFor="sameAsInsurerAddress" className="font-normal cursor-pointer">
                            TAK (jeśli zaznaczysz, możesz pominąć uzupełnianie powyżej)
                          </Label>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ===================== DANE DO POLISY ===================== */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">DANE DO POLISY</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="insureWhat">CHCĘ UBEZPIECZYĆ *</Label>
                        <Select name="CHCĘ UBEZPIECZYĆ" required>
                          <SelectTrigger id="insureWhat">
                            <SelectValue placeholder="WYBIERZ..." />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="DOM">DOM</SelectItem>
                            <SelectItem value="MIESZKANIE">MIESZKANIE</SelectItem>
                            <SelectItem value="DOM + GARAŻ">DOM + GARAŻ</SelectItem>
                            <SelectItem value="MIESZKANIE + GARAŻ">MIESZKANIE + GARAŻ</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="buildingType">TYP ZABUDOWY *</Label>
                        <Select name="TYP ZABUDOWY" required>
                          <SelectTrigger id="buildingType">
                            <SelectValue placeholder="WYBIERZ..." />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="WOLNOSTOJĄCY">WOLNOSTOJĄCY</SelectItem>
                            <SelectItem value="BLIŹNIAK">BLIŹNIAK</SelectItem>
                            <SelectItem value="SZEREGOWY">SZEREGOWY</SelectItem>
                            <SelectItem value="WIELORODZINNY">WIELORODZINNY</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="constructionYear">ROK BUDOWY *</Label>
                        <Input
                          id="constructionYear"
                          name="ROK BUDOWY"
                          type="number"
                          min="1800"
                          max={currentYear}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="usableArea">POWIERZCHNIA UŻYTKOWA (m2) *</Label>
                        <Input id="usableArea" name="POWIERZCHNIA UŻYTKOWA (m2)" type="number" min="1" step="1" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="floors">LICZBA PIĘTER *</Label>
                        <Input
                          id="floors"
                          name="LICZBA PIĘTER (JEŻELI DOM PARTEROWY WPISZ 0)"
                          type="number"
                          min="0"
                          step="1"
                          required
                          placeholder="Jeżeli dom parterowy wpisz 0"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="extraAntiTheft">DODATKOWE ZABEZPIECZENIA PRZECIWKRADZIEŻOWE? *</Label>
                        <Select name="DODATKOWE ZABEZPIECZENIA PRZECIWKRADZIEŻOWE?" required>
                          <SelectTrigger id="extraAntiTheft">
                            <SelectValue placeholder="WYBIERZ..." />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="TAK">TAK</SelectItem>
                            <SelectItem value="NIE">NIE</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="buildingConstruction">KONSTRUKCJA BUDYNKU *</Label>
                        <Select name="KONSTRUKCJA BUDYNKU" required>
                          <SelectTrigger id="buildingConstruction">
                            <SelectValue placeholder="WYBIERZ..." />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="MUROWANA">MUROWANA</SelectItem>
                            <SelectItem value="DREWNIANA">DREWNIANA</SelectItem>
                            <SelectItem value="SZKIELETOWA">SZKIELETOWA</SelectItem>
                            <SelectItem value="INNA">INNA</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="roofConstruction">KONSTRUKCJA DACHU *</Label>
                        <Select name="KONSTRUKCJA DACHU" required>
                          <SelectTrigger id="roofConstruction">
                            <SelectValue placeholder="WYBIERZ..." />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="DREWNIANA">DREWNIANA</SelectItem>
                            <SelectItem value="STALOWA">STALOWA</SelectItem>
                            <SelectItem value="ŻELBETOWA">ŻELBETOWA</SelectItem>
                            <SelectItem value="INNA">INNA</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="generalRenovation">CZY DOM PRZECHODZIŁ GENERALNY REMONT? *</Label>
                        <Select name="CZY DOM PRZECHODZIŁ GENERALNY REMONT?" required>
                          <SelectTrigger id="generalRenovation">
                            <SelectValue placeholder="WYBIERZ..." />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="TAK">TAK</SelectItem>
                            <SelectItem value="NIE">NIE</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="insuranceContinuation">CZY JEST TO KONTYNUACJA UBEZPIECZENIA? *</Label>
                        <Select name="CZY JEST TO KONTYNUACJA UBEZPIECZENIA?" required>
                          <SelectTrigger id="insuranceContinuation">
                            <SelectValue placeholder="WYBIERZ..." />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="TAK">TAK</SelectItem>
                            <SelectItem value="NIE">NIE</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="bankAssignment">CZY JEST CESJA BANKU? *</Label>
                        <Select name="CZY JEST CESJA BANKU?" required>
                          <SelectTrigger id="bankAssignment">
                            <SelectValue placeholder="WYBIERZ..." />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="TAK">TAK</SelectItem>
                            <SelectItem value="NIE">NIE</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="businessActivity">CZY W BUDYNKU JEST PROWADZONA DZIAŁALNOŚĆ GOSPODARCZA? *</Label>
                        <Select name="CZY W BUDYNKU JEST PROWADZONA DZIAŁALNOŚĆ GOSPODARCZA?" required>
                          <SelectTrigger id="businessActivity">
                            <SelectValue placeholder="WYBIERZ..." />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="TAK">TAK</SelectItem>
                            <SelectItem value="NIE">NIE</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="rentedRooms">CZY POMIESZCZENIA SĄ WYNAJMOWANE? *</Label>
                        <Select name="CZY POMIESZCZENIA SĄ WYNAJMOWANE?" required>
                          <SelectTrigger id="rentedRooms">
                            <SelectValue placeholder="WYBIERZ..." />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="TAK">TAK</SelectItem>
                            <SelectItem value="NIE">NIE</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="floodLast10Years">CZY W OSTATNICH 10 LATACH WYSTĄPIŁA POWÓDŹ W MIEJSCU UBEZPIECZENIA? *</Label>
                        <Select name="CZY W OSTATNICH 10 LATACH WYSTĄPIŁA POWÓDŹ W MIEJSCU UBEZPIECZENIA?" required>
                          <SelectTrigger id="floodLast10Years">
                            <SelectValue placeholder="WYBIERZ..." />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="TAK">TAK</SelectItem>
                            <SelectItem value="NIE">NIE</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="unoccupiedOver3Months">CZY WYSTĘPOWAŁY PRZERWY W ZAMIESZKANIU DŁUŻSZE NIŻ 3 MIESIĄCE? *</Label>
                        <Select name="CZY WYSTĘPOWAŁY PRZERWY W ZAMIESZKANIU DŁUŻSZE NIŻ 3 MIESIĄCE?" required>
                          <SelectTrigger id="unoccupiedOver3Months">
                            <SelectValue placeholder="WYBIERZ..." />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="TAK">TAK</SelectItem>
                            <SelectItem value="NIE">NIE</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="roofWindows">CZY SĄ OKNA DACHOWE? *</Label>
                        <Select name="CZY SĄ OKNA DACHOWE?" required>
                          <SelectTrigger id="roofWindows">
                            <SelectValue placeholder="WYBIERZ..." />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="TAK">TAK</SelectItem>
                            <SelectItem value="NIE">NIE</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="basement">CZY JEST PIWNICA? *</Label>
                        <Select name="CZY JEST PIWNICA?" required>
                          <SelectTrigger id="basement">
                            <SelectValue placeholder="WYBIERZ..." />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="TAK">TAK</SelectItem>
                            <SelectItem value="NIE">NIE</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* ===================== ZAKRES + WARTOŚCI ===================== */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">ZAKRES UBEZPIECZENIA I WARTOŚCI</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="coverageScope">JAKI ZAKRES UBEZPIECZENIA CIĘ INTERESUJE? *</Label>
                        <Select name="JAKI ZAKRES UBEZPIECZENIA CIĘ INTERESUJE?" required>
                          <SelectTrigger id="coverageScope">
                            <SelectValue placeholder="WYBIERZ..." />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="PODSTAWOWY">PODSTAWOWY</SelectItem>
                            <SelectItem value="ROZSZERZONY">ROZSZERZONY</SelectItem>
                            <SelectItem value="ALL RISK">ALL RISK</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="buildingSum">SZACUNKOWA WARTOŚĆ BUDYNKU (SUMA UBEZPIECZENIA) – ZŁ *</Label>
                        <Input id="buildingSum" name="SZACUNKOWA WARTOŚĆ BUDYNKU (SUMA UBEZPIECZENIA) – ZŁ" type="number" min="0" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="movablesSum">WARTOŚĆ RUCHOMOŚCI (SPRZĘTY, MEBLE, PRZEDMIOTY OSOBISTE) – ZŁ</Label>
                        <Input id="movablesSum" name="WARTOŚĆ RUCHOMOŚCI (SPRZĘTY, MEBLE, PRZEDMIOTY OSOBISTE) – ZŁ" type="number" min="0" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="pvHeatPumpSum">WARTOŚĆ INSTALACJI FOTOWOLTAICZNEJ / POMPA CIEPŁA – ZŁ</Label>
                        <Input id="pvHeatPumpSum" name="WARTOŚĆ INSTALACJI FOTOWOLTAICZNEJ / POMPA CIEPŁA – ZŁ" type="number" min="0" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="freeStandingGarageSum">WARTOŚĆ GARAŻU WOLNOSTOJĄCEGO JEŚLI JEST – ZŁ</Label>
                        <Input id="freeStandingGarageSum" name="WARTOŚĆ GARAŻU WOLNOSTOJĄCEGO JEŚLI JEST – ZŁ" type="number" min="0" />
                      </div>
                    </div>
                  </div>

                  {/* ===================== DODATKI ===================== */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">DODATKOWE OPCJE</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        "PRZEPIĘCIA",
                        "POWÓDŹ",
                        "SZYBY I PRZEDMIOTY SZKLANE",
                        "OC W ŻYCIU PRYWATNYM",
                        "ASSISTANCE DOMOWY",
                        "KOSZTY POSZUKIWANIA PRZYCZYNY SZKODY",
                        "SZKODY MROZOWE",
                        "RAŻĄCE NIEDBALSTWO",
                        "NNW MIESZKAŃCÓW",
                      ].map((label) => (
                        <div className="space-y-2" key={label}>
                          <Label>{label}</Label>
                          <Select name={label}>
                            <SelectTrigger>
                              <SelectValue placeholder="WYBIERZ..." />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="CHCĘ UBEZPIECZYĆ">CHCĘ UBEZPIECZYĆ</SelectItem>
                              <SelectItem value="NIE CHCĘ UBEZPIECZYĆ">NIE CHCĘ UBEZPIECZYĆ</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* ===================== WIADOMOŚĆ ===================== */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">WIADOMOŚĆ DO AGENTA</h3>
                    <div className="space-y-2">
                      <Label htmlFor="message">NAPISZ WIADOMOŚĆ</Label>
                      <Textarea
                        id="message"
                        name="NAPISZ WIADOMOŚĆ DO AGENTA"
                        placeholder="Dodatkowe informacje..."
                        className="min-h-[120px]"
                      />
                    </div>
                  </div>

                  {/* ===================== ZGODY ===================== */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">ZGODY</h3>

                    {/* fallback hidden */}
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
                          Wyrażam zgodę na przetwarzanie moich danych osobowych przez multiagenta ubezpieczeniowego
                          {" "}
                          <span className="font-medium">"SIGMA" Beata Paczyńska NIP 5492191680</span>
                          {" "}
                          w celu przedstawienia i porównania ofert oraz kontaktu. *
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

export default HomeInsurance;
