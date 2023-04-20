import { Meta, Story } from '@storybook/react'

import React from 'react'
import { preview } from 'shared/ui/Button/__mocks__/preview'
import { PlayerInfoForm } from 'features/ui/PlayerInfoForm/PlayerInfoForm'

export default {
    title: 'features/PlayerInfoForm',
    component: PlayerInfoForm,
    args: preview,
} as Meta

export const Default: Story = () => <PlayerInfoForm />
