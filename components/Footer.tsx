import React from 'react';
import { Heart, Sparkles, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full py-12 bg-[#030303] flex flex-col justify-center items-center overflow-hidden border-t border-white/5">
      
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-lavender/5 blur-[50px] rounded-full pointer-events-none"></div>

      <div className="flex flex-col items-center gap-6 z-10 relative">
         
         {/* Back to top - minimalist */}
         <button 
           onClick={scrollToTop}
           className="group p-3 rounded-full bg-white/5 border border-white/5 hover:border-lavender/30 hover:bg-white/10 transition-all duration-500 hover:shadow-[0_0_15px_rgba(201,167,245,0.2)]"
           aria-label="Scroll to top"
         >
           <ArrowUp size={16} className="text-gray-400 group-hover:text-lavender transition-colors" />
         </button>

         {/* Content */}
         <div className="text-center space-y-3">
             <div className="flex items-center justify-center gap-2 group cursor-default">
                 <Sparkles size={12} className="text-lavender/50 group-hover:text-lavender transition-colors group-hover:animate-spin-slow" />
                 <span className="font-serif text-gray-400 italic text-sm">
                    Crafted with <span className="text-blush inline-block hover:animate-pulse">kindness</span> & <span className="text-cyber inline-block hover:animate-pulse">logic</span>
                 </span>
                 <Sparkles size={12} className="text-lavender/50 group-hover:text-lavender transition-colors group-hover:animate-spin-slow" />
             </div>
             
             <p className="font-mono text-[9px] text-gray-600 tracking-[0.2em] uppercase hover:text-gray-500 transition-colors">
                © {new Date().getFullYear()} Maithili Korke
             </p>
         </div>
      </div>
    </footer>
  );
};

export default Footer;