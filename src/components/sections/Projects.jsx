import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20 bg-gray-950">
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold mb-12 bg-gradient-to-r from-indigo-400 to-cyan-300 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="glassmorphism p-6 rounded-xl border border-gray-700 bg-gray-900/30 hover:-translate-y-2 hover:border-indigo-400/50 transition-all duration-300 shadow-lg"
              >
                <h3 className="text-2xl font-semibold mb-3 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-5">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-indigo-400/10 text-indigo-300 py-1 px-4 rounded-full text-sm transition hover:bg-indigo-400/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="text-indigo-400 hover:text-indigo-300 transition-colors font-medium"
                >
                  View Project →
                </a>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

const projects = [
  {
    title: "ACONEWS",
    description: "A modern news app fetching headlines from GNews API with dynamic filters and Firebase hosting.",
    techStack: ["React", "Node.js", "Firebase", "GNEWS-Api"],
    link: "https://github.com/OpDeep/aconews-final-deep",
  },
  {
    title: "LinkedIn Extension",
    description: "A Chrome extension automating connection requests on LinkedIn using wxt.dev framework.",
    techStack: ["WXT", "React"],
    link: "https://github.com/OpDeep/LinkedIn-Extension",
  },
  {
    title: "Poke Dex App",
    description: "A React + TypeScript web app to browse and filter Pokémon using PokéAPI.",
    techStack: ["React", "TypeScript", "PokeAPI"],
    link: "https://github.com/OpDeep/Poke-Dex-Lite-App",
  },
  {
    title: "Online Code Compiler",
    description: "A real-time online code compiler built with React, Express, Socket.IO, and Redis.",
    techStack: ["Socket.IO", "Express", "React", "Redis"],
    link: "https://github.com/OpDeep/Online-Code-Compiler",
  },
];
