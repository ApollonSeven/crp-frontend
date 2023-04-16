import { Meta, Story } from '@storybook/react'
import FlyingCard  from './FlyingCard'
import { Props } from './FyingCard.typings'
import React from 'react'
import { preview } from 'shared/ui/FlyingCard/__mocks__/preview'

export default {
    title: 'crp-kit/FlyingCard',
    component: FlyingCard,
    args: preview,
} as Meta<Props>

export const Default: Story<Props> = (args) => <FlyingCard {...args}>Title</FlyingCard>
//export {}