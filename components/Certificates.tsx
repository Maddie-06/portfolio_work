import React from 'react';
import { CERTIFICATES_DATA } from '../constants';
import ScrollReveal from './ScrollReveal';
import { Award, CheckCircle, ExternalLink } from 'lucide-react';

const Certificates: React.FC = () => {
  return (
    <section id="certificates" className="min-h-screen pt-32 pb-24 px-6 bg-[#050505] flex flex-col items-center relative overflow-hidden">
       {/* Background */}
       <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-lavender/5 rounded-full blur-[120px] pointer-events-none"></div>

       <div className="max-w-6xl mx-auto w-full relative z-10">
          <ScrollReveal>
             <div className="text-center mb-20">
                <div className="inline-flex items-center gap-2 border border-white/10 rounded-full px-4 py-1 mb-6 bg-white/5">
                   <Award size={12} className="text-cyber" />
                   <span className="font-mono text-[10px] text-gray-300 uppercase tracking-widest">Validated Expertise</span>
                </div>
                <h1 className="font-serif text-5xl md:text-6xl text-white mb-6">Licenses & <span className="text-transparent bg-clip-text bg-gradient-to-r from-lavender to-white">Certifications</span></h1>
                <p className="text-gray-400 font-mono text-sm max-w-lg mx-auto">
                   Formal recognition of technical proficiency and commitment to security standards.
                </p>
             </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             {CERTIFICATES_DATA.map((cert, idx) => (
                <ScrollReveal key={cert.id} delay={idx * 100} width="full">
                   <div className="bg-[#0A0A0A] border border-white/10 rounded-xl p-6 hover:border-lavender/40 hover:bg-white/5 transition-all duration-300 group relative overflow-hidden">
                      <div className="flex justify-between items-start">
                         <div className="flex-1">
                            <h3 className="font-serif text-2xl text-white group-hover:text-lavender transition-colors mb-2">{cert.title}</h3>
                            <p className="font-mono text-xs text-gray-400 uppercase tracking-wider mb-4">{cert.organization}</p>
                            
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                               <div className="flex items-center gap-1.5">
                                  <CheckCircle size={14} className="text-cyber" />
                                  <span>Issued {cert.year}</span>
                               </div>
                               {cert.credentialId && (
                                  <span className="font-mono text-[10px] bg-white/5 px-2 py-0.5 rounded border border-white/5">
                                    ID: {cert.credentialId}
                                  </span>
                               )}
                            </div>
                         </div>
                         
                         <div className="bg-white/5 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                            <Award className="text-gray-400 group-hover:text-cyber transition-colors" size={24} />
                         </div>
                      </div>
                      
                      {/* Decorative corner */}
                      <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-lavender/10 rounded-full blur-xl group-hover:bg-lavender/20 transition-colors"></div>
                   </div>
                </ScrollReveal>
             ))}
          </div>
       </div>
    </section>
  );
};

export default Certificates;