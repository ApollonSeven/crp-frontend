import { Meta, Story } from '@storybook/react'
import { IDCardProps } from 'shared/ui/IDCard/IDCard.typings'
import IDCard from 'shared/ui/IDCard/IDCard'
import React from 'react'

const defaultArgs: Partial<IDCardProps> = {
    state: 'CALIFORNIA',
    id: 'I1234561',
    expireDate: '25/09/2015',
    lastName: 'Arsenyi',
    firstName: 'Beznozhnikov',
    street: 'Shluznaya 8 koshesi, Ablaktestky Rayoni street',
    birthDate: '18/02/1999',
    donor: true,
    sex: 'M',
    height: '1-79',
    hair: 'BRN',
    weight: 69,
    eyes: 'BRN',
    issued: '02/13/18',
    docDiscriminator: '02/25/231250641/YYGMD/63',
    photoURL: 'https://shikimori.one/system/characters/original/80.jpg',
    signature: 'https://i.postimg.cc/pVCsBLzv/image.png',
}

export default {
    title: 'crp-kit/IDCard',
    component: IDCard,
} as Meta<IDCardProps>

export const Default: Story<IDCardProps> = (args) => <IDCard {...args}></IDCard>
Default.args = defaultArgs
