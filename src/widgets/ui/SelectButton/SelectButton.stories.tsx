import { Meta, Story } from '@storybook/react'
import { SelectButtonProps } from 'widgets/ui/SelectButton/SelectButton.typings'
import SelectButton from 'widgets/ui/SelectButton/SelectButton'
import React from 'react'

const defaultArgs: Partial<SelectButtonProps> = {
}

export default {
    title: 'crp-kit/SelectButton',
    component: SelectButton,
} as Meta<SelectButtonProps>

export const Default: Story<SelectButtonProps> = (args) => (
    <SelectButton {...args}></SelectButton>
)
Default.args = defaultArgs
