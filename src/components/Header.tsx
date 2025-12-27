import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "Strona główna", path: "/" },
    { label: "Ubezpiecz dom/mieszkanie", path: "/ubezpieczenie-domu" },
    { label: "Zgłoś zakup pojazdu", path: "/zgloszenie-zakupu" },
    { label: "Zgłoś sprzedaż pojazdu", path: "/zgloszenie-sprzedazy" },
    { label: "Kalkulator OC/AC", path: "/kalkulator-oc-ac" },
    { label: "Ubezpieczenia szkolne", path: "/ubezpieczenia-szkolne" },
    { label: "Podróże turystyczne", path: "/ubezpieczenia-turystyczne" },
    { label: "Assistance", path: "/assistance" },
    { label: "Kontakt", path: "/kontakt" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      {/* To sprawia, że cały pasek jest wyśrodkowany względem strony */}
      <nav className="max-w-8xl mx-auto px-4 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo po lewej */}
          <Link to="/" className="flex items-right gap-2 group shrink-0">
            <div className="bg-primary p-2 rounded-lg group-hover:shadow-glow transition-smooth">
              <Shield className="h-7 w-7 text-primary-foreground" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-xl font-bold text-primary">SIGMA</span>
              <span className="text-xs text-muted-foreground">Ubezpieczenia</span>
            </div>
          </Link>

          {/* Menu po prawej (desktop) */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button
                  variant="ghost"
                  className={cn(
                    "text-sm transition-smooth",
                    isActive(item.path) && "bg-secondary text-primary font-medium"
                  )}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 hover:bg-secondary rounded-lg transition-smooth"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Menu mobilne */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Button
                    variant="ghost"
                    className={cn(
                      "w-full justify-start text-sm transition-smooth",
                      isActive(item.path) && "bg-secondary text-primary font-medium"
                    )}
                  >
                    {item.label}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
