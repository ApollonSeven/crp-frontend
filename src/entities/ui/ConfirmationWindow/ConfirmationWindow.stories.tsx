import { Meta, Story } from '@storybook/react'
import { ConfirmationWindowProps } from 'entities/ui/ConfirmationWindow/ConfirmationWindow.typings'
import ConfirmationWindow from 'entities/ui/ConfirmationWindow/ConfirmationWindow'
import React from 'react'

const defaultArgs: Partial<ConfirmationWindowProps> = {
}

export default {
    title: 'crp-kit/ConfirmationWindow',
    component: ConfirmationWindow,
} as Meta<ConfirmationWindowProps>

export const Default: Story<ConfirmationWindowProps> = (args) => (
    <ConfirmationWindow {...args}></ConfirmationWindow>
)
Default.args = defaultArgs