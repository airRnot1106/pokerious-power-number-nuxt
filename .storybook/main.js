const path = require('path');

const AutoImport = require('unplugin-auto-import/vite');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/vue3',
  core: {
    builder: '@storybook/builder-vite',
  },
  features: {
    storyStoreV7: true,
  },
  async viteFinal(config) {
    config.plugins.push(
      AutoImport({ imports: ['vue'], dts: 'src/types/auto-imports.d.ts' })
    );

    config.resolve.alias['@'] = path.resolve(__dirname, '..', 'src');

    return config;
  },
};
