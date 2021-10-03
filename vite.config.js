import { defineConfig } from 'vite'
import path from 'path'
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, './src') }],
  },
  // inject import react from react for all JSX file
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
  define: {
    'process.env': process.env
  }
})
