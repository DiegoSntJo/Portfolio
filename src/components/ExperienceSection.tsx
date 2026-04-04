import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const experiencesContent = {
  pt: {
    title: "Experiência ",
    titleHighlight: "Profissional",
    subtitle: "Minha trajetória até aqui.",
    experiences: [
      {
        role: "Estagiário Administrativo",
        company: "DUT - Vistoria Veicular",
        period: "2019 - 2020",
        desc: "Atendimento ao público, emissão de NF, fechamento de caixa, comunicação direta com clientes.",
      },
      {
        role: "Desenvolvedor",
        company: "Freelancer",
        period: "2020 - Atual",
        desc: "",
      },
      {
        role: "Manutenção e Suporte T.I",
        company: "Freelancer",
        period: "2021 - Atual",
        desc: "",
      },
      {
        role: "Instrutor de Tecnologia de Cursos Técnicos",
        company: "Grau Técnico",
        period: "2024 - 2025",
        desc: "",
      },
      {
        role: "Suporte Técnico T.I",
        company: "Grau Técnico",
        period: "2024 - 2025",
        desc: "Servidores,Linux, Redes, Manutenção de computadores. Suporte a todo tipo de público.",
      },
      {
        role: "Instrutor de Tecnologia da Informação",
        company: "Freelancer",
        period: "2025 - 2026",
        desc: "Foco em pessoas com dificuldades de aprendizagem, crianças, idosos e PCDs. Adaptação de conteúdo e paciência para ensinar tecnologia a todos.",
      },
    ],
    currently: {
      label: "Trabalho Atual",
      role: "Analista de Suporte",
      company: "Hosplog",
      period: "2025 - Atual",
      desc: "Suporte a SaaS hospitalar crítico, treinamentos para coordenadores e gestores da saúde, atendimento a clientes importantes.",
    },
  },
  en: {
    title: "Professional ",
    titleHighlight: "Experience",
    subtitle: "My journey so far.",
    experiences: [
      {
        role: "Administrative Intern",
        company: "DUT - Vehicle Inspection",
        period: "2019 - 2020",
        desc: "Customer service, invoice issuance, cash closing, direct communication with clients.",
      },
      {
        role: "Developer",
        company: "Freelancer",
        period: "2020 - Present",
        desc: "",
      },
      {
        role: "IT Maintenance and Support",
        company: "Freelancer",
        period: "2021 - Present",
        desc: "",
      },
      {
        role: "Technical Course Technology Instructor",
        company: "Grau Técnico",
        period: "2024 - 2025",
        desc: "",
      },
      {
        role: "IT Technical Support",
        company: "Grau Técnico",
        period: "2024 - 2025",
        desc: "Servers, Linux, Networks, Computer Maintenance. Support for all types of audiences.",
      },
      {
        role: "Information Technology Instructor",
        company: "Freelancer",
        period: "2025 - 2026",
        desc: "Focus on people with learning difficulties, children, the elderly and people with disabilities. Content adaptation and patience to teach technology to everyone.",
      },
    ],
    currently: {
      label: "Current Job",
      role: "Support Analyst",
      company: "Hosplog",
      period: "2025 - Present",
      desc: "Support for critical hospital SaaS, training for healthcare coordinators and managers, service to important clients.",
    },
  },
};

const ExperienceSection = ({ lang = "pt" }: { lang?: "pt" | "en" }) => {
  const t = experiencesContent[lang];
  return (
    <section id="experiencia" className="py-24 px-4">
      <div className="container">
        <motion.div
          className="flex justify-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-2">
            <Briefcase className="text-primary" size={28} />
            {t.title}<span className="text-cyan-500">{t.titleHighlight}</span>
          </h2>
        </motion.div>
        <p className="text-muted-foreground text-center max-w-md mx-auto mb-16">
          {t.subtitle}
        </p>

        {/* Timeline */}
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-border" />

          {t.experiences.map((exp, i) => (
            <motion.div
              key={exp.role + exp.period}
              className={`relative flex items-start mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background z-10" />

              <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"}`}>
                <div className="glass-card rounded-lg p-6">
                  <div className="flex items-center gap-2 mb-1 text-primary text-sm font-medium">
                    <Briefcase className="h-3.5 w-3.5" />
                    {exp.period}
                  </div>
                  <h3 className="font-semibold text-lg">{exp.role}</h3>
                  <p className="text-muted-foreground text-sm mb-2">{exp.company}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{exp.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Current highlight */}
          <motion.div
            className="relative flex items-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-secondary border-2 border-background z-10 bg-orange-500" />
            <div className="ml-12 md:ml-0 md:w-[calc(50%-2rem)] md:pr-8 md:text-right">
              <div className="glass-card rounded-lg p-6 border-orange-500">
                <div className="flex items-center gap-2 mb-1 text-orange-500 text-sm font-medium">
                  <GraduationCap className="h-3.5 w-3.5" />
                  {t.currently.label}
                </div>
                <h3 className="font-semibold text-lg">{t.currently.role}</h3>
                <p className="text-muted-foreground text-sm mb-2">{t.currently.company}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t.currently.desc}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
