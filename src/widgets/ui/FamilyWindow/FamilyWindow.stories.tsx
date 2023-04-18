import { Meta, Story } from '@storybook/react'
import { FamilyWindowProps } from 'widgets/ui/FamilyWindow/FamilyWindow.typings'
import FamilyWindow from 'widgets/ui/FamilyWindow/FamilyWindow'
import React from 'react'

const defaultArgs: Partial<FamilyWindowProps> = {}

export default {
    title: 'shared/FamilyWindow',
    component: FamilyWindow,
} as Meta<FamilyWindowProps>

export const Default: Story<FamilyWindowProps> = (args) => (
    <FamilyWindow {...args}></FamilyWindow>
)
Default.args = defaultArgs
