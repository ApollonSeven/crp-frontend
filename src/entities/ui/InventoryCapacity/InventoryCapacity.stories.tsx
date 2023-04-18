import { Meta, Story } from '@storybook/react'
import React from 'react'
import { InventoryCapacity } from 'entities/ui/InventoryCapacity/InventoryCapacity'
import { Props } from 'entities/ui/InventoryCapacity/InventoryCapacity.typings'

export default {
    title: 'entities/InventoryCapacity',
    component: InventoryCapacity,
    args: {
        maxValue: 20,
        value: 15,
    },
    parameters: {
        backgrounds: {
            default: 'dark',
        },
    },
} as Meta<Props>

export const Default: Story<Props> = (args) => <InventoryCapacity {...args} />
