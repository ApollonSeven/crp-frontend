import { Meta, Story } from '@storybook/react'
import { Toast } from 'shared/ui/Toast/Toast'
import { Props } from 'shared/ui/Toast/Toast.typings'
import { AlertWarning } from 'shared/icons/generated'
import React from 'react'

const defaultArgs: Partial<Props> = {
    variant: 'Info',
    icon: <AlertWarning height={21} width={21} color="#fff" />,
}

export default {
    title: 'crp-kit/Toast',
    component: Toast,
} as Meta<Props>

export const Default: Story<Props> = (args) => (
    <Toast {...args}>Стандартное уведомление</Toast>
)
Default.args = defaultArgs
