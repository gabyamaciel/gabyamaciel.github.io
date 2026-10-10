import type { Project } from '../types';

/**
 * Proyectos personales.
 *
 * Para agregar uno, añade un objeto a este arreglo. Mientras esté vacío,
 * la sección completa se oculta; aparece sola al agregar el primero.
 *
 * Ejemplo:
 *
 * {
 *   title: 'Nombre del proyecto',
 *   description: 'Qué hace, qué problema resuelve y cuál fue tu papel.',
 *   tags: ['React', 'TypeScript'],
 *   demoUrl: 'https://...',
 *   repoUrl: 'https://github.com/gabyamaciel/...',
 * },
 */
export const projects: Project[] = [];
