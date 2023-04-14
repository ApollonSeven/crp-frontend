import { Meta, Story } from '@storybook/react'
import { PlayerSelectProps } from 'widgets/ui/PlayerSelect/PlayerSelect.typings'
import PlayerSelect from 'widgets/ui/PlayerSelect/PlayerSelect'
import React from 'react'

const defaultArgs: Partial<PlayerSelectProps> = {
}

export default {
    title: 'crp-kit/PlayerSelect',
    component: PlayerSelect,
} as Meta<PlayerSelectProps>

export const Default: Story<PlayerSelectProps> = (args) => (
    <PlayerSelect {...args}></PlayerSelect>
)
Default.args = defaultArgs