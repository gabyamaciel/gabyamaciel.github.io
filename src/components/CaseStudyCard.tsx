import type { CaseStudy } from '../types';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

export function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <article className="card card--case">
      <p className="card__meta">{caseStudy.meta}</p>
      <h3 className="card__title card__title--large">{caseStudy.title}</h3>
      <p className="card__text">{caseStudy.summary}</p>
      <ul className="card__list">
        {caseStudy.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
      <p className="card__tags">{caseStudy.tags}</p>
    </article>
  );
}
