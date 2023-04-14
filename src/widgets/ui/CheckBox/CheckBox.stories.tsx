import { Meta, Story } from '@storybook/react'
import { CheckBoxProps } from 'widgets/ui/CheckBox/CheckBox.typings'
import CheckBox from 'widgets/ui/CheckBox/CheckBox'
import React from 'react'

const defaultArgs: Partial<CheckBoxProps> = {
}

export default {
    title: 'crp-kit/CheckBox',
    component: CheckBox,
} as Meta<CheckBoxProps>

export const Default: Story<CheckBoxProps> = (args) => (
    <CheckBox {...args}></CheckBox>
)
Default.args = defaultArgs