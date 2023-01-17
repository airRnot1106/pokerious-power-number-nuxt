/// <reference types="vitest" />

import Vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import type { UserConfig } from 'vite';

import AutoImport from 'unplugin-auto-import/vite';

import type { InlineConfig } from 'vitest';

interface VitestConfigExport extends UserConfig {
  test: InlineConfig;
}

export default defineConfig({
  plugins: [
    Vue(),
    AutoImport({ imports: ['vue'], dts: 'src/types/auto-imports.d.ts' }),
  ],
  test: {
    global: true,
    environment: 'jsdom',
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
} as VitestConfigExport);
