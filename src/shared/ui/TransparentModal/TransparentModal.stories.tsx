import { Meta, Story } from '@storybook/react'
import React from 'react'
import { TransparentModal } from 'shared/ui/TransparentModal/TransparentModal'
import { Props } from 'shared/ui/TransparentModal/TransparentModal.typings'

export default {
    title: 'crp-kit/TransparentModal',
    component: TransparentModal,
    args: {},
} as Meta<Props>

export const Default: Story<Props> = (args) => (
    <TransparentModal {...args}>Title</TransparentModal>
)
