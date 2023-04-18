import { Meta, Story } from '@storybook/react'
import React from 'react'
import { InventorySlot } from 'shared/ui/InventorySlot/InventorySlot'
import { Props } from 'shared/ui/InventorySlot/InventorySlot.typings'
import { ManJacket } from 'shared/icons/generated'

export default {
    title: 'crp-kit/InventorySlot',
    component: InventorySlot,
    args: {
        Icon: ManJacket,
    },
    parameters: {
        backgrounds: {
            default: 'dark',
        },
    },
} as Meta<Props>

export const Default: Story<Props> = (args) => (
    <div style={{ display: 'flex', flexDirection: 'row', columnGap: '12px' }}>
        <InventorySlot {...args} />
        <InventorySlot subTitle="25" />
    </div>
)
