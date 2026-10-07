import type { ReactNode } from 'react';

interface SectionProps {
  id: string;
  eyebrow: string;
  title: string;
  tone?: 'default' | 'surface';
  children: ReactNode;
}

export function Section({ id, eyebrow, title, tone = 'default', children }: SectionProps) {
  const className = tone === 'surface' ? 'section section--surface' : 'section';

  return (
    <section id={id} className={className}>
      <div className="container section__inner">
        <div className="section__header">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="section__title">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}
