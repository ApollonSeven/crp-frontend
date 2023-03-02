import { Meta, Story } from '@storybook/react'
import React, { useState } from 'react'
import Counter from './Counter'

export default {
    title: 'crp-kit/Input/Counter',
    component: Counter,
    parameters: {
        backgrounds: {
            default: 'dark',
        },
    },
} as Meta

export const Primary: Story = () => {
    const [value, setValue] = useState(10)

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                height: '300px',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}
        >
            <Counter value={value} onChange={setValue} />
        </div>
    )
}
