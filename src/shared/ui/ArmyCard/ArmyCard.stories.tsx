import { Meta, Story } from '@storybook/react'
import ArmyCard  from './ArmyCard'
import { Props } from './ArmyCard.typings'
import React from 'react'
import { preview } from 'shared/ui/ArmyCard/__mocks__/preview'

export default {
    title: 'crp-kit/ArmyCard',
    component: ArmyCard,
    args: preview,
} as Meta<Props>

export const Default: Story<Props> = (args) => <ArmyCard {...args}>Title</ArmyCard>
//export {}