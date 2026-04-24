import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "../App";

const navItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Stack", href: "#stack" },
  { label: "Projetos", href: "#projetos" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Formação", href: "#formacao" },
  { label: "Contato", href: "#contato" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { lang, setLang } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/50">
      <div className="container flex items-center justify-between h-16 px-4">
        <a href="" className="flex items-center gap-2">
          <div
            style={{
              backgroundImage: 'url(/Sign.png)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              width: 120,
              height: 60,
            }}
            aria-label="Logo"
          />
        </a>

        {/* Botão de idioma (mobile) ao lado do menu hamburguer */}
        <div className="flex items-center md:hidden gap-2">
          <button
            onClick={() => setLang(lang === "pt" ? "en" : "pt")}
            className="px-3 py-1.5 rounded-md border border-primary text-primary font-semibold bg-transparent hover:bg-primary/10 transition-colors"
            aria-label={lang === "pt" ? "Switch to English" : "Mudar para Português"}
          >
            {lang === "pt" ? "🇺🇸 EN" : "🇧🇷 PT"}
          </button>
          <button
            className="text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <button
            onClick={() => setLang(lang === "pt" ? "en" : "pt")}
            className="px-3 py-1.5 rounded-md border border-primary text-primary font-semibold bg-transparent hover:bg-primary/10 transition-colors"
            aria-label={lang === "pt" ? "Switch to English" : "Mudar para Português"}
          >
            {lang === "pt" ? "🇺🇸 EN" : "🇧🇷 PT"}
          </button>
          <ul className="flex gap-6">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden glass-card border-t border-border/50 pb-4">
          <ul className="flex flex-col px-4">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="block py-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
