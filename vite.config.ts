import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    // 设置别名
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  },
  plugins: [vue()],
  server: {
    port: 8080,
    hmr: {
      host: '127.0.0.1',
      port: 8080,
    },
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:41091',
        changeOrigin: true,
        rewrite: (path: String) => path.replace(/^\/api/, ''),
      }
    }
  },
})
