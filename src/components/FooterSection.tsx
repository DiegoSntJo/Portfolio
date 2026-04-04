const FooterSection = ({ lang = "pt" }: { lang?: "pt" | "en" }) => (
  <footer className="border-t border-border py-8">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-muted-foreground text-sm">
      © {new Date().getFullYear()} Diego Santos de Araújo. {lang === "pt" ? "Feito com coração e mente." : "Made with heart and mind."}
    </div>
  </footer>
);

export default FooterSection;
