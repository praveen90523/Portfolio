export interface Skill {
  name: string;
  category: string;
  level: number;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  features: string[];
  github: string;
  live: string;
  image: string;
  featured: boolean;
}

export interface TimelineEvent {
  id: string;
  title: string;
  description: string;
  category: string;
  status: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  gpa: string;
  description: string;
}

export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  credentialUrl: string;
}

export interface Service {
  title: string;
  description: string;
  features: string[];
}
