import { Meta, Story } from '@storybook/react'
import React from 'react'
import { ProgressBar } from 'shared/ui/ProgressBar/ProgressBar'
import { Props } from 'shared/ui/ProgressBar/ProgressBar.typings'

const preview: Props = {
    maxValue: 20,
    value: 15,
}

export default {
    title: 'crp-kit/ProgressBar',
    component: ProgressBar,
    args: preview,
    parameters: {
        backgrounds: {
            default: 'dark',
        },
    },
} as Meta<Props>

export const Default: Story<Props> = (args) => (
    <div style={{ padding: 40 }}>
        <ProgressBar {...args} />
    </div>
)
