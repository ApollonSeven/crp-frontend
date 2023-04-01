import { Meta, Story } from '@storybook/react'
import { ConfirmButtonProps } from 'widgets/ui/ConfirmButton/ConfirmButton.typings'
import ConfirmButton from 'widgets/ui/ConfirmButton/ConfirmButton'
import React from 'react'

const defaultArgs: Partial<ConfirmButtonProps> = {
}

export default {
    title: 'crp-kit/ConfirmButton',
    component: ConfirmButton,
} as Meta<ConfirmButtonProps>

export const Default: Story<ConfirmButtonProps> = (args) => (
    <ConfirmButton {...args}></ConfirmButton>
)
Default.args = defaultArgs