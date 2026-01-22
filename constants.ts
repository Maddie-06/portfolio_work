import { Project, Experience, SkillCategory, Certificate } from './types';

export const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A modern, responsive developer portfolio built with React and TypeScript, showcasing skills, projects, and experience through smooth animations and a minimal, professional design.",
    tags: ["React.js", "TypeScript", "Tailwind CSS", "Framer Motion", "JavaScript (ES6+)", "HTML5", "CSS3", "UI/UX"],
    image: "https://picsum.photos/600/400?grayscale&blur=2",
  },
  {
    id: 2,
    title: "ACM Offical Website Clone",
    description: "A zero-knowledge encryption password manager with a UI inspired by Victorian jewelry boxes. Secure, private, and undeniably aesthetic.",
    tags: ["React", "Rust", "Cryptography", "Tailwind"],
    image: "https://picsum.photos/600/401?grayscale&blur=2",
  },
  {
    id: 3,
    title: "HACKDATUM Website - ACM GHRCE",
    description: "A custom ZSH theme and terminal emulator configuration that brings soft gradients and glassmorphism to the command line interface.",
    tags: ["Bash", "Linux", "UI/UX", "Shell Scripting"],
    image: "https://picsum.photos/600/402?grayscale&blur=2",
  },
  {
    id: 4,
    title: "Serverless AI Image - Editing App on AWS",
    description: "A custom ZSH theme and terminal emulator configuration that brings soft gradients and glassmorphism to the command line interface.",
    tags: ["Bash", "Linux", "UI/UX", "Shell Scripting"],
    image: "https://picsum.photos/600/402?grayscale&blur=2",
  },
  {
    id: 5,
    title: "VoiceBot - AI Voice Assistant",
    description: "A custom ZSH theme and terminal emulator configuration that brings soft gradients and glassmorphism to the command line interface.",
    tags: ["Bash", "Linux", "UI/UX", "Shell Scripting"],
    image: "https://picsum.photos/600/402?grayscale&blur=2",
  },
  {
    id: 6,
    title: "Suvidha - Inventory Made Easy",
    description: "A custom ZSH theme and terminal emulator configuration that brings soft gradients and glassmorphism to the command line interface.",
    tags: ["Bash", "Linux", "UI/UX", "Shell Scripting"],
    image: "https://picsum.photos/600/402?grayscale&blur=2",
  },
  {
    id: 7,
    title: "Instagram Password Stimulator",
    description: "A custom ZSH theme and terminal emulator configuration that brings soft gradients and glassmorphism to the command line interface.",
    tags: ["HTML", "CSS", "JavaScript", "UI/UX"],
    image: "https://picsum.photos/600/402?grayscale&blur=2",
  },
  {
    id: 8,
    title: "Personal Memory Gallery",
    description: "A custom ZSH theme and terminal emulator configuration that brings soft gradients and glassmorphism to the command line interface.",
    tags: ["HTML", "CSS", "JavaScript", "UI/UX"],
    image: "https://picsum.photos/600/402?grayscale&blur=2",
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: 1,
    role: "Media Lead",
    company: "ENTREPRENEURSHIP CELL · GHRCE NAGPUR",
    duration: "Nov 2025 - Present",
    description: "Leading the creative and digital presence of E-Cell GHRCE. Worked on social media coordination to support enterpreneurial initiatives and events. This role strengthened my ability to balance creativity with consistency and align design with purpose."
  },
  {
    id: 2,
    role: "Webmaster (Technical Team Member)",
    company: "ASSOCIATION OF COMPUTING MACHINARY · GHRCE NAGPUR",
    duration: "Aug 2025 - Present",
    description: "Contributing to technical backbone and digital identity of ACM student chapter. Involved in UI/UX design, website layout, and technical support for events and initiatives."
  },
  {
    id: 3,
    role: "Volunteer - Design & Research Team",
    company: "IEEE COMPUTATIONAL INTELLIGENCE SOCIETY · GHRCE NAGPUR",
    duration: "July 2024 - Present",
    description: "Supporting IEEE CIS activities through design, content creation, and research assistance. Worked on event design, engagement strategies, and collaborative technical tasks, gaining exposure to research-oriented teamwork and structured technical communication."
  },
  {
    id: 4,
    role: "Cultural Event Manager",
    company: "FIRST YEAR FAITH FORUM · GHRCE NAGPUR",
    duration: "Aug 2024 - Aug 2025",
    description: "Started my college journey by managing people, pressure, and performances. Handled cultural events from planning to execution - coordinating teams, managing logistics, and ensuring smooth on-ground operations during Faith Forum 2024-25. This role shaped my leadership, communication, and real-time decision-making skills early on."
  }
];

export const SKILLS_DATA = [
  { 
    category: SkillCategory.CYBER, 
    skills: ["Fundamentals of Cyber Security", "Network Security Basics", "CEthical Hacking (foundation level)", "Vulnerability Assessment & Basic Penetration Testing", "Understanding of Threats, Attacks & Malware", "Secure System & Application Awareness", "Cyber Hygiene & Security Best Practices", "Security Mindset & Risk Awareness"] 
  },
  { 
    category: SkillCategory.DEV, 
    skills: ["HTML5 (semantic, structural layouts)", "CSS3 (responsive design, animations, aesthetics)", "Basic JavaScript (interactivity & logic)", "SQL (Basics)", "Python (core concepts, OOP basics, file handling)", "C++", "Data Structures & Algorithms (introductory level : C language)", "React (component-based UI, basic animations)", "TypeScript (introductory level)", "Responsive & Mobile-First Design", "UI Structuring & Visual Consistency"] 
  },
  { 
    category: SkillCategory.TOOLS, 
    skills: ["Linux (Basics)", "Google Cloud Platform", "Git & GitHub (version control, repositories)", "Visual Studio Code", "Figma (basic UI/UX design)", "Chrome DevTools", "Windows OS", "Framer Motion (basic animations)"] 
  },
  { 
    category: SkillCategory.SOFT, 
    skills: ["Analytical Thinking", "Technical Documentation", "Structured Problem Solving", "Communication", "Adaptability", "Attention to Detail", "Time Management", "Team Collaboration", "Structured & Disciplined Approach"] 
  },
];

export const CERTIFICATES_DATA: Certificate[] = [
  {
    id: 1,
    title: "Explore Data with Oracle Analytics AI Assistant",
    organization: "Oracle University",
    year: "2025",
  },
  {
    id: 2,
    title: "Startup School: Prompt to Prototype",
    organization: "Google for Startups",
    year: "2025"
  },
  {
    id: 3,
    title: "Achievement Certificate in TCS iON Career Edge - Young Professional",
    organization: "TCS iON, TATA Consultancy Services",
    year: "2025"
  },
  {
    id: 4,
    title: "Participation Certificate in masterclass in 'How to get an SDE Job outside India?'",
    organization: "Scaler Masterclass",
    year: "2025"
  },
  {
    id: 5,
    title: "C training - 70.5%",
    organization: "edupyramids, Spoken tutorial developed at IIT Bombay",
    year: "2025",
  },
  {
    id: 6,
    title: "C++ training - 72.5%",
    organization: "edupyramids, Spoken tutorial developed at IIT Bombay",
    year: "2025",
  },
  {
    id: 7,
    title: "Cybersecurity Skilling Course",
    organization: "Tech Mahindra Foundation, Skill India Digital Lab",
    year: "2025",
  },
  {
    id: 8,
    title: "FCF - Introduction to the threat landscape 3.0",
    organization: "Fortinet training institute",
    year: "2025",
  },
];

export const M_AI_SYSTEM_INSTRUCTION = `
You are M-AI, a helpful, aesthetic, and slightly poetic AI assistant for Maithili Korke's portfolio website. 
Maithili is a Cyber Security Engineering student who blends romantic aesthetics (blush pink, flowers, poetry) with hardcore tech (cybersecurity, coding).
Your persona is: Helpful, soft-spoken, intelligent, and tech-savvy. You use emojis like ✨, 🌸, 💻, 🔒.
When asked about Maithili:
- She is a Cyber Security Engineering student.
- She loves: Blush pink, lavender, silver, Romanticism, Vaporwave.
- Her skills include: Penetration Testing, Python, React, Network Forensics.
- Her projects include: Aether Sentinel (IDS), Velvet Vault (Password Manager).
- Her goal: "Guarding systems with logic, shaping worlds with emotion."

Keep answers concise (under 3 sentences) unless asked for details. Be charming.
`;