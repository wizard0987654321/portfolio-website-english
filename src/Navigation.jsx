import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import gsap from 'gsap'
import logo from './assets/coding-svgrepo-com.svg'


function AnimatedNavLink({ to, children, isDarkMode }) {
    const text = typeof children === 'string' ? children : String(children)
    const letters = text.split('').map((ch) => (ch === ' ' ? '\u00A0' : ch))

    const handleEnter = (e) => {
        const spans = e.currentTarget.querySelectorAll('.nav-letter')
        gsap.killTweensOf(spans)
        gsap.to(spans, {
            y: -8,
            duration: 0.45,
            ease: 'power2.out',
            stagger: 0.05,
        })
    }

    const handleLeave = (e) => {
        const spans = e.currentTarget.querySelectorAll('.nav-letter')
        gsap.killTweensOf(spans)
        gsap.to(spans, {
            y: 0,
            duration: 0.45,
            ease: 'power2.in',
            stagger: { each: 0.05, from: 'end' },
        })
    }

    return (
        <Link
            to={to}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            className={`h-full flex items-center px-3 rounded-md text-sm font-medium transition-all overflow-visible font-montserrat ${
                isDarkMode 
                    ? 'text-slate-200 hover:text-cyan-400 hover:bg-white/5' 
                    : 'text-[#31473A] hover:bg-white/10'
            }`}
            style={{ fontFamily: "Montserrat, sans-serif" }}
        >
            {letters.map((ch, i) => (
                <span key={i} className="nav-letter inline-block leading-none">
                    {ch}
                </span>
            ))}
        </Link>

    )
}

export default function Navigation() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    return (
        <div className={`min-h-screen transition-all duration-700 ${
            isDarkMode 
                ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950' 
                : ''
        }`}>
            {/* Dark/Light Mode Toggle - Fixed position */}
            <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`fixed top-20 right-6 z-50 flex items-center gap-0.5 p-1.5 rounded-full transition-all duration-500 shadow-lg ${
                    isDarkMode 
                        ? 'bg-slate-800/90 hover:bg-slate-700/90 border border-cyan-500/30 shadow-cyan-500/10' 
                        : 'bg-white/80 hover:bg-white/95 border border-[#31473A]/20 shadow-black/10'
                }`}
                aria-label="Toggle dark/light mode"
            >
                {/* Sun icon */}
                <div className={`p-2 rounded-full transition-all duration-300 ${!isDarkMode ? 'bg-yellow-400/20' : ''}`}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-4 w-4 transition-colors duration-300 ${!isDarkMode ? 'text-yellow-500' : 'text-slate-500'}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                    </svg>
                </div>
                {/* Moon icon */}
                <div className={`p-2 rounded-full transition-all duration-300 ${isDarkMode ? 'bg-cyan-500/20' : ''}`}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-4 w-4 transition-colors duration-300 ${isDarkMode ? 'text-cyan-400' : 'text-slate-400'}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                        />
                    </svg>
                </div>
            </button>

            <div className={`mainNavbar flex justify-between items-center px-4 w-full transition-all duration-500 ${
                isDarkMode ? '!bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50' : ''
            }`}>
                <Link to="/" className="h-full flex items-center">
                    <img src={logo} alt="logo" className={`h-full w-auto object-contain transition-all duration-500 ${isDarkMode ? 'brightness-0 invert' : ''}`} />
                </Link>
                <nav className="flex items-center px-2 rounded-lg">
                    <div className="flex items-center space-x-1 h-full">
                        <AnimatedNavLink to="/" isDarkMode={isDarkMode}>Home</AnimatedNavLink>
                        <AnimatedNavLink to="/about" isDarkMode={isDarkMode}>About</AnimatedNavLink>
                        <AnimatedNavLink to="/skills" isDarkMode={isDarkMode}>Skills</AnimatedNavLink>
                        <AnimatedNavLink to="/contact" isDarkMode={isDarkMode}>Contact</AnimatedNavLink>
                        <AnimatedNavLink to="/projects" isDarkMode={isDarkMode}>Projects</AnimatedNavLink>
                    </div>
                </nav>
            </div>
            <main className="p-6">
                <Outlet context={{ isDarkMode }} />
            </main>
        </div>
    );
}