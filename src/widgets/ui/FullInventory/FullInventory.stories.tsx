import { Meta, Story } from '@storybook/react'
import React from 'react'
import { FullInventory } from 'widgets/ui/FullInventory/FullInventory'

export default {
    title: 'widgets/FullInventory',
    component: FullInventory,
    parameters: {
        backgrounds: {
            default: 'dark',
        },
    },
} as Meta

export const Default: Story = (args) => <FullInventory {...args} />
