import { Meta, Story } from '@storybook/react'
import { TimerWidgetProps } from 'widgets/ui/TimerWidget/TimerWidget.typings'
import TimerWidget from 'widgets/ui/TimerWidget/TimerWidget'
import React from 'react'

const defaultArgs: Partial<TimerWidgetProps> = {
}

export default {
    title: 'crp-kit/TimerWidget',
    component: TimerWidget,
} as Meta<TimerWidgetProps>

export const Default: Story<TimerWidgetProps> = (args) => (
    <TimerWidget {...args}></TimerWidget>
)
Default.args = defaultArgs