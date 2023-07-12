import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // 設定 github page ================
  // base: "/Meme_Johnny/",  // 設定 github 專案路徑
  // 引入 scss rwd ================
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "src/assets/styles/rwd/index.scss";`
      }
    }
  }
})
