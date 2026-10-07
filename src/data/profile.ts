import type { Profile, Stat } from '../types';

export const profile: Profile = {
  nameLines: ['Gabriela', 'Alvarez', 'Maciel'],
  shortName: 'Gabriela Alvarez',
  fullName: 'Gabriela Alvarez Maciel',
  role: 'Senior Software Engineer · Frontend',
  availability: 'Disponible para proyectos freelance',
  intro:
    'Construyo y modernizo aplicaciones web con React y TypeScript. Me especializo en arquitectura frontend y design systems, con experiencia práctica en backend con PHP, Node.js, APIs REST y PostgreSQL.',
  email: 'amacielgabriela@gmail.com',
  linkedinUrl: 'https://www.linkedin.com/in/gabriela-alvarez-maciel/',
  linkedinLabel: 'LinkedIn · gabriela-alvarez-maciel',
  githubUrl: 'https://github.com/gabyamaciel',
  githubLabel: 'GitHub · gabyamaciel',
};

export const stats: Stat[] = [
  { value: '6+', label: 'años construyendo y modernizando aplicaciones web' },
  { value: '50+', label: 'componentes en el design system que amplié desde unos 30' },
  { value: '10–15', label: 'desarrolladores frontend usando esa librería cada día' },
];
