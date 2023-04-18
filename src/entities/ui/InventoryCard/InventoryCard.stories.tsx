import { Meta, Story } from '@storybook/react'
import React from 'react'
import { InventoryCard } from 'entities/ui/InventoryCard/InventoryCard'

export default {
    title: 'entities/InventoryCard',
    component: InventoryCard,

    parameters: {
        backgrounds: {
            default: 'dark',
        },
    },
} as Meta

export const Default: Story = (args) => <InventoryCard {...args} />
