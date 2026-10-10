import { render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { App } from './App';
import { Contact } from './components/Contact';
import { Projects } from './components/Projects';
import { profile } from './data/profile';
import type { Project } from './types';

describe('App', () => {
  it('muestra el nombre en el título principal', () => {
    render(<App />);

    expect(
      screen.getByRole('heading', { level: 1, name: /Gabriela\s*Alvarez\s*Maciel/ }),
    ).toBeInTheDocument();
  });

  it('todos los enlaces del menú apuntan a una sección que existe', () => {
    render(<App />);

    const nav = screen.getByRole('navigation', { name: 'Principal' });
    const links = within(nav).getAllByRole('link');

    expect(links.length).toBeGreaterThan(0);
    for (const link of links) {
      const href = link.getAttribute('href');
      expect(href).toMatch(/^#/);
      expect(document.querySelector(href as string)).not.toBeNull();
    }
  });

  it('el botón de contacto abre un correo a la dirección del perfil', () => {
    render(<App />);

    const mailLinks = screen.getAllByRole('link', { name: profile.email });

    expect(mailLinks.length).toBeGreaterThan(0);
    for (const link of mailLinks) {
      expect(link).toHaveAttribute('href', `mailto:${profile.email}`);
    }
  });
});

describe('Projects', () => {
  it('no muestra la sección cuando no hay proyectos', () => {
    const { container } = render(<Projects projects={[]} />);

    expect(container).toBeEmptyDOMElement();
  });

  it('muestra los proyectos con sus enlaces', () => {
    const sample: Project[] = [
      {
        title: 'Proyecto de prueba',
        description: 'Descripción de ejemplo.',
        tags: ['React', 'TypeScript'],
        demoUrl: 'https://example.com/demo',
        repoUrl: 'https://example.com/repo',
      },
    ];

    render(<Projects projects={sample} />);

    expect(screen.getByRole('heading', { name: 'Proyecto de prueba' })).toBeInTheDocument();
    expect(screen.getByText('React · TypeScript')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Ver demo' })).toHaveAttribute(
      'href',
      'https://example.com/demo',
    );
    expect(screen.getByRole('link', { name: 'Ver código' })).toHaveAttribute(
      'href',
      'https://example.com/repo',
    );
  });
});

describe('Contact', () => {
  it('no muestra el botón de agendar si no hay enlace', () => {
    render(<Contact bookingUrl="" />);

    expect(screen.queryByRole('link', { name: 'Agenda una llamada' })).not.toBeInTheDocument();
  });

  it('muestra el botón de agendar cuando hay enlace', () => {
    render(<Contact bookingUrl="https://cal.com/ejemplo" />);

    expect(screen.getByRole('link', { name: 'Agenda una llamada' })).toHaveAttribute(
      'href',
      'https://cal.com/ejemplo',
    );
  });
});
