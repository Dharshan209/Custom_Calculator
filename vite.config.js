import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),
  ],
<<<<<<< HEAD
  base:"/Custom_Calculator",
=======
  base:"/Custom_calculator",
>>>>>>> 4f1ac1525cc4460518be15bc2ab1bc59490e4f69
  
})
