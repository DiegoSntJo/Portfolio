import { motion } from "framer-motion";
import { Layers } from "lucide-react";
import { title } from "process";

const stackContent = {
  pt: {
    title: "Stack & ",
    titleHighlight: "Ferramentas",
    subtitle:"Tecnologias que uso para construir soluções.",
    categories: [
      { label: "Linguagens", badgeClass: "badge-lang", items: ["Python", "Java", "PHP", "C++", "JavaScript", "SQL"] },
      { label: "Frameworks", badgeClass: "badge-framework", items: ["Django", "Vue.js", "React", "Bootstrap", "Materialize CSS"] },
      { label: "Banco de Dados", badgeClass: "badge-db", items: ["PostgreSQL", "MySQL"] },
      { label: "Infraestrutura", badgeClass: "badge-infra", items: ["Windows Server", "Linux", "Windows 10/11"] },
      { label: "Ferramentas", badgeClass: "badge-tools", items: ["Git", "GitHub", "Node.js", "Power BI", "Docker"] },
      { label: "Design", badgeClass: "badge-design", items: ["Adobe Photoshop", "Sony Vegas"] },
    ],
  },
  en: {
    title: "Stack & ",
    titleHighlight: "Tools",
    subtitle:"Technologies I use to build solutions.",
    categories: [
      { label: "Languages", badgeClass: "badge-lang", items: ["Python", "Java", "PHP", "C++", "JavaScript", "SQL"] },
      { label: "Frameworks", badgeClass: "badge-framework", items: ["Django", "Vue.js", "React", "Bootstrap", "Materialize CSS"] },
      { label: "Databases", badgeClass: "badge-db", items: ["PostgreSQL", "MySQL"] },
      { label: "Infrastructure", badgeClass: "badge-infra", items: ["Windows Server", "Linux", "Windows 10/11"] },
      { label: "Tools", badgeClass: "badge-tools", items: ["Git", "GitHub", "Node.js", "Power BI", "Docker"] },
      { label: "Design", badgeClass: "badge-design", items: ["Adobe Photoshop", "Sony Vegas"] },
    ],
  },
};

const StackSection = ({ lang = "pt" }: { lang?: "pt" | "en" }) => {
  const t = stackContent[lang];
  return (
    <section id="stack" className="section-container">
      <motion.div
        className="flex justify-center mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-2">
          <Layers className="text-primary" size={28} />
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

      <div className="space-y-8">
        {t.categories.map((cat, i) => (
          <motion.div
            key={cat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
              {cat.label}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <span key={item} className={cat.badgeClass}>
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StackSection;
