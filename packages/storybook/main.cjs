const { mergeConfig } = require('vite');

module.exports = {
  "stories": ['stories/**/*.stories.mdx', 'stories/**/*.stories.@(js|jsx|ts|tsx)'],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/html",
  "core": {
    "builder": "@storybook/builder-vite",
    "disableTelemetry": true,
  },
  "features": {
    "storyStoreV7": true
  },
  async viteFinal (config) {
    return mergeConfig(config, {
      root: '../../' // to place builder-vite's .vite-storybook/ in root node_modules
    }) 
  }  
}