import { Fragment } from 'react';
import { profile } from '../data/profile';
import { ComponentShowcase } from './ComponentShowcase';

export function Hero() {
  return (
    <section id="inicio">
      <div className="container hero__inner">
        <div className="hero__main">
          <p className="pill">
            <span className="pill__dot" aria-hidden="true" />
            {profile.availability}
          </p>
          <h1 className="hero__name">
            {profile.nameLines.map((line, index) => (
              <Fragment key={line}>
                {index > 0 && <br />}
                {line}
              </Fragment>
            ))}
          </h1>
          <p className="hero__role">{profile.role}</p>
          <p className="hero__intro">{profile.intro}</p>
          <div className="hero__actions">
            <a className="btn btn--accent" href={`mailto:${profile.email}`}>
              Hablemos de tu proyecto
            </a>
            <a className="btn btn--outline" href="#trabajo">
              Ver mi trabajo
            </a>
          </div>
        </div>
        <ComponentShowcase />
      </div>
    </section>
  );
}
