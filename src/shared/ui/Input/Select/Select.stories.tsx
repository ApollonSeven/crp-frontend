import { Meta, Story } from '@storybook/react'
import React, { useState } from 'react'
import Select from './Select'
import { Props } from 'shared/ui/Input/Select/Select.typings'
import { preview } from 'shared/ui/Input/Select/__mocks__/preview'

export default {
    title: 'crp-kit/Input/Select',
    component: Select,
    parameters: {
        backgrounds: {
            default: 'dark',
        },
    },
    args: preview,
} as Meta

export const Primary: Story<Props> = (args) => {
    const [value, setValue] = useState(null)

    return (
        <div
            style={{
                height: '300px',
                padding: '100px',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
            }}
        >
            <Select
                {...args}
                value={value}
                onChange={(title) => setValue(title)}
            />
        </div>
    )
}
