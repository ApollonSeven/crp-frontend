import { Meta, Story } from '@storybook/react'
import { PlayerMenuProps } from 'pages/ui/PlayerMenu/PlayerMenu.typings'
import PlayerMenu from 'pages/ui/PlayerMenu/PlayerMenu'
import React from 'react'

const defaultArgs: Partial<PlayerMenuProps> = {
    price: '$17.55'
}

export default {
    title: 'crp-kit/PlayerMenu',
    component: PlayerMenu,
} as Meta<PlayerMenuProps>

export const Default: Story<PlayerMenuProps> = (args) => (
    <PlayerMenu {...args}></PlayerMenu>
)
Default.args = defaultArgs