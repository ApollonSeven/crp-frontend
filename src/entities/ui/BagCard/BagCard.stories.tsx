import { Meta, Story } from '@storybook/react'
import React from 'react'
import { BagCard } from 'entities/ui/BagCard/BagCard'

export default {
    title: 'entities/BagCard',
    component: BagCard,
    parameters: {
        backgrounds: {
            default: 'dark',
        },
    },
} as Meta

export const Default: Story = (args) => <BagCard {...args} />
