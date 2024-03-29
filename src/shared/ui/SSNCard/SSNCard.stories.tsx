/* eslint-disable react/jsx-filename-extension */
import { Meta, Story } from '@storybook/react'
import SSNCard from './SSNCard'
import React from 'react'
import { SSNCardProps } from './SSNCard.typings'

const defaultArgs: Partial<SSNCardProps> = {
    docNumber: '134-2235235',
    fullName: 'Robert Miller',
    signature: 'https://i.postimg.cc/pVCsBLzv/image.png',
    givenDate: '05/22/99',
}

export default {
    title: 'shared/SSNCard',
    component: SSNCard,
} as Meta<SSNCardProps>

export const Default: Story<SSNCardProps> = (args) => (
    <SSNCard {...args}></SSNCard>
)
Default.args = defaultArgs
