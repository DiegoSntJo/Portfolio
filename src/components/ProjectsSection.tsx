import { motion } from "framer-motion";
import { ExternalLink, Github, FolderOpen } from "lucide-react";
import { title } from "process";

interface Project {
  name: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
}

const projectsContent = {
  pt: {
    title: "Projetos em ",
    titleHighlight: "Destaque",
    subtitle: "Uma seleção do que venho construindo.",
    mainTitle: "Projetos Principais",
    gamesTitle: "Interativos",
    mainProjects: [
      { name: "Clínica Médica",
        description: "Site comercial completo para clínica",
        tags: ["PHP", "HTML", "CSS", "JS"],
        github: "#",
        demo: "#",
      },
      { name: "Academia",
        description: "Landing page comercial para academia",
        tags: ["PHP", "HTML", "CSS", "JS"],
        github: "#",
        demo: "#",
      },
      { name: "Restaurante",
        description: "Cardápio digital e sistema de pedidos",
        tags: ["PHP", "HTML", "CSS", "JS"],
        github: "#",
        demo: "#",
      },
      {
        name: "Learning Log",
        description: "Diário de aprendizados para documentar estudos diários",
        tags: ["Django"],
        github: "#",
        demo: "#",
      },
      {
        name: "Dashboard de Suporte",
        description: "Painel de controle para tickets de suporte com métricas em tempo real e automação de respostas.",
        tags: ["Next.js", "Prisma", "PostgreSQL", "WebSocket"],
        github: "#",
        demo: "#",
      },
    ],
    gameProjects: [
      {name: "Yellow Security",
        description: "Jogo completo desenvolvido por mim.",
        tags: ["Construct 3"],
        demo: "#",
      },
      {
        name: "Enquetes",
        description: "Plataforma de quizzes e enquetes interativas",
        tags: ["Django"],
        github: "#",
        demo: "#",
      },
      { 
        name: "SuperTrunfo Pokémon RBY",
        description: "Jogo de cartas temático",
        tags: ["PHP", "HTML", "CSS", "JS"],
        github: "#",
        demo: "#",
      },
      { 
        name: "BlackJack",
        description: "Simulador do clássico jogo de cartas",
        tags: ["PHP", "HTML", "CSS", "JS"],
        github: "#",
        demo: "#",
      },
    ],
  },
  en: {
    title: "Featured ",
    titleHighlight: "Projects",
    subtitle: "A selection of what I've been building.",
    mainTitle: "Main Projects",
    gamesTitle: "Interactive Games",
    mainProjects: [
      { name: "Medical Clinic",
        description: "Full commercial website for a clinic",
        tags: ["PHP", "HTML", "CSS", "JS"],
        github: "#",
        demo: "#",
      },
      { name: "Gym",
        description: "Commercial landing page for a gym",
        tags: ["PHP", "HTML", "CSS", "JS"],
        github: "#",
        demo: "#",
      },
      { name: "Restaurant",
        description: "Digital menu and ordering system",
        tags: ["PHP", "HTML", "CSS", "JS"],
        github: "#",
        demo: "#",
      },
      {
        name: "Learning Log",
        description: "Learning diary to document daily studies",
        tags: ["Django"],
        github: "#",
        demo: "#",
      },
      {
        name: "Support Dashboard",
        description: "Control panel for support tickets with real-time metrics and response automation.",
        tags: ["Next.js", "Prisma", "PostgreSQL", "WebSocket"],
        github: "#",
        demo: "#",
      },
    ],
    gameProjects: [
      {name: "Yellow Security",
        description: "Complete game developed by me.",
        tags: ["Construct 3"],
        demo: "#",
      },
      {
        name: "Polls",
        description: "Interactive quiz and poll platform (Available in Portuguese only)",
        tags: ["Django"],
        github: "#",
        demo: "#",
      },
      { 
        name: "SuperCard Pokémon RBY",
        description: "Pokémon themed card game",
        tags: ["PHP", "HTML", "CSS", "JS"],
        github: "#",
        demo: "#",
      },
      { 
        name: "BlackJack",
        description: "Classic card game simulator",
        tags: ["PHP", "HTML", "CSS", "JS"],
        github: "#",
        demo: "#",
      },
    ],
  },
};

const ProjectCard = ({ project }: { project: Project }) => (
  <motion.div
    className="glass-card rounded-lg p-6 group hover:border-primary/30 transition-all duration-300 flex flex-col"
    whileHover={{ y: -4 }}
  >
    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
      {project.name}
    </h3>
    <p className="text-muted-foreground text-sm mb-4 flex-1">{project.description}</p>
    <div className="flex flex-wrap gap-1.5 mb-4">
      {project.tags.map((tag) => (
        <span key={tag} className="bg-muted text-muted-foreground text-xs px-2.5 py-1 rounded-md">
          {tag}
        </span>
      ))}
    </div>
    <div className="flex gap-3">
      {project.github && (
        <a href={project.github} className="text-muted-foreground hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
          <Github className="h-4 w-4" />
        </a>
      )}
      {project.demo && (
        <a href={project.demo} className="text-muted-foreground hover:text-secondary transition-colors" target="_blank" rel="noopener noreferrer">
          <ExternalLink className="h-4 w-4" />
        </a>
      )}
    </div>
  </motion.div>
);

const ProjectsSection = ({ lang = "pt" }: { lang?: "pt" | "en" }) => {
  const t = projectsContent[lang];
  return (
    <section id="projetos" className="py-24 px-4">
      <div className="container">
        <motion.div
          className="flex justify-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-2">
            <FolderOpen className="text-primary" size={28} />
            {t.title}<span className="text-cyan-400">{t.titleHighlight}</span>
          </h2>
        </motion.div>
        <p className="text-muted-foreground text-center max-w-md mx-auto mb-16">
          {t.subtitle}
        </p>

        <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary" />
          {t.mainTitle}
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {t.mainProjects.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </div>

        <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-orange-500" />
          {t.gamesTitle}
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {t.gameProjects.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;