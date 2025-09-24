import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'  // remove if not using Vue
// import react from '@vitejs/plugin-react' // use this instead if using React

export default defineConfig({
  root: '.', // project root where index.html is located
  plugins: [
    vue(), // remove or replace with react() if using React
  ],
  build: {
    outDir: 'dist',   // output directory for the build
    emptyOutDir: true // cleans the output folder before building
  },
  server: {
    port: 3000,       // dev server port
    open: true        // automatically open browser
  }
})
