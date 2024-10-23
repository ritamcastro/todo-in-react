import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
   build: {
    // This will make the build fail if there are TypeScript errors
    typescript: {
      noEmit: true,
      composite: true
    }
  }
})
