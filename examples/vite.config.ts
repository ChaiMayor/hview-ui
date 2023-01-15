import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dynamicImport from 'vite-plugin-dynamic-import'

export default defineConfig({
  plugins:[
    vue(),
    dynamicImport(),
  ]
})
