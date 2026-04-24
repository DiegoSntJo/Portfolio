// Importa animações do Framer Motion
import { motion } from "framer-motion";
// Importa ícones utilizados nos cards de projetos
import { ExternalLink, Github, FolderOpen } from "lucide-react";
// Importação não utilizada, pode ser removida se não for usada em outro lugar
import { title } from "process";


// Interface que define o formato de um projeto
interface Project {
  name: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  created?: string;
  year?: number;
  thumbnail?: string; // URL da imagem do projeto (opcional)
}


// Props do componente ProjectCard
interface ProjectCardProps {
  project: Project;
  createdTitle: string;
}

// Objeto com os textos e dados dos projetos em português e inglês
const projectsContent = {
  pt: {
    title: "Projetos em ",
    titleHighlight: "Destaque",
    subtitle: "Uma seleção do que venho construindo.",
    mainTitle: "Websites",
    gamesTitle: "Interativos",
    createdTitle: "Criado em ",
    mainProjects: [
      { name: "Clínica Médica",
        description: "Site comercial completo para clínica",
        tags: ["PHP", "HTML", "CSS", "JS"],
        github: "#",
        demo: "http://diegosntproject.xo.je/",
        year: 2021,
        thumbnail: "Media/Clinica.png",
      },
      { name: "Academia",
        description: "Landing page comercial para academia",
        tags: ["HTML", "CSS", "JS"],
        github: "#",
        demo: "https://diegosntjo.github.io/ModeloSiteAcademia/",
        year: 2021,
        thumbnail: "Media/Academia.gif",
      },
      { name: "TatameWeb",
        description: "Sistema Saas multi-tenant para gestão de academias de artes marciais",
        tags: ["React", "TypeScript", "Python", "PostgreSQL"],
        github: "#",
        demo: "https://tatameweb.online/",
        year: 2026,
        thumbnail: "Media/TatameWeb - Dash.png",
      },
      {
        name: "Learning Log",
        description: "Diário de aprendizados para documentar estudos diários",
        tags: ["Django"],
        github: "#",
        demo: "https://learning-log-n639.onrender.com/",
        year: 2025,
        thumbnail: "Media/LearningLog.png",
      },
    ],
    gameProjects: [
      {name: "Yellow Security",
        description: "Jogo completo desenvolvido durante a faculdade.",
        tags: ["Construct 3"],
        demo: "https://www.construct.net/en/free-online-games/yellowsecurity-64859/play",
        year: 2024,
        thumbnail: "Media/YellowSecurity2.png",
      },
      {
        name: "Enquetes",
        description: "Plataforma de quizzes e enquetes interativas",
        tags: ["Django"],
        github: "#",
        demo: "https://enquetes-jk3e.onrender.com/",
        year: 2025,
        thumbnail: "Media/Enquetes.png",
      },
      { 
        name: "SuperTrunfo Pokémon RBY",
        description: "Jogo de cartas temático",
        tags: ["PHP", "HTML", "CSS", "JS"],
        github: "#",
        demo: "https://super-trunfo-pokemon.vercel.app/",
        year: 2021,
        thumbnail: "Media/SuperTrunfoPKM.png",
      },
      { 
        name: "BlackJack",
        description: "Simulador do clássico jogo de cartas",
        tags: ["PHP", "HTML", "CSS", "JS"],
        github: "#",
        demo: "https://21-blackjack.vercel.app/",
        year: 2021,
        thumbnail: "Media/BlackJack.png",
      },
      { 
        name: "Tela de Seleção - Mega Man 3",
        description: "Tocador de música temático  das fases do jogo Mega Man 3",
        tags: ["PHP", "HTML", "CSS", "JS"],
        github: "#",
        demo: "https://mega-man-3-stage-select.vercel.app/",
        year: 2021,
        thumbnail: "Media/MM3 - Title.png",
      },
      { 
        name: "Tela de Seleção - Street Fighter II",
        description: "Tocador de música temático  das fases do jogo Street Fighter II",
        tags: ["PHP", "HTML", "CSS", "JS"],
        github: "#",
        demo: "https://street-fighter-2-selection-screen.vercel.app/",
        year: 2021,
        thumbnail: "Media/SF2.png",
      },
    ],
  },
  en: {
    title: "Featured ",
    titleHighlight: "Projects",
    subtitle: "A selection of what I've been building.",
    mainTitle: "Websites",
    gamesTitle: "Interactives",
    createdTitle: "Created in ",
    mainProjects: [
      { name: "Medical Clinic",
        description: "Full commercial website for a clinic",
        tags: ["PHP", "HTML", "CSS", "JS"],
        github: "#",
        demo: "http://diegosntproject.xo.je/",
        year: 2021,
        thumbnail: "Media/Clinica.png",
      },
      { name: "Gym",
        description: "Commercial landing page for a gym",
        tags: ["HTML", "CSS", "JS"],
        github: "#",
        demo: "https://diegosntjo.github.io/ModeloSiteAcademia/",
        year: 2021,
        thumbnail: "Media/Academia.gif",
      },
      { name: "TatameWeb",
        description: "Multi-tenant SaaS system for martial arts gym management",
        tags: ["React", "TypeScript", "Python", "PostgreSQL"],
        github: "#",
        demo: "https://tatameweb.online/",
        year: 2026,
        thumbnail: "Media/TatameWeb - Dash.png",
      },
      {
        name: "Learning Log",
        description: "Learning diary to document daily studies",
        tags: ["Django"],
        github: "#",
        demo: "https://learning-log-n639.onrender.com/",
        year: 2025,
        thumbnail: "Media/LearningLog.png",
      },
    ],
    gameProjects: [
      {name: "Yellow Security",
        description: "Complete game developed during college.",
        tags: ["Construct 3"],
        demo: "https://www.construct.net/en/free-online-games/yellowsecurity-64859/play",
        year: 2024,
        thumbnail: "Media/YellowSecurity2.png",
      },
      {
        name: "Polls",
        description: "Interactive quiz and poll platform (Available in Portuguese only)",
        tags: ["Django"],
        github: "#",
        demo: "https://enquetes-jk3e.onrender.com/",
        year: 2025,
        thumbnail: "Media/Enquetes.png",
      },
      { 
        name: "SuperCard Pokémon RBY",
        description: "Pokémon themed card game",
        tags: ["PHP", "HTML", "CSS", "JS"],
        github: "#",
        demo: "https://super-trunfo-pokemon.vercel.app/",
        year: 2021,
        thumbnail: "Media/SuperTrunfoPKM.png",
      },
      { 
        name: "BlackJack",
        description: "Classic card game simulator",
        tags: ["PHP", "HTML", "CSS", "JS"],
        github: "#",
        demo: "https://21-blackjack.vercel.app/",
        year: 2021,
        thumbnail: "Media/BlackJack.png",
      },
      { 
        name: "Selection Screen - Mega Man 3",
        description: "Music player themed after the stages of Mega Man 3",
        tags: ["PHP", "HTML", "CSS", "JS"],
        github: "#",
        demo: "https://mega-man-3-stage-select.vercel.app/",
        year: 2021,
        thumbnail: "Media/MM3 - Title.png",
      },
      { 
        name: "Selection Screen - Street Fighter II",
        description: "Music player themed after the stages of Street Fighter II",
        tags: ["PHP", "HTML", "CSS", "JS"],
        github: "#",
        demo: "https://street-fighter-2-selection-screen.vercel.app/",
        year: 2021,
        thumbnail: "Media/SF2.png",
      },
    ],
  },
};

// Componente que renderiza um card individual de projeto
const ProjectCard = ({ project, createdTitle }: ProjectCardProps) => (
  <motion.div
    className="glass-card rounded-lg p-6 group hover:border-primary/30 transition-all duration-300 flex flex-col h-[410px]"
    whileHover={{ y: -4 }}
  >
    {/* Thumbnail do projeto, se existir */}
    {project.thumbnail && (
      <img
        src={project.thumbnail}
        alt={`Thumbnail de ${project.name}`}
        className="w-full h-48 object-cover"
      />
    )}
    {/* Nome do projeto */}
    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
      {project.name}
    </h3>
    {/* Descrição do projeto */}
    <p className="text-muted-foreground text-sm mb-4 flex-1">{project.description}</p>
    {/* Lista de tags/tecnologias */}
    <div className="flex flex-wrap gap-1.5 mb-4">
      {project.tags.map((tag) => (
        <span key={tag} className="bg-muted text-muted-foreground text-xs px-2.5 py-1 rounded-md">
          {tag}
        </span>
      ))}
    </div>
    {/* Links para GitHub, demo e ano de criação */}
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
      {project.year && (
        <span className="text-muted-foreground text-sm">{createdTitle}{project.year}</span>
      )}
    </div>
  </motion.div>
);


// Componente principal da seção de projetos
// Recebe a linguagem (pt ou en) e exibe os projetos de acordo
const ProjectsSection = ({ lang = "pt" }: { lang?: "pt" | "en" }) => {
  // Seleciona os textos e dados conforme o idioma
  const t = projectsContent[lang];
  return (
    <section id="projetos" className="py-24 px-4">
      <div className="container">
        {/* Título da seção */}
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
        {/* Subtítulo */}
        <p className="text-muted-foreground text-center max-w-md mx-auto mb-16">
          {t.subtitle}
        </p>

        {/* Lista de projetos principais */}
        <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary" />
          {t.mainTitle}
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {t.mainProjects.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <ProjectCard project={p} createdTitle={t.createdTitle} />
            </motion.div>
          ))}
        </div>

        <br />

        {/* Lista de projetos de jogos/interativos */}
        <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-orange-500" />
          {t.gamesTitle}
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {t.gameProjects.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <ProjectCard project={{ ...p, thumbnail: p.thumbnail || (i === 0 ? "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg" : undefined) }} createdTitle={t.createdTitle} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;