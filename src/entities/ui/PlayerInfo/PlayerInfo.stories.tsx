import { Meta, Story } from '@storybook/react'
import { PlayerInfoProps } from 'entities/ui/PlayerInfo/PlayerInfo.typings'
import PlayerInfo from 'entities/ui/PlayerInfo/PlayerInfo'
import React from 'react'

const defaultArgs: Partial<PlayerInfoProps> = {
    fullName: 'Megaman Xawefwefw',
    birthDate: '02.02.21XX',
    address: 'Neo Arcadia',
    workPlace: 'Maverick Hunters HQ',
    occupation: 'Maverick Hunter',
    age: '18 лет',
    card: '$3000',
    cash: '$5000',
}

export default {
    title: 'shared/PlayerInfo',
    component: PlayerInfo,
} as Meta<PlayerInfoProps>

export const Default: Story<PlayerInfoProps> = (args) => (
    <PlayerInfo {...args}></PlayerInfo>
)
Default.args = defaultArgs
