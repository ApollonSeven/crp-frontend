import { Meta, Story } from '@storybook/react'
import { DriverLicenseProps } from 'shared/ui/DriverLicense/DriverLicense.typings'
import DriverLicense from 'shared/ui/DriverLicense/DriverLicense'
import React from 'react'

const defaultArgs: Partial<DriverLicenseProps> = {
    state: 'CALIFORNIA',
    id: 'I1234561',
    expireDate: '25/09/2015',
    lastName: 'Arsenyi',
    firstName: 'Beznozhnikov',
    street: 'Shluznaya 8 koshesi, Ablaktestky Rayoni street',
    birthDate: '18/02/1999',
    sex: 'M',
    height: '1-79',
    hair: 'BRN',
    weight: 69,
    eyes: 'BRN',
    issued: '02/13/18',
    docDiscriminator: '02/25/231250641/YYGMD/63',
    photoURL: 'https://shikimori.one/system/characters/original/80.jpg',
    signature: 'https://i.postimg.cc/pVCsBLzv/image.png',
    restrictions: 'NO',
    driverClass: 'ARS',
    endorsements: 'NO',
}

export default {
    title: 'shared/DriverLicense',
    component: DriverLicense,
} as Meta<DriverLicenseProps>

export const Default: Story<DriverLicenseProps> = (args) => (
    <DriverLicense {...args}></DriverLicense>
)
Default.args = defaultArgs
