require('dotenv').config()

const fileRegex = process.env.STORYBOOK_SCOPE
    ? `@(${process.env.STORYBOOK_SCOPE})`
    : '*'

module.exports = {
    stories: [`../src/**/${fileRegex}.stories.@(js|jsx|ts|tsx)`],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/preset-create-react-app',
    ],
    framework: '@storybook/react',
    core: {
        builder: '@storybook/builder-webpack5',
    },
    features: {
        storyStoreV7: true,
    },
}
