const { pascalCase } = require('@figma-export/utils')

module.exports = {
    commands: [
        [
            'components',
            {
                fileId: 'ueN2AgZCDhkGEGxyjB1qXu',
                onlyFromPages: ['Icons'],
                outputters: [
                    require('@figma-export/output-components-as-svgr')({
                        output: './src/shared/icons/generated',
                        getFileExtension: () => '.tsx',
                        getDirname: () => ``,
                        getSvgrConfig: () => ({
                            typescript: true,
                            replaceAttrValues: {
                                black: '{props.color}',
                            },
                            icon: true,
                        }),
                        getExportTemplate: (options) => {
                            const reactComponentName = pascalCase(
                                options.basename
                            )
                            return `export { default as ${reactComponentName} } from './${reactComponentName}';`
                        },
                    }),
                ],
            },
        ],
    ],
}
