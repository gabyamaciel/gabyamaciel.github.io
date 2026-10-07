import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { title, description, tags, demoUrl, repoUrl } = project;

  return (
    <article className="card card--project">
      <h3 className="card__title card__title--large">{title}</h3>
      <p className="card__text">{description}</p>
      {tags.length > 0 && <p className="card__tags">{tags.join(' · ')}</p>}
      {(demoUrl || repoUrl) && (
        <div className="card__links">
          {demoUrl && (
            <a className="link" href={demoUrl}>
              Ver demo
            </a>
          )}
          {repoUrl && (
            <a className="link" href={repoUrl}>
              Ver código
            </a>
          )}
        </div>
      )}
    </article>
  );
}
