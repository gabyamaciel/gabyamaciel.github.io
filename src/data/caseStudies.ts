import type { CaseStudy } from '../types';

export const caseStudies: CaseStudy[] = [
  {
    meta: 'INHABIT · 2023–2026',
    title: 'Design system en React y TypeScript',
    summary:
      'Asumí la responsabilidad técnica de un design system compartido por un equipo frontend de 10 a 15 desarrolladores.',
    bullets: [
      'Amplié la librería de unos 30 a más de 50 componentes y mejoré más del 80% de los existentes.',
      'Lideré su migración a una librería independiente y con versionado propio, con pipelines de Jenkins CI/CD.',
      'Impulsé su adopción entre Ingeniería, Diseño, QA y Producto con documentación en Storybook y pruebas en Vitest.',
    ],
    tags: 'React · TypeScript · Storybook · Vitest · Jenkins',
  },
  {
    meta: 'INHABIT · 2023–2026',
    title: 'Funcionalidades de producto de punta a punta',
    summary: 'Responsable de la entrega completa de funcionalidades, del requisito a producción.',
    bullets: [
      'Traduje requisitos ambiguos en soluciones técnicas e identifiqué casos borde.',
      'Desarrollé y extendí endpoints, servicios y validaciones en APIs REST con PHP.',
      'Resolví el acceso a datos en PostgreSQL cuando el proyecto lo requería.',
    ],
    tags: 'React · TypeScript · PHP · REST · PostgreSQL',
  },
  {
    meta: 'IBM · 2019–2023',
    title: 'IBM Seller Incentives',
    summary:
      'Plataforma empresarial global para vendedores y gerentes de ventas, desarrollada en un squad de unas 6 personas dentro de una organización de unas 30.',
    bullets: [
      'Modernicé funcionalidades en Angular, React, PHP/Laravel y Node.js/Express, reduciendo duplicación en código legado.',
      'Participé en un rediseño centrado en el usuario con UX y patrones de IBM Carbon, que llevó el NPS de negativo a positivo.',
      'Creé y mantuve documentación técnica centralizada para facilitar el onboarding.',
    ],
    tags: 'Angular · React · PHP/Laravel · Node.js',
  },
];
