import React, { useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    // Vibrant palette
    const colors = [
      '#C9A7F5', // Lavender
      '#F7C8D0', // Blush
      '#2de2e6', // Cyber Cyan
      '#ffffff'  // White accent
    ];

    const particles: { x: number; y: number; vx: number; vy: number; size: number; color: string }[] = [];
    const particleCount = Math.min(Math.floor(window.innerWidth / 9), 110); 
    const connectionDistance = 160;

    // Initialize particles with random colors and slightly faster speeds
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.8, // Increased speed
        vy: (Math.random() - 0.5) * 0.8, // Increased speed
        size: Math.random() * 2.5 + 1.0, // Varied sizes
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Update and draw particles
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off walls
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        
        // Add a glow effect
        ctx.shadowBlur = 15;
        ctx.shadowColor = p.color;
        
        ctx.fill();

        // Reset shadow for lines to optimize performance
        ctx.shadowBlur = 0;

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            ctx.beginPath();
            // Dynamic opacity based on distance
            const opacity = 1 - dist / connectionDistance;
            // Lines are a subtle lavender-white mix
            ctx.strokeStyle = `rgba(201, 167, 245, ${opacity * 0.6})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center">
      {/* Canvas Background */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0 opacity-70"
      />
      
      {/* Gradient Overlay for Depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/30 to-black z-0 pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center justify-center h-full pt-16">
        
        {/* System Status Tag */}
        <div className="mb-6 opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
          <span className="font-mono text-xs tracking-[0.25em] text-cyber border border-cyber/30 bg-black/50 px-5 py-2 rounded-full uppercase backdrop-blur-md shadow-[0_0_15px_rgba(45,226,230,0.15)]">
            System Status: Learning
          </span>
        </div>
        
        {/* Main Title */}
        <h1 className="font-cinzel text-4xl sm:text-6xl md:text-8xl lg:text-9xl text-white mb-2 tracking-tight opacity-0 animate-[fadeInUp_1s_ease-out_0.3s_forwards] text-glow select-none leading-none whitespace-normal md:whitespace-nowrap text-center w-full">
          MAITHILI KORKE
        </h1>
        
        {/* Subtitle */}
        <h2 className="font-serif text-sm sm:text-xl md:text-2xl text-lavender font-light tracking-widest md:tracking-[0.2em] uppercase mb-10 opacity-0 animate-[fadeInUp_1s_ease-out_0.6s_forwards] whitespace-normal md:whitespace-nowrap text-center w-full max-w-2xl">
          Aspiring Cyber Security Engineer
        </h2>
        
        {/* Quote */}
        <p className="font-serif italic text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-12 opacity-0 animate-[fadeInUp_1s_ease-out_0.9s_forwards]">
          “A passionate learner embarking on a journey to secure the digital frontier, one line of code at a time.”
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-6 opacity-0 animate-[fadeInUp_1s_ease-out_1.2s_forwards] items-center">
          <a 
            href="#projects"
            className="px-8 py-3 rounded-full border border-white/20 text-white font-mono text-sm uppercase tracking-wider hover:shadow-[0_0_20px_rgba(201,167,245,0.6)] hover:scale-105 transition-all duration-300 min-w-[180px] text-center"
          >
            Explore My Work
          </a>
          <a 
            href="#certificates"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-lavender to-blush text-black font-mono text-sm uppercase tracking-wider font-bold hover:shadow-[0_0_20px_rgba(201,167,245,0.6)] hover:scale-105 transition-all duration-300 min-w-[180px] text-center"
          >
            Certifications
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;