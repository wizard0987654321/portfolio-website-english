import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const words = [
  "exciting games",          
  "elegant websites",           
  "interesting designs",      
  "cool applications"  
];

export default function RotatingText({ isDarkMode = true }) {
  const [index, setIndex] = useState(0);
  const textRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      gsap.to(textRef.current, {
        y: -10,
        opacity: 0,
        duration: 0.4,
        ease: "power2.in",
        onComplete: () => {
          setIndex((prev) => (prev + 1) % words.length);
          gsap.set(textRef.current, { y: 10, opacity: 0 });
          gsap.to(textRef.current, { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" });
        },
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    // inline-flex ensures it stays on the same line and handles height correctly
    <span className="overflow-hidden h-[1.2em] translate-y-[0.25em]">
      <span
        ref={textRef}
        className={`font-extrabold italic transition-colors duration-500 ${
          isDarkMode ? 'text-cyan-400' : 'text-[#31473A]'
        }`}
      >
        {words[index]}
      </span>
    </span>
  );
}