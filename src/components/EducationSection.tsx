import { motion } from "framer-motion";
import { GraduationCap, BookOpen } from "lucide-react";

const educationContent = {
  pt: {
    title: "Formação ",
    titleHighlight: "Acadêmica",
    subtitle: "Investimento constante em educação e especialização.",
    groups: [
      {
        type: "Graduação",
        icon: <GraduationCap className="h-5 w-5 text-primary" />,
        items: [
          { name: "Redes de Computadores", institution: "Estácio de Sá", status: "Concluído" },
          { name: "Análise e Desenvolvimento de Sistemas", institution: "UNINASSAU", status: "Concluído" },
        ],
      },
      {
        type: "Pós-Graduação",
        icon: <BookOpen className="h-5 w-5 text-orange-500" />,
        items: [
          { name: "Análise de Sistemas", institution: "Faculdade Focus", status: "Concluído" },
          { name: "Computação na Educação", institution: "IFSULDEMINAS", status: "Em andamento 🟡" },
        ],
      },
    ],
  },
  en: {
    title: "Education ",
    titleHighlight: "Academic",
    subtitle: "Continuous investment in education and specialization.",
    groups: [
      {
        type: "Bachelor's",
        icon: <GraduationCap className="h-5 w-5 text-primary" />,
        items: [
          { name: "Computer Networks", institution: "Estácio de Sá", status: "Completed" },
          { name: "Systems Analysis and Development", institution: "UNINASSAU", status: "Completed" },
        ],
      },
      {
        type: "Postgraduate",
        icon: <BookOpen className="h-5 w-5 text-orange-500" />,
        items: [
          { name: "Software Engineering", institution: "Faculdade Focus", status: "Completed" },
          { name: "Computing in Education Systems", institution: "IFSULDEMINAS", status: "In progress 🟡" },
        ],
      },
    ],
  },
};

const EducationSection = ({ lang = "pt" }: { lang?: "pt" | "en" }) => {
  const t = educationContent[lang];
  return (
    <section id="formacao" className="py-24 px-4">
      <div className="container">
        <motion.div
          className="flex justify-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-2">
            <GraduationCap className="text-primary" size={28} />
            {t.title}<span className="text-cyan-500">{t.titleHighlight}</span>
          </h2>
        </motion.div>
        <p className="text-muted-foreground text-center max-w-md mx-auto mb-16">
          {t.subtitle}
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {t.groups.map((group, gi) => (
            <motion.div
              key={group.type}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.2 }}
            >
              <div className="flex items-center gap-2 mb-6">
                {group.icon}
                <h3 className="text-lg font-semibold">{group.type}</h3>
              </div>
              <div className="space-y-4">
                {group.items.map((item) => (
                  <div
                    key={item.name}
                    className="glass-card rounded-lg p-5"
                  >
                    <h4 className="font-medium mb-1">{item.name}</h4>
                    <p className="text-muted-foreground text-sm">{item.institution}</p>
                    <span
                      className={`inline-block mt-2 text-xs px-3 py-1 rounded-md ${
                        item.status.toLowerCase().includes("andamento") || item.status.toLowerCase().includes("progress")
                          ? "bg-orange-500/20 text-orange-500"
                          : "bg-primary/20 text-primary"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
