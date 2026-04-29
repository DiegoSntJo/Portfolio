import { sub } from "date-fns";
import { motion } from "framer-motion";
import { User } from "lucide-react";

const aboutContent = {
  pt: {
    title: "Sobre ",
    titleHighlight: "Mim",
    subtitle:
      "O que me move como profissional de tecnologia.",
    cards: [
      {
        emoji: "🧩",
        title: "Versatilidade Técnica",
        text: "Do frontend ao backend, dos servidores ao suporte com cliente. Resolvo problemas em múltiplas camadas com a ferramenta certa para cada desafio.",
      },
      {
        emoji: "🎓",
        title: "Aprendizado Contínuo",
        text: "Duas graduações, duas pós (uma em andamento) e uma sede constante por conhecimento, no estudo diário de novas tecnologias. Cada projeto é uma oportunidade de evoluir e evoluir é meu padrão.",
      },
      {
        emoji: "🤝",
        title: "Empatia e Ensino",
        text: "Experiência como instrutor e suporte me ensinou a ouvir, simplificar e resolver — sempre com foco na pessoa.\n Já dei aula para crianças, idosos e PCDs. Comunicação clara e paciência são minhas ferramentas de trabalho.",
      },
    ],
  },
  en: {
    title: "About ",
    titleHighlight: "Me",
    subtitle:
      "What drives me as a technology professional.",
    cards: [
      {
        emoji: "🧩",
        title: "Technical Versatility",
        text: "From frontend to backend, from servers to client support. I solve problems at multiple layers with the right tool for each challenge.",
      },
      {
        emoji: "🎓",
        title: "Continuous Learning",
        text: "Two undergraduate degrees, two postgrads (one ongoing) and a constant thirst for knowledge, studying new technologies daily. Every project is an opportunity to grow, and growth is my standard.",
      },
      {
        emoji: "🤝",
        title: "Empathy & Teaching",
        text: "Experience as an instructor and in support taught me to listen, simplify, and solve — always with a people-first focus. I've taught children, the elderly, and people with disabilities. Clear communication and patience are my main tools.",
      },
    ],
  },
};

const AboutSection = ({ lang = "pt" }: { lang?: "pt" | "en" }) => {
  const t = aboutContent[lang];
  return (
    <section id="sobre" className="section-container" style={{ backgroundColor: "#000000", backgroundImage: "url('https://www.transparenttextures.com/patterns/inspiration-geometry.png')", maxWidth: "none",}}>
      <motion.div
        className="flex justify-center mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-2">
          <User className="text-primary" size={28} />
          {t.title}<span className="text-cyan-500">{t.titleHighlight}</span>
        </h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-muted-foreground max-w-3xl mb-12 text-base sm:text-lg leading-relaxed text-center mx-auto"
      >
        {t.subtitle}
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {t.cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="glass-card p-6 hover:border-primary/30 transition-colors duration-300"
          >
            <span className="text-3xl mb-3 block">{card.emoji}</span>
            <h3 className="text-lg font-bold text-foreground mb-2">{card.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{card.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
