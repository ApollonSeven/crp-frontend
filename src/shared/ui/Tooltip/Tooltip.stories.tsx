import { Meta, Story } from '@storybook/react'
import React from 'react'
import { Tooltip } from 'shared/ui/Tooltip/Tooltip'
import { Props } from 'shared/ui/Tooltip/Tooltip.typings'
import { Button } from 'shared/ui/Button/Button'

export default {
    title: 'crp-kit/Tooltip',
    component: Tooltip,
    args: {},
} as Meta<Props>

export const Default: Story<Props> = (args) => (
    <Tooltip
        {...args}
        placement="bottom"
        trigger={['hover']}
        overlay={
            <div>
                <p>Title</p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu
                    est sagittis aliquam quisque. Accumsan facilisis eleifend
                    duis est turpis.
                </p>
            </div>
        }
    >
        <Button>Show Me!</Button>
    </Tooltip>
)
