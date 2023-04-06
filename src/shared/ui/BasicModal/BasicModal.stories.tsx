import { Meta, Story } from '@storybook/react'
import React from 'react'
import { preview } from 'shared/ui/Button/__mocks__/preview'
import { BasicModal } from 'shared/ui/BasicModal/BasicModal'
import { Props } from 'shared/ui/BasicModal/BasicModal.typings'

export default {
    title: 'crp-kit/Button',
    component: BasicModal,
    args: preview,
} as Meta<Props>

export const Default: Story<Props> = (args) => (
    <BasicModal {...args}>Title</BasicModal>
)
