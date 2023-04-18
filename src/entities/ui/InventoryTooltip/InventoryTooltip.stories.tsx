import { Meta, Story } from '@storybook/react'
import React from 'react'
import { InventoryTooltip } from 'entities/ui/InventoryTooltip/InventoryTooltip'
import { Props } from 'entities/ui/InventoryTooltip/InventoryTooltip.typings'
import { Button } from 'shared/ui/Button/Button'
import img from '../../../../public/assets/sleeve.png'

export default {
    title: 'entities/InventoryTooltip',
    component: InventoryTooltip,

    parameters: {
        backgrounds: {
            default: 'dark',
        },
    },
    args: {
        title: 'Гильза',
        mainTitle: '9x19',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu est sagittis aliquam quisque. Accumsan facilisis eleifend duis est turpis.',
        weight: 5,
        img,
    },
} as Meta<Props>

export const Default: Story<Props> = (args) => (
    <InventoryTooltip {...args}>
        <Button>Show Tooltip!</Button>
    </InventoryTooltip>
)
