import { Meta, Story } from '@storybook/react'
import { FamilyWidgetProps } from 'widgets/ui/FamilyWidget/FamilyWidget.typings'
import FamilyWidget from 'widgets/ui/FamilyWidget/FamilyWidget'
import React from 'react'

const defaultArgs: Partial<FamilyWidgetProps> = {
}

export default {
    title: 'crp-kit/FamilyWidget',
    component: FamilyWidget,
} as Meta<FamilyWidgetProps>

export const Default: Story<FamilyWidgetProps> = (args) => (
    <FamilyWidget {...args}></FamilyWidget>
)
Default.args = defaultArgs
