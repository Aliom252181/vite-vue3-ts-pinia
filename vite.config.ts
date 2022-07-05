import { defineConfig, normalizePath } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import autoprefixer from 'autoprefixer';

const variablePath = normalizePath(path.resolve(__dirname, './src/styles/variables.scss'));

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    // 设置别名
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  },
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        // additionData 的内容会在每个scss文件的开头自动注入
        additionalData: `@import "${variablePath}";`,
      }
    },
    // 进行PostCSS配置
    postcss: {
      plugins: [
        autoprefixer({
          // 兼容性处理
          overrideBrowserslist: ['chrome >= 40', 'ff > 31', 'ie 11'],
        })
      ]
    }
  },
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
