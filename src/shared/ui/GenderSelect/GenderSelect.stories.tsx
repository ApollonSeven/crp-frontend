import { Meta, Story } from '@storybook/react'
import React, { useState } from 'react'

import { Props } from 'shared/ui/Input/Select/Select.typings'
import { GenderSelect } from 'shared/ui/GenderSelect/GenderSelect'
import { Gender } from 'shared/ui/GenderSelect/GenderSelect.typings'

export default {
    title: 'crp-kit/GenderSelect',
    component: GenderSelect,
} as Meta

export const Primary: Story<Props> = () => {
    const [currentGender, setCurrentGender] = useState(Gender.male)
    return (
        <GenderSelect
            value={currentGender}
            onSelect={(gender) => setCurrentGender(gender)}
        />
    )
}
