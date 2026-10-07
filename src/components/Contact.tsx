import { profile } from '../data/profile';

export function Contact() {
  return (
    <section id="contacto" className="section--accent">
      <div className="container contact">
        <p className="eyebrow eyebrow--plain">Contacto</p>
        <h2 className="contact__title">¿Tienes un proyecto en mente? Cuéntamelo.</h2>
        <p className="contact__text">
          Escríbeme con una breve descripción de lo que necesitas y te respondo con los siguientes
          pasos.
        </p>
        <a className="btn btn--white" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
        <div className="contact__links">
          <a className="contact__link" href={profile.githubUrl}>
            {profile.githubLabel}
          </a>
          <a className="contact__link" href={profile.linkedinUrl}>
            {profile.linkedinLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
