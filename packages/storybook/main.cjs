const { mergeConfig } = require('vite');

module.exports = {
  framework: '@storybook/preact',
  stories: ['stories/**/*.stories.mdx', 'stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-essentials'],
  core: {
    builder: '@storybook/builder-vite',
    disableTelemetry: true,
  },
  async viteFinal (config) {
    return mergeConfig(config, {
      root: '../../' // to place builder-vite's .vite-storybook/ in root node_modules
    }) 
  }
};
