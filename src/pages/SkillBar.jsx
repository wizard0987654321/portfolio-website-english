import { useEffect, useRef } from "react";
import gsap from "gsap";

const levelToPercent = {
  "very good": "100%",
  "good": "80%",
  "medium": "60%",
  "basic": "40%",
  "little": "20%",
};

export default function SkillBar({ name, level, icon, isDarkMode = true }) {
  const barRef = useRef(null);
  const containerRef = useRef(null);
  const percentage = levelToPercent[level] || "0%";

  useEffect(() => {
    // Bar fill animation
    gsap.to(barRef.current, {
      width: percentage,
      duration: 1.8,
      ease: "power4.out",
      delay: 0.3,
    });
  }, [percentage]);

  return (
    <div 
      ref={containerRef}
      className={`group w-full max-w-md p-5 rounded-2xl transition-all duration-500 font-montserrat ${
        isDarkMode 
          ? 'bg-slate-800/50 border border-slate-700 hover:bg-slate-800 hover:border-cyan-500/30' 
          : 'bg-white/5 border border-[#31473A]/10 hover:bg-white/10 hover:border-[#31473A]/30'
      }`}
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      <div className="flex items-center gap-4 mb-4">
        {/* Icon Container */}
        <div className={`w-12 h-12 flex items-center justify-center rounded-xl transition-all duration-500 ${
          isDarkMode 
            ? 'bg-slate-700 group-hover:bg-cyan-500 group-hover:scale-110' 
            : 'bg-[#31473A]/10 group-hover:bg-[#31473A] group-hover:scale-110'
        }`}>
          <img 
            src={icon} 
            alt={name} 
            className={`w-6 h-6 transition-all duration-500 ${
              isDarkMode 
                ? 'brightness-0 invert group-hover:invert-0' 
                : 'invert group-hover:invert-0'
            }`}
          />
        </div>

        {/* Name and Level */}
        <div className="flex-1">
          <div className="flex justify-between items-baseline">
            <h3 className={`font-bold text-base uppercase tracking-widest transition-colors duration-500 ${
              isDarkMode ? 'text-slate-200' : 'text-[#31473A]'
            }`}>
              {name}
            </h3>
            <span className={`text-[10px] font-bold uppercase tracking-tighter italic transition-colors duration-500 ${
              isDarkMode ? 'text-cyan-400/70' : 'text-[#31473A]/50'
            }`}>
              {level}
            </span>
          </div>
        </div>
      </div>

      {/* The Bar Container */}
      <div className="relative">
        <div className={`h-[4px] w-full rounded-full overflow-hidden ${isDarkMode ? 'bg-slate-700' : 'bg-[#31473A]/10'}`}>
          {/* The Animated Progress Line */}
          <div
            ref={barRef}
            className={`h-full rounded-full relative ${
              isDarkMode ? 'bg-gradient-to-r from-cyan-500 to-blue-500' : 'bg-[#31473A]'
            }`}
            style={{ width: "0%" }}
          >
            {/* Subtle light effect on the bar tip */}
            <div className="absolute right-0 top-0 h-full w-4 bg-white/20 blur-sm" />
          </div>
        </div>
      </div>
    </div>
  );
}