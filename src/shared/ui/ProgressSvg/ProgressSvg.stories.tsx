import { Meta, Story } from '@storybook/react'
import { Props } from 'shared/ui/ProgressSvg/ProgressSvg.typings'
import React from 'react'
import { ProgressSvg } from 'shared/ui/ProgressSvg/ProgressSvg'
import { Mood } from 'shared/icons/Mood'
import { Toilet } from 'shared/icons/Toilet'
import { Shower } from 'shared/icons/Shower'
import { Guard } from 'shared/icons/Guard'
import { Sleep } from 'shared/icons/Sleep'
import { Pizza } from 'shared/icons/Pizza'
import { Cup } from 'shared/icons/Cup'

export default {
    title: 'crp-kit/ProgressSvg',
    component: ProgressSvg,
    parameters: {
        backgrounds: {
            default: 'dark',
        },
    },
    args: {
        height: 50,
        width: 50,
        percent: 0.5,
    },
} as Meta<Props>

export const Default: Story<Partial<Props>> = (args) => (
    <div style={{ display: 'flex', gap: '20px' }}>
        <ProgressSvg Icon={Toilet} {...args} />
        <ProgressSvg {...args} Icon={Shower} percent={0.4} />
        <ProgressSvg {...args} Icon={Guard} percent={1} />
        <ProgressSvg {...args} Icon={Sleep} percent={0.3} />
        <ProgressSvg {...args} Icon={Mood} percent={0.8} />
        <ProgressSvg {...args} Icon={Pizza} percent={0.5} />
        <ProgressSvg {...args} Icon={Cup} percent={0.6} />
    </div>
)
