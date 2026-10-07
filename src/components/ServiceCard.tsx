import type { Service } from '../types';

interface ServiceCardProps {
  index: number;
  service: Service;
}

export function ServiceCard({ index, service }: ServiceCardProps) {
  return (
    <article className="card">
      <span className="card__index">{String(index + 1).padStart(2, '0')}</span>
      <h3 className="card__title">{service.title}</h3>
      <p className="card__text">{service.description}</p>
    </article>
  );
}
