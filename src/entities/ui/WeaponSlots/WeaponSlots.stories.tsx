import { Meta, Story } from '@storybook/react'
import React from 'react'
import { WeaponSlots } from 'entities/ui/WeaponSlots/WeaponSlots'

export default {
    title: 'entities/WeaponSlots',
    component: WeaponSlots,

    parameters: {
        backgrounds: {
            default: 'dark',
        },
    },
} as Meta

export const Default: Story = (args) => <WeaponSlots {...args} />
