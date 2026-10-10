import { projects as defaultProjects } from '../data/projects';
import type { Project } from '../types';
import { ProjectCard } from './ProjectCard';
import { Section } from './Section';

interface ProjectsProps {
  projects?: Project[];
}

/** Sin proyectos, la sección no se muestra: aparece sola al agregar el primero. */
export function Projects({ projects = defaultProjects }: ProjectsProps) {
  if (projects.length === 0) {
    return null;
  }

  return (
    <Section id="proyectos" eyebrow="Proyectos personales" title="Lo que estoy construyendo">
      <div className="grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Section>
  );
}
