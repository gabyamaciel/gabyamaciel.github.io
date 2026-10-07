export interface Profile {
  /** Nombre en líneas, para el título grande de la portada. */
  nameLines: string[];
  shortName: string;
  fullName: string;
  role: string;
  availability: string;
  intro: string;
  email: string;
  linkedinUrl: string;
  linkedinLabel: string;
  githubUrl: string;
  githubLabel: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Service {
  title: string;
  description: string;
}

export interface CaseStudy {
  meta: string;
  title: string;
  summary: string;
  bullets: string[];
  tags: string;
}

export interface ExperienceEntry {
  period: string;
  title: string;
  description: string;
}

export interface StackGroup {
  title: string;
  items: string[];
}

export interface Project {
  title: string;
  description: string;
  /** Tecnologías, separadas por " · " al mostrarse. */
  tags: string[];
  demoUrl?: string;
  repoUrl?: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}
