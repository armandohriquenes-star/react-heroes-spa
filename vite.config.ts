import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/07-HEROES-SPA',
  plugins: [
    tailwindcss(),
  ],
});