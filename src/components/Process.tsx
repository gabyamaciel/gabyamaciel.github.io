import { processSteps } from '../data/process';
import { Section } from './Section';

export function Process() {
  return (
    <Section id="proceso" eyebrow="Proceso" title="Cómo trabajamos juntos" tone="surface">
      <div className="grid grid--narrow">
        {processSteps.map((step, index) => (
          <div key={step.title} className="step">
            <span className="step__label">Paso {index + 1}</span>
            <h3 className="step__title">{step.title}</h3>
            <p className="card__text">{step.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
