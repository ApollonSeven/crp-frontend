import { Meta, Story } from '@storybook/react'
import React, { useState } from 'react'
import Slider from './Slider'

export default {
    title: 'crp-kit/Input/Slider',
    component: Slider,
    parameters: {
        backgrounds: {
            default: 'dark',
        },
    },
} as Meta

export const Primary: Story = () => {
    const [value, setValue] = useState(40)

    return (
        <div
            style={{
                height: '300px',
                padding: '100px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
            }}
        >
            <Slider
                maxValue={100}
                minValue={0}
                value={value}
                onChange={(value) => setValue(value)}
            />
            <Slider
                maxValue={100}
                minValue={0}
                value={value}
                onChange={(value) => setValue(value)}
                size="xs"
            />
        </div>
    )
}
