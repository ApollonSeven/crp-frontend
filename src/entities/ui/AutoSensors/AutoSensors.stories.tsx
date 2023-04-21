import { Meta, Story } from '@storybook/react'
import React from 'react'
import { AutoSensors } from 'entities/ui/AutoSensors/AutoSensors'
import { Props } from 'entities/ui/AutoSensors/AutoSensors.typings'

export default {
    title: 'entities/AutoSensors',
    component: AutoSensors,
    parameters: {
        backgrounds: {
            default: 'dark',
        },
    },
    args: {
        speed: 20,
        maxSpeed: 300,
        fuel: 3.5,
        maxFuel: 30,
        rotations: 60,
        maxRotations: 200,
        transmission: '3',
        turnSignals: {
            isLeftOn: true,
            isRightOn: false,
        },
        modes: {
            hasSportMode: true,
            isSportMode: true,
            hasLaunchControl: true,
            isLaunchControl: false,
        },
        sensors: {
            isEngineOn: true,
            isEmergencyOn: false,
            isHeadlightsOn: false,
            isDoorOpen: false,
            isAbsOn: true,
            isArsOn: false,
            isEspOn: false,
        },
    },
} as Meta<Props>

export const Default: Story<Props> = (args) => <AutoSensors {...args} />
