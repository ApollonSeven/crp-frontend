import { Meta, Story } from '@storybook/react'
import React from 'react'
import { WeaponSlot } from 'shared/ui/WeaponSlot/WeaponSlot'
import { Props } from 'shared/ui/WeaponSlot/WeaponSlot.typings'

export default {
    title: 'crp-kit/WeaponSlot',
    component: WeaponSlot,
    args: {
        number: 1,
    },
    parameters: {
        backgrounds: {
            default: 'dark',
        },
    },
} as Meta<Props>

export const Default: Story<Props> = (args) => <WeaponSlot {...args} />
