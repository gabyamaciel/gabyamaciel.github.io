import { projects as defaultProjects } from '../data/projects';
import type { Project } from '../types';
import { ProjectCard } from './ProjectCard';
import { Section } from './Section';

interface ProjectsProps {
  projects?: Project[];
}

export function Projects({ projects = defaultProjects }: ProjectsProps) {
  return (
    <Section id="proyectos" eyebrow="Proyectos personales" title="Lo que estoy construyendo">
      <div className="grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
        {projects.length === 0 && (
          <article className="card card--dashed">
            <h3 className="card__title">Próximamente</h3>
            <p className="card__text">
              Estoy preparando mis primeros proyectos personales. Aquí aparecerán con su demo y su
              código.
            </p>
          </article>
        )}
      </div>
    </Section>
  );
}
