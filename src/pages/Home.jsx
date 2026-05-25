import { useOutletContext } from "react-router-dom";
import AnimatedWord from "./AnimatedWord";
import RotatingText from "./RotatingText";
import GithubIcon from "../assets/githubIcon.svg";
import GitlabIcon from "../assets/gitlabIcon.svg";

export default function Home() {
  const { isDarkMode } = useOutletContext();

  return (
    <main className="min-h-[80vh] w-full flex flex-col items-center justify-center px-4 relative transition-all duration-500">
      {/* Top Header Section */}
      <div className="mb-8">
        <AnimatedWord text="Home" isDarkMode={isDarkMode} />
      </div>

      {/* Hero Content */}
      <div className="max-w-3xl text-center">
        <h1 className={`text-4xl md:text-6xl font-light leading-tight transition-colors duration-500 ${
          isDarkMode ? 'text-slate-100' : 'text-white'
        }`}>
          Hi, I am <span className={`font-semibold ${isDarkMode ? 'text-cyan-400' : ''}`}>Givi</span>! <br />
          I build <RotatingText isDarkMode={isDarkMode} />
        </h1>
        
        <p className={`mt-6 text-lg md:text-xl font-light tracking-wide transition-colors duration-500 ${
          isDarkMode ? 'text-slate-400' : 'text-white/80'
        }`}>
          Welcome to my portfolio website!
        </p>
      </div>

      {/* Social Links */}
      <div className="mt-10 flex justify-center space-x-6">
        <a
          href="https://github.com/wizard0987654321"
          target="_blank"
          rel="noreferrer"
          className={`inline-flex items-center justify-center w-24 h-24 rounded-2xl transition-all duration-300 ${
            isDarkMode 
              ? 'bg-slate-800/50 hover:bg-cyan-500/20 border border-slate-700 hover:border-cyan-500/50' 
              : 'bg-white/50 hover:bg-white/80'
          }`}
        >
          <img src={GithubIcon} alt="GitHub" className={`w-14 h-14 ${isDarkMode ? 'brightness-0 invert' : ''}`} />
        </a>
        <a
          href="https://git.thm.de/gsbs28"
          target="_blank"
          rel="noreferrer"
          className={`inline-flex items-center justify-center w-24 h-24 rounded-2xl transition-all duration-300 ${
            isDarkMode 
              ? 'bg-slate-800/50 hover:bg-cyan-500/20 border border-slate-700 hover:border-cyan-500/50' 
              : 'bg-white/50 hover:bg-white/80'
          }`}
        >
          <img src={GitlabIcon} alt="GitLab" className={`w-14 h-14 ${isDarkMode ? 'brightness-0 invert' : ''}`} />
        </a>
      </div>
    </main>
  );
}