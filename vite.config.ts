import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { reactRouter } from '@react-router/dev/vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tailwindcss(), reactRouter(), tsconfigPaths()],
  build: {
    cssMinify: true,
    ssr: false,
    // outDir: 'dist', // specify the output directory
    // assetsDir: 'assets', // specify where to put static assets like images and fonts
    // emptyOutDir: true, // clear the output directory before building
    // rollupOptions: {
    //   input: {
    //     main: 'index.html', // ensure it uses the correct entry point
    //   },
    // },
  },
});
