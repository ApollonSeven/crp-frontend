import { Meta, Story } from '@storybook/react'
import React from 'react'
import { PlayerSlots } from 'entities/ui/PlayerSlots/PlayerSlots'
import { preview } from 'entities/ui/PlayerSlots/__mocks__/preview'
import { Props } from 'entities/ui/PlayerSlots/PlayerSlots.typings'

export default {
    title: 'entities/PlayerSlots',
    component: PlayerSlots,
    args: preview,
} as Meta<Props>

export const Default: Story<Props> = (args) => <PlayerSlots {...args} />
