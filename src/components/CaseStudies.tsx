import { caseStudies } from '../data/caseStudies';
import { CaseStudyCard } from './CaseStudyCard';
import { Section } from './Section';

export function CaseStudies() {
  return (
    <Section
      id="trabajo"
      eyebrow="Trabajo destacado"
      title="Casos de mi experiencia profesional"
      tone="surface"
    >
      <div className="grid grid--wide">
        {caseStudies.map((caseStudy) => (
          <CaseStudyCard key={caseStudy.title} caseStudy={caseStudy} />
        ))}
      </div>
    </Section>
  );
}
