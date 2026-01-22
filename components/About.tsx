import React from 'react';
import { Fingerprint } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const About: React.FC = () => {
  return (
    <section id="about" className="relative min-h-screen flex flex-col justify-center py-20 px-6 bg-[#050505] overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-lavender/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-blush/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: ID Card / Image */}
          <ScrollReveal width="full">
            <div className="relative group rounded-2xl overflow-hidden border border-white/10 h-[500px] lg:h-[600px] shadow-2xl">
              <img 
                src="./image/linkedinpfp.jpg" // Add .jpg, .png, or .webp here
  alt="Profile"
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-70 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30"></div>

              {/* ID Badge */}
              <div className="absolute top-6 left-6 flex items-center gap-3 bg-black/30 backdrop-blur-md px-4 py-2 rounded-full border border-white/5">
                <Fingerprint className="text-cyber animate-pulse-slow" size={20} />
                <span className="font-mono text-xs text-cyber tracking-widest">ID: MK-8084</span>
              </div>

              {/* Quote Overlay */}
              <div className="absolute bottom-8 left-6 right-6">
                <div className="bg-black/40 backdrop-blur-md border border-white/10 p-6 rounded-xl">
                  <p className="font-mono text-xs md:text-sm text-gray-300 leading-relaxed border-l-2 border-lavender pl-4">
                    "Bridging the gap between secure architecture and artistic expression."
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Text & Stats */}
          <div className="flex flex-col justify-center">
            <ScrollReveal delay={200}>
              <div className="space-y-8 text-gray-300 leading-relaxed font-light text-lg mb-12">
                <p>
                  I’m a Cyber Security Engineering student who believes good security is invisible when done right - and unforgettable when it fails.                
                </p>
                <p>
                  I enjoy breaking down complex systems, understanding how they behave under pressure, and rebuilding them with clarity, intent, and resilience. My work sits at the intersection of technology and trust, where strong fundamentals matter more than buzzwords.                
                </p>
                <p>
                 With a growing interest in secure systems, ethical hacking, and practical problem - solving, I focus on learning things the right way - from core concepts to real - world applications. I value structure, discipline, and continuous improvement, and I’m driven by the idea of building technology that people can rely on.                
                </p>
                <p>
                  This portfolio is a snapshot of my journey: what I’m learning, what I’m building, and where I’m headed next.
                </p>
              </div>
            </ScrollReveal>

            {/* Stats Grid */}
            <ScrollReveal delay={300}>
              <div className="grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
                <a href="#skills" className="group cursor-pointer">
                  <span className="block font-mono text-3xl md:text-4xl text-white mb-2 group-hover:text-lavender transition-colors">1+</span>
                  <span className="text-xs font-mono text-gray-500 uppercase tracking-wider group-hover:text-white transition-colors">Years Coding</span>
                </a>
                <a href="#projects" className="group cursor-pointer">
                  <span className="block font-mono text-3xl md:text-4xl text-white mb-2 group-hover:text-cyber transition-colors">20+</span>
                  <span className="text-xs font-mono text-gray-500 uppercase tracking-wider group-hover:text-white transition-colors">Projects</span>
                </a>
                <a href="#contact" className="group cursor-pointer">
                  <span className="block font-mono text-3xl md:text-4xl text-white mb-2 group-hover:text-blush transition-colors">100%</span>
                  <span className="text-xs font-mono text-gray-500 uppercase tracking-wider group-hover:text-white transition-colors">Dedication</span>
                </a>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;