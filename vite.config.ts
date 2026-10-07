import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// Sitio de usuario (gabyamaciel.github.io): se sirve desde la raíz, por eso base = '/'.
// Si algún día lo publicas en un repo con otro nombre, cambia base a '/nombre-del-repo/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/test/setup.ts',
  },
});
