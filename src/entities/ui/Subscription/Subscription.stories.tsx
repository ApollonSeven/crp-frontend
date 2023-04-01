import { Meta, Story } from '@storybook/react'
import { SubscriptionProps } from 'entities/ui/Subscription/Subscription.typings'
import Subscription from 'entities/ui/Subscription/Subscription'
import React from 'react'

const defaultArgs: Partial<SubscriptionProps> = {
    date: '18.12.23 - 14.05.26'
}

export default {
    title: 'crp-kit/Subscription',
    component: Subscription,
} as Meta<SubscriptionProps>

export const Default: Story<SubscriptionProps> = (args) => (
    <Subscription {...args}></Subscription>
)
Default.args = defaultArgs