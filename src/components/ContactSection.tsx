import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactContent = {
  pt: {
    title: "Vamos ",
    titleHighlight: "Conversar?",
    subtitle: "Estou aberto a oportunidades, projetos e boas conversas sobre tecnologia.",
    links: [
      { icon: Github, label: "GitHub", href: "https://github.com/DiegoSntJo", color: "hover:text-primary" },
      { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/diego-santos-de-araújo-2b9047186", color: "hover:text-primary" },
      { icon: Mail, label: "Email", href: "mailto:finndiego@hotmail.com", color: "hover:text-orange-500" },
    ],
    button: "Agendar Conversa",
  },
  en: {
    title: "Let's ",
    titleHighlight: "Talk?",
    subtitle: "I'm open to opportunities, projects and good tech talks.",
    links: [
      { icon: Github, label: "GitHub", href: "https://github.com/DiegoSntJo", color: "hover:text-primary" },
      { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/diego-santos-de-araújo-2b9047186", color: "hover:text-primary" },
      { icon: Mail, label: "Email", href: "mailto:finndiego@hotmail.com", color: "hover:text-orange-500" },
    ],
    button: "Schedule a Chat",
  }
};

const ContactSection = ({ lang = "pt" }: { lang?: "pt" | "en" }) => {
  const t = contactContent[lang];
  return (
    <section id="contato" className="py-24 px-4">
      <div className="container max-w-2xl text-center">
        <motion.div
          className="flex justify-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-2">
            <Mail className="text-primary" size={28} />
            {t.title}<span className="text-cyan-500">{t.titleHighlight}</span>
          </h2>
        </motion.div>
        <p className="text-muted-foreground mb-12">
          {t.subtitle}
        </p>

        <motion.div
          className="flex justify-center gap-6 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {t.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`glass-card rounded-lg p-4 text-muted-foreground ${link.color} transition-all duration-300 hover:glow-cyan`}
              aria-label={link.label}
            >
              <link.icon className="h-6 w-6" />
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Button
            size="lg"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-orange-500 text-white font-semibold hover:opacity-90 transition-opacity shadow-[0_0_32px_0_rgba(255,165,0,0.4)]"
          >
            <Calendar className="mr-2 h-4 w-4" />
            {t.button}
          </Button>
        </motion.div>

      </div>
    </section>
  );
};

export default ContactSection;
