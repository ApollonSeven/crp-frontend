import { Meta, Story } from '@storybook/react'
import BoaterCard  from './BoaterCard'
import { Props } from './BoaterCard.typings'
import React from 'react'
import { preview } from 'shared/ui/BoaterCard/__mocks__/preview'

export default {
    title: 'crp-kit/BoaterCard',
    component: BoaterCard,
    args: preview,
} as Meta<Props>

export const Default: Story<Props> = (args) => <BoaterCard {...args}>Title</BoaterCard>