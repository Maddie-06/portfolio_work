export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  image: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  duration: string;
  description: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface Certificate {
  id: number;
  title: string;
  organization: string;
  year: string;
  credentialId?: string;
}

export enum SkillCategory {
  CYBER = 'Cyber Security',
  DEV = 'Programming',
  TOOLS = 'Tools',
  SOFT = 'Soft Skills'
}