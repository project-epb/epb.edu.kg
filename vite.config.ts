import { defineConfig } from 'vite'
import { resolve } from 'node:path'
import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import VueRouter from 'unplugin-vue-router/vite'
import UnoCSS from 'unocss/vite'
import { cloudflare } from '@cloudflare/vite-plugin'

const IS_PROD = process.env.NODE_ENV === 'production' && process.env.BUILD_ENV !== 'development'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    VueRouter({
      dts: 'src/typed-router.d.ts',
      routesFolder: ['src/pages'],
    }),
    Vue(),
    VueJsx(),
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia', '@vueuse/core'],
      dts: 'src/auto-imports.d.ts',
      vueTemplate: true,
      vueDirectives: true,
    }),
    Components({
      dts: 'src/components.d.ts',
      directoryAsNamespace: true,
      collapseSamePrefixes: true,
    }),
    UnoCSS(),
    cloudflare({}),
  ],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  esbuild: {
    drop: IS_PROD ? ['console'] : [],
  },
  resolve: {
    alias: {
      '@': resolve(import.meta.dirname, './src'),
    },
  },
})
