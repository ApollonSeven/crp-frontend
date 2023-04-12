import { Meta, Story } from '@storybook/react'
import { MedCardProps } from 'shared/ui/MedCard/MedCard.typings'
import MedCard from 'shared/ui/MedCard/MedCard'
import React from 'react'

const defaultArgs: Partial<MedCardProps> = {
    fullName: 'Ryu Hayabusa',
    id: '252362723',
    effectiveDate: '22.05.98 - 23.08.12',
    givenAddress: 'SANDY-SHORES HOSPITAL',
    phoneNumber: '(563)375-175-342',
    medGroup: 'любая группа',
    corpName: 'L.A. CARE',
    subName: 'Medi-Cal',
}

export default {
    title: 'shared/MedCard',
    component: MedCard,
} as Meta<MedCardProps>

export const Default: Story<MedCardProps> = (args) => (
    <MedCard {...args}></MedCard>
)
Default.args = defaultArgs
