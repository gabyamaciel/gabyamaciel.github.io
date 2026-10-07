import { services } from '../data/services';
import { Section } from './Section';
import { ServiceCard } from './ServiceCard';

export function Services() {
  return (
    <Section id="servicios" eyebrow="Servicios" title="En qué puedo ayudarte">
      <div className="grid">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} service={service} />
        ))}
      </div>
    </Section>
  );
}
