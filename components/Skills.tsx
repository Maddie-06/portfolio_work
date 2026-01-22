import React, { useState } from 'react';
import { SKILLS_DATA } from '../constants';
import { Shield, Code, PenTool, Zap, Cpu, Database, Terminal } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Skills: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="min-h-screen pt-32 pb-20 px-6 bg-[#030303] relative flex flex-col items-center overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(10,10,10,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(10,10,10,0.8)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
            <ScrollReveal>
                <div className="flex flex-col items-center text-center mb-20">
                    <div className="flex items-center gap-2 mb-4 border border-white/10 bg-white/5 px-4 py-1.5 rounded-full">
                         <Cpu className="text-cyber animate-pulse" size={14} />
                         <span className="font-mono text-cyber text-xs tracking-widest uppercase">System Capabilities</span>
                    </div>
                    <h1 className="font-serif text-5xl md:text-7xl text-white mb-6">Technical <span className="text-lavender italic">Arsenal</span></h1>
                    <div className="font-mono text-xs text-gray-500 max-w-2xl">
                        // INITIALIZING DIAGNOSTICS... <br/>
                        // ANALYZING CORE COMPETENCIES AND NEURAL PATHWAYS...
                    </div>
                </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {SKILLS_DATA.map((category, idx) => (
                    <ScrollReveal key={idx} delay={idx * 100} width="full">
                        <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 hover:border-lavender/40 transition-all duration-500 group relative overflow-hidden h-full flex flex-col shadow-lg">
                            {/* Hover Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-lavender/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            
                            <div className="relative z-10 flex-1">
                                {/* Header */}
                                <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/5">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-white/5 rounded-xl text-gray-400 group-hover:text-white group-hover:bg-lavender/20 transition-all shadow-inner">
                                            {category.category === 'Cyber Security' && <Shield size={24} />}
                                            {category.category === 'Programming' && <Code size={24} />}
                                            {category.category === 'Tools' && <PenTool size={24} />}
                                            {category.category === 'Soft Skills' && <Zap size={24} />}
                                            
                                        </div>
                                        <h3 className="font-serif text-2xl text-white group-hover:text-lavender transition-colors tracking-wide">{category.category}</h3>
                                    </div>
                                    <span className="font-mono text-[10px] text-gray-600 bg-white/5 px-2 py-1 rounded">0{idx + 1}</span>
                                </div>

                                {/* Skills List */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                                    {category.skills.map((skill, sIdx) => (
                                        <div 
                                            key={sIdx} 
                                            className="group/skill relative pl-4"
                                            onMouseEnter={() => setHoveredSkill(skill)}
                                            onMouseLeave={() => setHoveredSkill(null)}
                                        >
                                            {/* Bullet Point */}
                                            <div className={`absolute left-0 top-2 w-1.5 h-1.5 rounded-full ${hoveredSkill === skill ? 'bg-cyber shadow-[0_0_8px_#2de2e6]' : 'bg-white/20'} transition-all duration-300`}></div>
                                            
                                            <div className="flex flex-col">
                                                <span className="font-mono text-sm text-gray-400 group-hover/skill:text-white transition-colors">{skill}</span>
                                                <div className="h-[1px] w-full bg-white/5 mt-2 overflow-hidden">
                                                    <div className={`h-full bg-gradient-to-r from-lavender to-cyber transition-all duration-500 ease-out ${hoveredSkill === skill ? 'w-full opacity-100' : 'w-0 opacity-0'}`}></div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            
                            {/* Decorative footer */}
                            <div className="mt-8 pt-4 border-t border-white/5 flex justify-between items-center opacity-40">
                                <div className="flex items-center gap-2">
                                    <Terminal size={12} className="text-gray-500" />
                                    <span className="font-mono text-[10px] text-gray-500">MODULE_LOADED</span>
                                </div>
                                <Database size={12} className="text-gray-500" />
                            </div>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Skills;