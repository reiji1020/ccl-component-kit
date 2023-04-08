module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/**/*.stories.@(ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-essentials",
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  "framework": "@storybook/react"
}