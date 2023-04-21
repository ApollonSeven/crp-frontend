import React from 'react'
import { Engine } from 'shared/icons/Engine'
import { EmergencySignal } from 'shared/icons/EmergencySignal'
import { Headlights } from 'shared/icons/Headlights'
import { AutoDoor } from 'shared/icons/AutoDoor'
import { FuelStation } from 'shared/icons/FuelStation'
import styles from 'entities/ui/AutoSensors/components/BottomSensors/BottomSensors.module.scss'
import classNames from 'classnames'

export interface IBottomSensors {
    isEngineOn: boolean
    isEmergencyOn: boolean
    isHeadlightsOn: boolean
    isDoorOpen: boolean
    fuelColor: string
}

export const BottomSensors: React.FC<IBottomSensors> = ({
    isDoorOpen,
    isEmergencyOn,
    isEngineOn,
    isHeadlightsOn,
    fuelColor,
}) => {
    return (
        <div className={styles.container}>
            <Engine
                className={classNames(
                    styles.iconL,
                    isEngineOn && styles.active
                )}
            />
            <EmergencySignal
                className={classNames(
                    styles.iconL,
                    isEmergencyOn && styles.active
                )}
            />
            <Headlights
                className={classNames(
                    styles.iconM,
                    isHeadlightsOn && styles.active
                )}
            />
            <AutoDoor
                className={classNames(
                    styles.iconM,
                    isDoorOpen && styles.active
                )}
            />
            <FuelStation className={styles.iconM} color={fuelColor} />
        </div>
    )
}
