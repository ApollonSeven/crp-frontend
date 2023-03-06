/* eslint-disable react/jsx-filename-extension */
import { Meta, Story } from '@storybook/react'
import { IDCardProps } from 'shared/ui/IDCard/IDCard.typings'
import IdentificationCard from "shared/ui/IDCard/IDCard"
import React from 'react'
export {};


const defaultArgs: Partial<IDCardProps> = {
    state: 'CALIFORNIA',
    id: 'ARS246254',
    expireDate: '25/09/25',
    lastName: 'Arsenyi',
    familyName: 'Beznozhnikov',
    street: 'Shluznaya 8 koshesi, Ablaktestky Rayoni',
    dateofBirth: '18/02/99',
    sex: 'M',
    height: '1-79',
    hair: 'BRN',
    weight: 69,
    eyes: 'BRN',
    issued: '02/13/18',
    documentD11r: '02/25/231250641/YYGMD/63',
    photoURL: 'https://i.pinimg.com/474x/82/bd/43/82bd43eedbbd2fda2945aa9de9e5dd9c.jpg',
    signature: 'https://toppng.com/uploads/preview/signature-png-115539500690fdntr4lhu.png'
}

export default {
    title: 'crp-kit/IDCard',
    component: IdentificationCard,
} as Meta<IDCardProps>

export const Default: Story<IDCardProps> = (args) => <IdentificationCard {...args}>Title</IdentificationCard>
Default.args = defaultArgs