import { Meta, Story } from '@storybook/react'
import React from 'react'
import { SlotsCard } from 'shared/ui/SlotsCard/SlotsCard'
import { Props } from 'shared/ui/SlotsCard/SlotsCard.typings'

export default {
    title: 'shared/SlotsCard',
    component: SlotsCard,
    args: {
        title: 'Инвентарь',
        subTitle: '12,3 / 15кг.',
    },
    parameters: {
        backgrounds: {
            default: 'dark',
        },
    },
} as Meta<Props>

export const Default: Story<Props> = (args) => <SlotsCard {...args} />
