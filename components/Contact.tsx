import React, { useState, useRef, useEffect } from 'react';
import { Mail, MapPin, Github, Linkedin, CheckCircle, Smartphone, Instagram, Send } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Contact: React.FC = () => {
  // Terminal Form State
  const [step, setStep] = useState(0);
  const [formHistory, setFormHistory] = useState<{prompt: string, value: string}[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const prompts = [
    "Enter your name:",
    "Enter your email:",
    "Enter your message:"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add current interaction to history
    const newHistory = [...formHistory, { prompt: prompts[step], value: inputValue }];
    setFormHistory(newHistory);
    setInputValue('');

    if (step < prompts.length - 1) {
      setStep(step + 1);
    } else {
      // Final submission
      setIsSubmitting(true);
      // Simulate API call or processing time
      setTimeout(() => {
        setIsSubmitting(false);
        setIsCompleted(true);
      }, 1500);
    }
  };

  const handlePhoneClick = () => {
    const phoneNumber = "+91 8830230875";
    navigator.clipboard.writeText(phoneNumber).then(() => {
        setPhoneCopied(true);
        setTimeout(() => setPhoneCopied(false), 2000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
  };

  // Focus input automatically when step changes or interaction occurs
  useEffect(() => {
    if (inputRef.current && !isSubmitting && !isCompleted) {
      inputRef.current.focus();
    }
  }, [step, isSubmitting, isCompleted]);

  const handleTerminalClick = () => {
    if (inputRef.current) inputRef.current.focus();
  };

  const resetForm = () => {
    setStep(0);
    setFormHistory([]);
    setInputValue('');
    setIsCompleted(false);
  };

  return (
    <section id="contact" className="min-h-screen pt-32 pb-20 px-6 bg-[#050505] relative overflow-hidden font-mono flex flex-col items-center">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-lavender/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-cyber/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10 flex-1 flex flex-col justify-center">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center h-full">
          
          {/* Left Panel: Contact Info */}
          <ScrollReveal>
            <div className="flex flex-col h-full justify-between">
              <div>
                {/* Header Tag */}
                <div className="flex items-center gap-2 mb-8">
                  <span className="text-cyber font-mono font-bold tracking-wider text-sm md:text-base">{">_"} SECURE CHANNEL</span>
                </div>
                
                {/* Main Heading */}
                <h1 className="font-serif text-5xl md:text-7xl text-white mb-8 leading-tight">
                  Get in <br />
                  <span className="text-lavender">Touch.</span>
                </h1>
                
                {/* Subtext */}
                <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed mb-12 max-w-md">
                  Initiate a connection. Whether for collaboration, technical inquiries, or security discourse, the channel is always open.
                </p>

                {/* Contact List */}
                <div className="space-y-8">
                  {/* Email */}
                  <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-lavender group-hover:bg-lavender/10 group-hover:border-lavender/30 transition-all duration-300">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-gray-500 mb-1 font-bold">EMAIL</h4>
                      <a href="mailto:korkemaithili@gmail.com" className="text-white text-base md:text-lg font-mono hover:text-cyber transition-colors break-all">korkemaithili@gmail.com</a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-6 group cursor-pointer" onClick={handlePhoneClick}>
                     <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-lavender group-hover:bg-lavender/10 group-hover:border-lavender/30 transition-all duration-300">
                      <Smartphone size={20} />
                    </div>
                    <div>
                      <h4 className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-gray-500 mb-1 font-bold">SECURE LINE</h4>
                      <div className="flex items-center gap-3">
                          <p className="text-white text-base md:text-lg font-mono hover:text-cyber transition-colors">+91 8830230875</p>
                          {phoneCopied && <span className="text-cyber text-xs font-mono animate-fade-in">[Copied]</span>}
                      </div>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-6 group">
                     <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-lavender group-hover:bg-lavender/10 group-hover:border-lavender/30 transition-all duration-300">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-gray-500 mb-1 font-bold">BASE OF OPERATIONS</h4>
                      <p className="text-white text-base md:text-lg font-mono leading-relaxed max-w-xs">
                        GH Raisoni College of Engineering, Nagpur, Maharashtra, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Icons */}
              <div className="pt-16 flex gap-6">
                <a href="https://github.com/Maddie-06" className="text-gray-500 hover:text-white transition-colors hover:scale-110 transform duration-200"><Github size={24} strokeWidth={1.5} /></a>
                <a href="https://www.linkedin.com/in/maithili-korke" className="text-gray-500 hover:text-white transition-colors hover:scale-110 transform duration-200"><Linkedin size={24} strokeWidth={1.5} /></a>
                <a href="https://www.instagram.com/maithili_korke" className="text-gray-500 hover:text-white transition-colors hover:scale-110 transform duration-200"><Instagram size={24} strokeWidth={1.5} /></a>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Panel: Terminal Form */}
          <ScrollReveal delay={200}>
            <div 
              className="w-full bg-[#080808] border border-white/10 rounded-xl overflow-hidden shadow-2xl flex flex-col h-[500px] md:h-[600px] relative mt-8 lg:mt-0"
              onClick={handleTerminalClick}
            >
              {/* Terminal Header */}
              <div className="bg-[#111111] px-4 py-3 border-b border-white/5 flex items-center justify-between">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                </div>
                <div className="text-xs text-gray-600 font-mono absolute left-1/2 transform -translate-x-1/2 select-none">
                  {">_"} bash — contact-form — 80x24
                </div>
              </div>

              {/* Terminal Body */}
              <div className="flex-1 p-8 font-mono text-sm md:text-base overflow-y-auto custom-scrollbar">
                <div className="text-gray-500 mb-8 leading-relaxed opacity-70">
                  Last login: {new Date().toDateString()} on ttys001<br/>
                  Initializing secure message protocol v2.4...<br/>
                  <span className="text-green-500">System ready.</span>
                </div>

                {/* History */}
                {formHistory.map((item, idx) => (
                  <div key={idx} className="mb-6 animate-fade-in">
                    <div className="flex flex-wrap gap-2 text-cyber mb-1">
                      <span className="select-none font-bold">root@maithili:~$</span>
                      <span className="text-lavender font-bold select-none">{item.prompt}</span>
                    </div>
                    <div className="flex items-start gap-3 pl-0">
                        <span className="text-green-500 select-none">➜</span>
                        <span className="text-gray-200 break-words">{item.value}</span>
                    </div>
                  </div>
                ))}

                {/* Current Active Line */}
                {!isCompleted && !isSubmitting && (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-1 animate-fade-in">
                    <div className="flex flex-wrap gap-2 text-cyber mb-1">
                      <span className="select-none font-bold">root@maithili:~$</span>
                      <span className="text-white font-bold select-none">{prompts[step]}</span>
                    </div>
                    <div className="flex items-center relative group">
                        <span className="text-green-500 mr-3 select-none font-bold">➜</span>
                        <input
                            ref={inputRef}
                            type={step === 1 ? "email" : "text"}
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            className="bg-transparent border-none outline-none text-white w-full font-mono caret-cyber p-0 focus:ring-0" 
                            autoComplete="off"
                            spellCheck={false}
                        />
                    </div>
                  </form>
                )}

                {/* Loading State */}
                {isSubmitting && (
                  <div className="mt-4 text-yellow-400 animate-pulse font-mono">
                    {">"} Encrypting and transmitting packet...
                  </div>
                )}

                {/* Success State */}
                {isCompleted && (
                  <div className="mt-8 p-6 border border-green-500/20 bg-green-500/5 rounded-lg text-green-400 animate-fade-in">
                    <div className="flex items-center gap-3 mb-2">
                      <CheckCircle size={20} />
                      <span className="font-bold uppercase tracking-wider text-sm">Transmission Successful</span>
                    </div>
                    <p className="text-sm opacity-80 mb-6 font-sans">Message has been logged to the secure server.</p>
                    <button 
                        onClick={resetForm}
                        className="text-xs font-mono bg-green-500/10 hover:bg-green-500/20 px-4 py-2 rounded transition-colors text-green-300 border border-green-500/20 uppercase tracking-wider"
                    >
                        Send Another Message
                    </button>
                  </div>
                )}
                
                {/* Scroll Anchor */}
                <div className="h-4"></div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;