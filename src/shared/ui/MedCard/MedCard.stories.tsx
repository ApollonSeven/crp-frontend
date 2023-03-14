import { Meta, Story } from '@storybook/react'
import { MedCardProps } from 'shared/ui/MedCard/MedCard.typings'
import MedCard from 'shared/ui/MedCard/MedCard'
import React from 'react'

const defaultArgs: Partial<MedCardProps> = {
    firstName: 'Ryu',
    lastName: 'Hayabusa',
    id: '2523627',
    effectiveDate: '22.05.98 - 23.08.12',
    givenAddress: 'SANDY-SHORES HOSPITAL',
    phoneNumber: '(563)375-175-34',
    medGroup: 'любая группа',
    corpName: 'L.A. CARE',
    subName: 'Medi-Cal',
}

export default {
    title: 'crp-kit/MedCard',
    component: MedCard,
} as Meta<MedCardProps>

export const Default: Story<MedCardProps> = (args) => (
    <MedCard {...args}></MedCard>
)
Default.args = defaultArgs
