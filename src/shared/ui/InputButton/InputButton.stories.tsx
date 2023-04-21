import { Meta, Story } from '@storybook/react'
import React from 'react'
import { Props } from 'shared/ui/Input/Select/Select.typings'
import { InputButton } from 'shared/ui/InputButton/InputButton'
import { Cubes } from 'shared/icons/generated'

export default {
    title: 'shared/InputButton',
    component: InputButton,
    parameters: {
        backgrounds: {
            default: 'dark',
        },
    },
} as Meta

export const Primary: Story<Props> = () => {
    return <InputButton Icon={Cubes} />
}
