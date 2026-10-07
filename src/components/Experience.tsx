import { experience } from '../data/experience';
import { Section } from './Section';

export function Experience() {
  return (
    <Section
      id="experiencia"
      eyebrow="Experiencia"
      title="Más de 6 años en producto y plataformas"
    >
      <div className="experience">
        {experience.map((entry) => (
          <div key={entry.title} className="experience__item">
            <p className="experience__period">{entry.period}</p>
            <div className="experience__body">
              <h3 className="card__title">{entry.title}</h3>
              <p className="card__text">{entry.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
