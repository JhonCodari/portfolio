export interface Project {
  id: number;
  title: string;
  description: string;
  shortDescription: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  featured: boolean;
  category: 'frontend' | 'backend' | 'fullstack' | 'mobile' | 'desktop' | 'web';
  status: 'completed' | 'in-progress' | 'planned';
  completedAt: Date;
  highlights: string[];
}

export interface Skill {
  name: string;
  level: number; // 1-100
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'other';
  icon?: string;
}

export interface ContactInfo {
  email: string;
  linkedin?: string;
  github?: string;
  phone?: string;
  location?: string;
}
