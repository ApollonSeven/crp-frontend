import { Meta, Story } from '@storybook/react'
import React from 'react'
import { WeaponCard } from 'entities/ui/WeaponCard/WeaponCard'

export default {
    title: 'entities/WeaponCard',
    component: WeaponCard,

    parameters: {
        backgrounds: {
            default: 'dark',
        },
    },
} as Meta

export const Default: Story = (args) => <WeaponCard {...args} />
