import React from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, Github, FolderOpen, Lock } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="min-h-screen py-24 px-6 bg-[#080808] flex flex-col justify-center relative">
       {/* Background */}
       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyber/5 rounded-full blur-[120px] pointer-events-none"></div>

       <div className="max-w-7xl mx-auto w-full relative z-10">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row justify-between items-end mb-20">
            <div>
              <div className="flex items-center gap-2 mb-2">
                 <FolderOpen className="text-lavender" size={20} />
                 <span className="font-mono text-lavender text-xs tracking-widest uppercase">Project Archives</span>
              </div>
              <h2 className="font-serif text-5xl md:text-6xl text-white">Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Creations</span></h2>
            </div>
            <div className="hidden md:block text-right">
               <span className="font-mono text-xs text-gray-600 block">SECURE CONNECTION ESTABLISHED</span>
               <span className="font-mono text-xs text-cyber animate-pulse block">/// ACCESS GRANTED</span>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 150} width="full">
              <div className="group h-[450px] relative perspective-1000">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-lavender to-cyber rounded-2xl opacity-0 group-hover:opacity-30 blur transition duration-500"></div>
                
                <div className="relative h-full bg-[#0E0E0E] border border-white/10 rounded-2xl overflow-hidden flex flex-col transition-transform duration-500 group-hover:-translate-y-2">
                    
                    {/* Image Area */}
                    <div className="h-48 overflow-hidden relative">
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors z-10"></div>
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
                        />
                        <div className="absolute top-3 right-3 z-20 bg-black/70 backdrop-blur-md px-2 py-1 rounded border border-white/10 flex items-center gap-1">
                            <Lock size={10} className="text-cyber" />
                            <span className="text-[10px] font-mono text-white">SECURE</span>
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="p-6 flex-1 flex flex-col justify-between">
                        <div>
                            <h3 className="font-serif text-2xl text-white mb-3 group-hover:text-lavender transition-colors">{project.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed font-light mb-6">
                              {project.description}
                            </p>
                            
                            <div className="flex flex-wrap gap-2">
                              {project.tags.map(tag => (
                                <span key={tag} className="text-[10px] font-mono bg-white/5 border border-white/10 px-2 py-1 rounded text-gray-400 uppercase tracking-wide">
                                  {tag}
                                </span>
                              ))}
                            </div>
                        </div>

                        <div className="flex gap-4 pt-6 border-t border-white/5 mt-4">
                             <a href="#" className="flex items-center gap-2 text-xs font-mono text-white hover:text-cyber transition-colors uppercase tracking-wider">
                                <Github size={14} /> Source
                             </a>
                             <a href="#" className="flex items-center gap-2 text-xs font-mono text-white hover:text-lavender transition-colors uppercase tracking-wider">
                                <ExternalLink size={14} /> Live Demo
                             </a>
                        </div>
                    </div>

                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
       </div>
    </section>
  );
};

export default Projects;