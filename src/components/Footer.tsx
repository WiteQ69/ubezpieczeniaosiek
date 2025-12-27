import { Shield, Mail, Phone, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-primary p-2 rounded-lg">
                <Shield className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-primary">SIGMA</span>
                <span className="text-xs text-muted-foreground">Ubezpieczenia</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Multiagencja ubezpieczeniowa w Osieku. Kompleksowe ubezpieczenia dopasowane do Twoich potrzeb.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Szybkie linki</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                  Strona główna
                </Link>
              </li>
              <li>
                <Link to="/ubezpieczenie-domu" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                  Ubezpiecz dom/mieszkanie
                </Link>
              </li>
              <li>
                <Link to="/kalkulator-oc-ac" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                  Kalkulator OC/AC
                </Link>
              </li>
              <li>
                <Link to="/kontakt" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Nasze usługi</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/ubezpieczenia-szkolne" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                  Ubezpieczenia szkolne
                </Link>
              </li>
              <li>
                <Link to="/ubezpieczenia-turystyczne" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                  Ubezpieczenia turystyczne
                </Link>
              </li>
              <li>
                <Link to="/assistance" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                  Assistance
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Osiek, Małopolska</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <a href="mailto:sigma@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                  sigma@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <a href="tel:123456789" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                  123-456-789
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Pon-Pt: 9:00-17:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} SIGMA Ubezpieczenia - Beata Paczyńska. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
