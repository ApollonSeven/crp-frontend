import { Meta, Story } from '@storybook/react'
import { SpawnChoiceProps } from 'pages/ui/SpawnChoice/SpawnChoice.typings'
import SpawnChoice from 'pages/ui/SpawnChoice/SpawnChoice'
import React from 'react'

const defaultArgs: Partial<SpawnChoiceProps> = {
}

export default {
    title: 'crp-kit/SpawnChoice',
    component: SpawnChoice,
} as Meta<SpawnChoiceProps>

export const Default: Story<SpawnChoiceProps> = (args) => (
    <SpawnChoice {...args}></SpawnChoice>
)
Default.args = defaultArgs
