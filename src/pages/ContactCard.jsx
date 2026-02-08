import { useRef } from "react";
import gsap from "gsap";

export default function ContactCard({ title, value, link, icon, isDarkMode = true }) {
  const cardRef = useRef(null);
  const iconRef = useRef(null);

  const onMouseEnter = () => {
    if (isDarkMode) {
      gsap.to(cardRef.current, { backgroundColor: "#164e63", y: -5, duration: 0.3 });
    } else {
      gsap.to(cardRef.current, { backgroundColor: "#3a5444", y: -5, duration: 0.3 });
    }
    gsap.to(iconRef.current, { scale: 1.2, rotate: 5, duration: 0.3 });
  };

  const onMouseLeave = () => {
    if (isDarkMode) {
      gsap.to(cardRef.current, { backgroundColor: "#1e293b", y: 0, duration: 0.3 });
    } else {
      gsap.to(cardRef.current, { backgroundColor: "#31473A", y: 0, duration: 0.3 });
    }
    gsap.to(iconRef.current, { scale: 1, rotate: 0, duration: 0.3 });
  };

  return (
    <a 
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      ref={cardRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`contact-card w-full md:w-80 p-8 rounded-2xl text-white flex flex-col items-center text-center shadow-xl transition-colors duration-500 ${
        isDarkMode 
          ? 'bg-slate-800 border border-cyan-500/20 shadow-cyan-500/5' 
          : 'bg-[#31473A]'
      }`}
    >
      <div ref={iconRef} className={`mb-4 p-4 rounded-full transition-colors duration-500 ${
        isDarkMode ? 'bg-cyan-500/20 text-cyan-400' : 'bg-white/10 text-white'
      }`}>
        {icon}
      </div>
      
      <h3 className={`text-sm uppercase tracking-widest mb-1 ${isDarkMode ? 'text-slate-400' : 'opacity-60'}`}>{title}</h3>
      <p className="text-lg font-medium break-all">{value}</p>
      
      {/* Decorative arrow that appears on hover could be added here */}
      <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <span className={`text-xs border px-3 py-1 rounded-full ${isDarkMode ? 'border-cyan-500/30' : 'border-white/30'}`}>Besuchen →</span>
      </div>
    </a>
  );
}