/** Composición decorativa de componentes de UI para la portada. */
export function ComponentShowcase() {
  return (
    <div className="showcase" aria-hidden="true">
      <p className="showcase__label">design system / componentes</p>

      <div className="showcase__row">
        <div className="showcase__btn showcase__btn--primary">Primario</div>
        <div className="showcase__btn showcase__btn--secondary">Secundario</div>
        <div className="showcase__btn showcase__btn--ghost">Texto</div>
      </div>

      <div className="showcase__field">
        <div className="showcase__field-label">Correo</div>
        <div className="showcase__input">hola@ejemplo.com</div>
      </div>

      <div className="showcase__toggle-row">
        <span>Modo accesible</span>
        <span className="showcase__toggle">
          <span className="showcase__toggle-knob" />
        </span>
      </div>

      <div className="showcase__tags">
        <span className="showcase__tag">Storybook</span>
        <span className="showcase__tag">Vitest</span>
        <span className="showcase__tag">TypeScript</span>
      </div>

      <div className="showcase__swatches">
        <span className="showcase__swatch" style={{ background: 'var(--color-accent)' }} />
        <span className="showcase__swatch" style={{ background: 'var(--color-ink)' }} />
        <span className="showcase__swatch" style={{ background: 'var(--color-muted)' }} />
        <span className="showcase__swatch" style={{ background: 'var(--color-border)' }} />
      </div>
    </div>
  );
}
