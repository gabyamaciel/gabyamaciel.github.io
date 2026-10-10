# Portafolio de Gabriela Alvarez Maciel

Sitio personal de **Gabriela Alvarez Maciel**, Senior Software Engineer especializada en frontend (React, TypeScript, design systems y arquitectura frontend), disponible para proyectos freelance remotos.

**Sitio en vivo:** https://gabyamaciel.github.io

## Tecnología

- React y TypeScript, con Vite como herramienta de desarrollo y build.
- CSS plano con variables de diseño (`src/styles/tokens.css`).
- Pruebas con Vitest y Testing Library.
- CI/CD con GitHub Actions: en cada push se revisan los tipos, se corren las pruebas, se compila y se despliega a GitHub Pages.

## Empezar

Necesitas Node.js 20 o superior.

```bash
npm install
npm run dev
```

Scripts disponibles:

| Comando | Qué hace |
| --- | --- |
| `npm run dev` | Servidor de desarrollo con recarga en caliente |
| `npm run typecheck` | Revisa los tipos con TypeScript |
| `npm test` | Corre las pruebas una vez |
| `npm run test:watch` | Corre las pruebas en modo observador |
| `npm run build` | Genera el sitio estático en `dist/` |
| `npm run preview` | Sirve `dist/` localmente para revisarlo |

## Estructura

```
.
├── .github/workflows/deploy.yml   # CI y despliegue a Pages
├── public/                        # Archivos estáticos (favicon)
├── src/
│   ├── components/                # Un componente por bloque de la página
│   ├── data/                      # Contenido: perfil, servicios, casos, stack, proyectos...
│   ├── styles/                    # tokens.css, base.css, components.css
│   ├── test/setup.ts              # Configuración de pruebas
│   ├── App.tsx
│   ├── App.test.tsx
│   ├── main.tsx
│   └── types.ts                   # Tipos del contenido
├── index.html                     # Entrada de Vite (meta tags y fuentes)
├── package.json
├── tsconfig.json
└── vite.config.ts
```

El contenido vive en `src/data/` y los componentes solo lo muestran. Para cambiar un texto casi nunca hay que tocar un componente.

## Agregar un proyecto

Edita `src/data/projects.ts` y agrega un objeto al arreglo:

```ts
{
  title: 'Nombre del proyecto',
  description: 'Qué hace, qué problema resuelve y cuál fue tu papel.',
  tags: ['React', 'TypeScript'],
  demoUrl: 'https://...',
  repoUrl: 'https://github.com/gabyamaciel/...',
},
```

Mientras el arreglo esté vacío, la sección de proyectos no se muestra; aparece sola al agregar el primero. Al hacer push a `main`, el sitio se actualiza solo.

## Botón para agendar una llamada

En `src/data/profile.ts`, pega tu enlace de Calendly o Cal.com en `bookingUrl`. Mientras esté vacío, el botón "Agenda una llamada" no se muestra.

## Imagen de vista previa

`public/og-image.png` (1200×630) es la imagen que aparece al compartir el enlace en LinkedIn y otras redes. Si la cambias, LinkedIn guarda la anterior en caché: pega el enlace en LinkedIn Post Inspector para que la actualice.

## Despliegue

El sitio se publica con GitHub Pages usando el workflow de `.github/workflows/deploy.yml`.

Configuración inicial, una sola vez: en el repo ve a **Settings → Pages** y en **Source** elige **GitHub Actions**.

El proyecto está pensado para un sitio de usuario (repo `gabyamaciel.github.io`), por eso `base` vale `'/'` en `vite.config.ts`. Si lo publicas en un repo con otro nombre, cambia `base` a `'/nombre-del-repo/'`.

## Contacto

- Correo: amacielgabriela@gmail.com
- LinkedIn: https://www.linkedin.com/in/gabriela-alvarez-maciel/
- GitHub: https://github.com/gabyamaciel

© 2026 Gabriela Alvarez Maciel. Todos los derechos reservados.
