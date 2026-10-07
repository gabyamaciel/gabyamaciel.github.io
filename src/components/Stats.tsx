import { stats } from '../data/profile';

export function Stats() {
  return (
    <section className="section--surface" aria-label="Cifras clave">
      <div className="container stats">
        {stats.map((stat) => (
          <div key={stat.value} className="stat">
            <span className="stat__value">{stat.value}</span>
            <span className="stat__label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
