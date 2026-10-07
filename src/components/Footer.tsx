import { profile } from '../data/profile';

export function Footer() {
  return (
    <footer>
      <div className="container footer">
        <span>
          © {new Date().getFullYear()} {profile.fullName} · Senior Software Engineer, Frontend
        </span>
        <a href="#inicio">Volver arriba</a>
      </div>
    </footer>
  );
}
