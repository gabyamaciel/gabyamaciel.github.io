import { navLinks } from '../data/navigation';
import { profile } from '../data/profile';

export function Header() {
  return (
    <header>
      <nav className="container nav" aria-label="Principal">
        <a className="nav__brand" href="#inicio">
          {profile.shortName}
        </a>
        <div className="nav__links">
          {navLinks.map((link) => (
            <a key={link.href} className="nav__link" href={link.href}>
              {link.label}
            </a>
          ))}
          <a className="btn btn--dark" href="#contacto">
            Escríbeme
          </a>
        </div>
      </nav>
    </header>
  );
}
