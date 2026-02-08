import { useState, useEffect, useRef } from "react";
import { useOutletContext } from "react-router-dom";
import gsap from "gsap";
import AnimatedWord from "./AnimatedWord";

export default function About() {
  const { isDarkMode } = useOutletContext();
  
  const milestones = [
    { year: "2022", event: "Erste Zeilen Code" },
    { year: "2023", event: "CS50 beendet" },
    { year: "2023", event: "Studienbeginn THM" },
    { year: "2024", event: "The Odin Project" },
    { year: "2026", event: "Studienende THM" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSteps = milestones.length;
  const barRef = useRef(null);
  const milestoneRefs = useRef([]);

  const progress = (currentIndex / totalSteps) * 100;

  useEffect(() => {
    gsap.to(barRef.current, {
      width: `${progress}%`,
      duration: 0.8,
      ease: "power3.out",
    });

    if (currentIndex > 0) {
      gsap.fromTo(
        milestoneRefs.current[currentIndex - 1],
        { scale: 0.8, opacity: 0, y: 10 },
        { scale: 1, opacity: 1, y: 0, duration: 0.5, ease: "back.out(1.2)" }
      );
    }
  }, [currentIndex, progress]);

  return (
    <main
      style={{ fontFamily: "'Montserrat', sans-serif" }}
      className={`min-h-screen w-full flex flex-col items-center justify-center px-6 transition-colors duration-500 ${
        isDarkMode ? 'text-slate-200' : 'text-[#31473A]'
      }`}
    >
      <div className="mb-24">
        <AnimatedWord text="Mein Weg" isDarkMode={isDarkMode} />
      </div>

      <div className="w-full max-w-5xl relative">
        
        {/* ZIG-ZAG TIMELINE CONTAINER */}
        <div className="relative z-10 grid grid-cols-5 w-full h-48 items-end">
          {milestones.map((item, i) => {
            const isHigh = i % 2 === 0;

            return (
              <div key={i} className="flex flex-col items-center justify-end h-full relative">
                <div 
                  ref={(el) => (milestoneRefs.current[i] = el)}
                  className="opacity-0 flex flex-col items-center w-full"
                >
                  {/* Info-Bubble */}
                  <div className={`
                    rounded-xl text-center shadow-lg z-20 
                    w-[110%] md:w-auto min-w-[85px] px-2 py-2 md:px-5 md:py-3 transition-colors duration-500
                    ${isDarkMode 
                      ? 'bg-slate-800 text-slate-100 border border-cyan-500/30 shadow-cyan-500/10' 
                      : 'bg-[#31473A] text-white border border-white/10'
                    }
                  `}>
                    <div className={`text-[9px] md:text-[10px] font-bold mb-1 tracking-tighter ${isDarkMode ? 'text-cyan-400' : 'opacity-60'}`}>
                      {item.year}
                    </div>
                    <div className="text-[10px] md:text-xs font-black uppercase leading-tight tracking-tight">
                      {item.event}
                    </div>
                  </div>

                  {/* Verbindungslinie (Zick-Zack) */}
                  <div className={`w-[1px] mt-2 mb-1 ${isHigh ? "h-20 md:h-28" : "h-6 md:h-8"} ${isDarkMode ? 'bg-cyan-500/30' : 'bg-[#31473A]/30'}`} />
                  
                  {/* Ankerpunkt auf dem Balken */}
                  <div className={`w-2.5 h-2.5 rounded-full border-2 shadow-sm z-30 ${isDarkMode ? 'bg-cyan-400 border-slate-900' : 'bg-[#31473A] border-white'}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* BACKGROUND PROGRESS BAR */}
        <div className={`absolute left-0 right-0 bottom-[4px] w-full h-[3px] rounded-full ${isDarkMode ? 'bg-slate-700' : 'bg-[#31473A]/10'}`}>
          <div
            ref={barRef}
            className={`h-full rounded-full ${isDarkMode ? 'bg-gradient-to-r from-cyan-500 to-blue-500 shadow-[0_0_10px_rgba(6,182,212,0.4)]' : 'bg-[#31473A] shadow-[0_0_10px_rgba(49,71,58,0.2)]'}`}
            style={{ width: "0%" }}
          />
        </div>
      </div>

      {/* MINIMALISTIC END AREA */}
      <div className="mt-24 h-20 flex items-center justify-center">
        {currentIndex < totalSteps ? (
          <button
            onClick={() => setCurrentIndex(currentIndex + 1)}
            className={`px-12 py-3 border-2 font-black uppercase tracking-[0.2em] text-[10px] rounded-full transition-all duration-500 active:scale-95 shadow-sm hover:shadow-md ${
              isDarkMode 
                ? 'border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-slate-900' 
                : 'border-[#31473A] text-[#31473A] hover:bg-[#31473A] hover:text-white'
            }`}
          >
            Weiter
          </button>
        ) : (
          <div className="text-center animate-in fade-in zoom-in-95 duration-1000">
            <h3 className={`text-sm md:text-lg font-black uppercase tracking-[0.3em] ${isDarkMode ? 'text-slate-200' : 'text-[#31473A]'}`}>
              Das ist erst der Anfang
            </h3>
            <div className="mt-2 flex items-center justify-center gap-4">
              <div className={`h-[1px] w-8 ${isDarkMode ? 'bg-cyan-500/30' : 'bg-[#31473A]/20'}`} />
              <span className={`text-[10px] uppercase tracking-[0.5em] font-bold ${isDarkMode ? 'text-slate-500' : 'text-[#31473A]/40'}`}>
                Wird fortgesetzt
              </span>
              <div className={`h-[1px] w-8 ${isDarkMode ? 'bg-cyan-500/30' : 'bg-[#31473A]/20'}`} />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}