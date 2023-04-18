import { Meta, Story } from '@storybook/react'
import VehiclePassport  from './VehiclePassport'
import { Props } from './VehiclePassport.typings'
import React from 'react'
import { preview } from 'shared/ui/VehiclePassport/__mocks__/preview'

export default {
    title: 'crp-kit/VehiclePassport',
    component: VehiclePassport,
    args: preview,
} as Meta<Props>

export const Default: Story<Props> = (args) => <VehiclePassport {...args}>Title</VehiclePassport>