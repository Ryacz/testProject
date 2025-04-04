import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';
import {createSvgIconsPlugin} from 'vite-plugin-svg-icons'
import { viteMockServe } from 'vite-plugin-mock';
// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],  // 设置图标目录
      symbolId: 'icon-[name]'  // 设置图标的 symbol ID
    }),
    viteMockServe({
      // default
      mockPath: 'mock',
      enable:true
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve('./src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/style/variable.scss" as *;`,
      }
    }
  }
})
