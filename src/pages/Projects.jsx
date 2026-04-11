import { useEffect, useRef } from "react";
import { useOutletContext } from "react-router-dom";
import gsap from "gsap";
import AnimatedWord from "./AnimatedWord";

// 1. Dynamic Project Data
const myProjects = [
  {
    id: 1,
    title: "codeChameleon",
    description: "A web application to learn JS basics, with custom design, exercises, and quizzes.",
    tech: ["HTML", "CSS", "JS", "GSAP"],
    github: "https://git.thm.de/gsbs28/frontend-development",
    live: "https://hosting.iem.thm.de/fed/2025/t3/",
  },
  {
    id: 2,
    title: "Etch-a-Sketch",
    description: "A minimalist game, an initial project with HTML, CSS, and JavaScript.",
    tech: ["HTML", "CSS", "JS"],
    github: "https://github.com/wizard0987654321/Etch-a-Sketch-TOP",
    live: "https://etch-a-sketch-project12.netlify.app/",
  },
  {
    id: 3,
    title: "Soundrush",
    description: "Mobile rhythm game with custom design and animations.",
    tech: ["Kotlin", "Libgdx", "Figma"],
    github: "https://git.thm.de/mib-mase-ws25/teama",
    live: null,
  },
  {
    id: 4,
    title: "Table Configurator",
    description: "Table configurator web application with registration, login, 3D preview, and interactive elements.",
    tech: ["React", "React-Three-fiber", "Tailwind CSS", "Express.js", "PostgresQL"],
    github: "https://git.thm.de/asmh41/webframeworks",
    live: null,
  },
  {
    id: 5,
    title: "Java Calculator",
    description: "A simple Java calculator with GUI.",
    tech: ["Java"],
    github: "https://github.com/wizard0987654321/Calculator-Java",
    live: null,
  }
];

export default function Projects() {
  const { isDarkMode } = useOutletContext();
  const mainRef = useRef(null);

  // GSAP Entrance Animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      // fromTo ensures the animation starts at 0 and DEFINITELY ends at 1
      gsap.fromTo(".project-card",
        {
          opacity: 0,
          y: 40
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.8,
          ease: "power3.out"
        }
      );
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={mainRef}
      style={{ fontFamily: "'Montserrat', sans-serif" }}
      className="min-h-screen flex flex-col items-center justify-start pt-20 px-6"
    >
      <AnimatedWord text="Projects" isDarkMode={isDarkMode} />

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mt-16">
        {myProjects.map((project) => (
          <div
            key={project.id}
            className={`project-card group p-8 rounded-3xl shadow-sm hover:shadow-2xl flex flex-col justify-between border transition-all duration-500 ${
              isDarkMode 
                ? 'bg-slate-800/50 border-slate-700 hover:border-cyan-500/30 hover:shadow-cyan-500/5' 
                : 'bg-white border-transparent hover:border-[#31473A]/10'
            }`}
          >
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map(t => (
                  <span key={t} className={`text-[10px] uppercase tracking-widest px-2 py-1 rounded-md font-bold whitespace-nowrap transition-colors duration-500 ${
                    isDarkMode 
                      ? 'bg-cyan-500/10 text-cyan-400' 
                      : 'bg-[#31473A]/10 text-[#31473A]'
                  }`}>
                    {t}
                  </span>
                ))}
              </div>
              <h3 className={`text-2xl font-extrabold mb-3 transition-colors duration-500 ${
                isDarkMode ? 'text-slate-100' : 'text-[#31473A]'
              }`}>{project.title}</h3>
              <p className={`leading-relaxed mb-6 transition-colors duration-500 ${
                isDarkMode ? 'text-slate-400' : 'text-gray-500'
              }`}>{project.description}</p>
            </div>

            <div className="flex flex-col gap-3">
              {/* GitHub Link */}
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl border-2 font-bold transition-all duration-300 ${
                  isDarkMode 
                    ? 'border-cyan-500/50 text-cyan-400 hover:bg-cyan-500 hover:text-slate-900 hover:border-cyan-500' 
                    : 'border-[#31473A] text-[#31473A] hover:bg-[#31473A] hover:!text-white'
                }`}
              >
                GitHub Repo
              </a>

              {/* Live Demo Logic */}
              {project.live ? (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center justify-center gap-2 w-full py-3 border-2 rounded-xl font-bold transition-colors shadow-lg ${
                    isDarkMode 
                      ? 'border-cyan-500 bg-cyan-500 text-slate-900 hover:bg-transparent hover:text-cyan-400 shadow-cyan-500/20' 
                      : 'border-[#31473A] bg-[#31473A] text-white hover:bg-white hover:text-[#31473A] shadow-[#31473A]/20'
                  }`}
                >
                  Live Demo
                </a>
              ) : (
                <span className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold cursor-not-allowed italic ${
                  isDarkMode 
                    ? 'bg-slate-700/50 text-slate-500' 
                    : 'bg-gray-100 text-gray-400'
                }`}>
                  Live Demo not available
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      <p className={`mt-20 text-xs tracking-[0.2em] uppercase mb-10 transition-colors duration-500 ${
        isDarkMode ? 'text-slate-600' : 'text-[#31473A]/30'
      }`}>
        © 2025 Givi — Portfolio
      </p>
    </main>
  );
}