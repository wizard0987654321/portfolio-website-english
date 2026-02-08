import { useEffect, useRef } from "react";
import { useOutletContext } from "react-router-dom";
import gsap from "gsap";
import AnimatedWord from "./AnimatedWord";
import ContactCard from "./ContactCard"; 

export default function Contact() {
  const { isDarkMode } = useOutletContext();
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // fromTo to ensure it ends at opacity: 1 and y: 0
      gsap.fromTo(".contact-card", 
        { 
          y: 60, 
          opacity: 0 
        }, 
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.2, 
          ease: "power4.out", 
          delay: 0.2 
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main 
      ref={containerRef}
      className="min-h-screen flex flex-col items-center justify-start pt-20 px-6 space-y-16"
    >
      <AnimatedWord text="Contact" isDarkMode={isDarkMode} />

      <div className="flex flex-col md:flex-row gap-8 w-full max-w-4xl justify-center items-center">
        
        {/* Email Card */}
        <ContactCard 
          title="Email"
          value="givisab12345@gmail.com"
          link="mailto:givisab12345@gmail.com"
          isDarkMode={isDarkMode}
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0l-8.591 5.423a1.875 1.875 0 01-2.152 0L2.25 6.75" />
            </svg>
          }
        />

        {/* LinkedIn Card */}
        <ContactCard 
          title="LinkedIn"
          value="Givi Sabashvili"
          link="https://de.linkedin.com/in/givisab"
          isDarkMode={isDarkMode}
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          }
        />
        
      </div>

      <p className={`text-sm italic mt-10 transition-colors duration-500 ${isDarkMode ? 'text-slate-500' : 'text-white/40'}`}>
        Lass uns gemeinsam etwas Großartiges bauen.
      </p>
    </main>
  );
}