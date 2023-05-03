require('dotenv').config()
const fileRegex = process.env.STORYBOOK_SCOPE
    ? `@(${process.env.STORYBOOK_SCOPE})`
    : '*'
module.exports = {
    stories: [`../src/**/${fileRegex}.stories.@(js|jsx|ts|tsx)`],
    addons: [
        '@storybook/preset-create-react-app',
        {
            name: '@storybook/addon-essentials',
            options: {
                docs: false,
            },
        },
    ],
    framework: {
        name: '@storybook/react-webpack5',
        options: {},
    },
    features: {
        storyStoreV7: true,
    },
}
