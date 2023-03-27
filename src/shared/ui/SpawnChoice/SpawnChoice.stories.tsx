import { Meta, Story } from '@storybook/react'
import { SpawnChoiceProps } from 'shared/ui/SpawnChoice/SpawnChoice.typings'
import SpawnChoice from 'shared/ui/SpawnChoice/SpawnChoice'
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
