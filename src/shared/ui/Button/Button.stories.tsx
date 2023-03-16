import { Meta, Story } from '@storybook/react'
import { Button } from './Button'
import { Props } from './Button.typings'
import React from 'react'
import { preview } from 'shared/ui/Button/__mocks__/preview'

export default {
    title: 'crp-kit/Button',
    component: Button,
    args: preview,
} as Meta<Props>

export const Default: Story<Props> = (args) => <Button {...args}>Title</Button>
