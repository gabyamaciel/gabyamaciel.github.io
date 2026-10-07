import { stack } from '../data/stack';
import { Section } from './Section';

export function Stack() {
  return (
    <Section id="stack" eyebrow="Stack" title="Herramientas con las que trabajo" tone="surface">
      <div className="grid grid--stack">
        {stack.map((group) => (
          <div key={group.title} className="stack-group">
            <h3 className="stack-group__title">{group.title}</h3>
            <div className="chips">
              {group.items.map((item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
