import React from 'react';
import { EXPERIENCES } from '../constants';
import ScrollReveal from './ScrollReveal';
import { GitCommit, Briefcase, Calendar } from 'lucide-react';

const Journey: React.FC = () => {
  return (
    <section className="min-h-screen pt-32 pb-24 px-6 bg-[#050505] flex flex-col items-center relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-lavender/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto w-full relative z-10">
        <ScrollReveal>
          <div className="text-center mb-24">
             <div className="inline-flex items-center gap-2 border border-white/10 rounded-full px-4 py-1 mb-6 bg-white/5">
                <Briefcase size={12} className="text-cyber" />
                <span className="font-mono text-[10px] text-gray-300 uppercase tracking-widest">Growth & Evolution</span>
             </div>
             <h1 className="font-serif text-5xl md:text-6xl text-white mb-4">My <span className="italic text-gray-500">Journey</span></h1>
             <p className="text-gray-400 font-mono text-sm max-w-lg mx-auto">
               A chronological archive of professional milestones, contributions, and the continuous pursuit of excellence.
             </p>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-0 md:left-1/2 h-full w-[2px] bg-gradient-to-b from-transparent via-white/10 to-transparent md:transform md:-translate-x-1/2 ml-[19px] md:ml-0"></div>

          <div className="space-y-16">
            {EXPERIENCES.map((exp, idx) => (
              <ScrollReveal key={exp.id} delay={idx * 150} width="full">
                <div className={`flex flex-col md:flex-row gap-8 relative ${idx % 2 === 0 ? 'md:text-right' : 'md:flex-row-reverse md:text-left'}`}>
                  
                  {/* Central Node */}
                  <div className="absolute left-0 md:left-1/2 w-10 h-10 bg-[#0A0A0A] border-2 border-white/20 rounded-full transform md:-translate-x-1/2 z-10 flex items-center justify-center shadow-[0_0_20px_rgba(45,226,230,0.15)] group-hover:border-cyber transition-colors">
                     <GitCommit size={16} className="text-gray-400 group-hover:text-cyber transition-colors" />
                  </div>

                  {/* Spacer for mobile to align with line */}
                  <div className="md:hidden pl-12"></div>

                  {/* Content Card */}
                  <div className={`md:w-1/2 ${idx % 2 === 0 ? 'md:pr-16 pl-12 md:pl-0' : 'md:pl-16 pl-12'}`}>
                    
                    <div className="bg-[#0A0A0A]/80 backdrop-blur-sm border border-white/10 p-6 md:p-8 rounded-xl hover:border-lavender/30 transition-all duration-300 relative group shadow-lg hover:shadow-[0_5px_30px_rgba(0,0,0,0.5)]">
                        
                        {/* Floating Date Badge */}
                        <div className={`absolute -top-4 ${idx % 2 === 0 ? 'md:left-auto md:right-8 right-8' : 'md:right-auto md:left-8 right-8'} bg-black border border-cyber/30 text-cyber px-4 py-1.5 rounded-full text-[10px] font-mono tracking-widest uppercase shadow-lg flex items-center gap-2`}>
                            <Calendar size={10} />
                            {exp.duration}
                        </div>

                        {/* Content */}
                        <div className="mt-2">
                            <h3 className="font-serif text-2xl md:text-3xl text-white mb-2 group-hover:text-lavender transition-colors">{exp.role}</h3>
                            <h4 className="font-mono text-xs text-gray-400 uppercase tracking-wider mb-6 pb-2 inline-block border-b border-white/5">{exp.company}</h4>
                            <p className="text-gray-300 text-sm leading-relaxed font-light opacity-90">
                              {exp.description}
                            </p>
                        </div>

                        {/* Decoration */}
                        <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-30 transition-opacity">
                            <Briefcase size={40} />
                        </div>
                    </div>
                  </div>

                  {/* Empty Side for balance */}
                  <div className="hidden md:block md:w-1/2"></div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;