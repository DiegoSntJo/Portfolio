import { motion } from "framer-motion";
import { ArrowDown, FileText } from "lucide-react";

const HeroSection = ({ lang = "pt" }: { lang?: "pt" | "en" }) => {
  const scrollToProjects = () => {
    document.getElementById("projetos")?.scrollIntoView({ behavior: "smooth" });
  };

  const content = {
    pt: {
      name: "Diego Santos\nde Araújo",
      role: "Desenvolvedor Fullstack & Analista de Suporte",
      quote: '"Da infraestrutura ao código, do suporte ao ensino — resolvo problemas onde ninguém quer encostar."',
      age: "25 anos | Versátil por natureza, técnico por formação",
      seeProjects: "Ver Projetos",
      resume: "Currículo",
      pdf: "public/DiegoSantos - Currículo.pdf"
    },
    en: {
      name: "Diego Santos\nde Araújo",
      role: "Fullstack Developer & Support Analyst",
      quote: '"From infrastructure to code, from support to teaching — I solve problems no one wants to touch."',
      age: "25 years old | Versatile by nature, technical by training",
      seeProjects: "See Projects",
      resume: "Resume",
      pdf: "public/DiegoSantos - Resume.pdf"
    }
  };
  const t = content[lang];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 blur-[120px]" style={{ background: "hsl(193, 100%, 42%)" }} />

      <div className="section-container text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-4 text-foreground leading-tight">
            {t.name.split("\n").map((line, i) => (
              <span
                key={i}
                style={i === 1 ? {
                  background: 'linear-gradient(90deg, #06b6d4 30%, #f59e42 70%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  color: 'transparent',
                  display: 'inline-block',
                } : {}}
              >
                {line}
                <br />
              </span>
            ))}
          </h1>
          <p className="text-xl sm:text-2xl font-medium text-muted-foreground mb-8">
            {t.role}
          </p>
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-base sm:text-lg italic text-muted-foreground max-w-2xl mx-auto mb-4 border-l-2 border-primary pl-4 text-left"
        >
          {t.quote}
        </motion.blockquote>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-muted-foreground text-sm mb-10"
        >
          {t.age}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={scrollToProjects}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-white font-semibold hover:opacity-90 transition-opacity shadow-[0_0_32px_0_rgba(6,182,212,0.4)]"
          >
            <ArrowDown size={18} />
            {t.seeProjects}
          </button>
          <a
            href={t.pdf} download target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg border-2 border-orange-500 text-orange-500 font-semibold bg-transparent hover:bg-transparent hover:text-orange-500 hover:border-orange-400 transition-colors"
          >
            <FileText size={18} />
            {t.resume}
          </a>
        </motion.div>
      </div>
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="h-5 w-5 text-muted-foreground" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
