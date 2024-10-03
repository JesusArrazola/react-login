import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: [
      // Aquí puedes agregar cualquier otra dependencia que necesites
    ],
    exclude: ['react/jsx-dev-runtime', 'react/jsx-runtime'], // React 16
  },
});
