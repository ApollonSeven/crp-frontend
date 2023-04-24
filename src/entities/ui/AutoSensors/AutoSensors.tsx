import React from 'react'
import styles from 'entities/ui/AutoSensors/AutoSensors.module.scss'
import { FuelGaugeSvg } from 'entities/ui/AutoSensors/components/FuelGaugeSvg/FuelGaugeSvg'
import { SpeedometerSvg } from 'entities/ui/AutoSensors/components/SpeedometerSvg/SpeedometerSvg'
import { Props } from 'entities/ui/AutoSensors/AutoSensors.typings'
import { BottomSensors } from './components/BottomSensors/BottomSensors'
import { TopSensors } from 'entities/ui/AutoSensors/components/TopSensors/TopSensors'
import { TurnSignals } from 'entities/ui/AutoSensors/components/TurnSignals/TurnSignals'
import { TransmissionBlock } from 'entities/ui/AutoSensors/components/TransmissionBlock/TransmissionBlock'
import { Tachometer } from 'entities/ui/AutoSensors/components/Tachometer/Tachometer'
import { getProgressColor } from 'shared/utils/getProgressColor'
import { AutoModes } from 'entities/ui/AutoSensors/components/AutoModes/AutoModes'

export const AutoSensors: React.FC<Props> = ({
    speed,
    maxSpeed,
    maxFuel,
    fuel,
    maxRotations,
    rotations,
    transmission,
    turnSignals: { isLeftOn, isRightOn },
    sensors: { isAbsOn, isArsOn, isEspOn, ...bottomSensors },
    modes,
}) => {
    const fuelDiv = fuel / maxFuel
    const fuelColor = getProgressColor(fuelDiv)

    return (
        <div className={styles.container}>
            <FuelGaugeSvg percent={fuelDiv} className={styles.fuelGauge} />
            <div className={styles.tachometer}>
                <Tachometer rotations={rotations} maxRotations={maxRotations} />
            </div>
            <SpeedometerSvg
                percent={speed / maxSpeed}
                className={styles.speedometer}
            />
            <div className={styles.speed}>
                <TopSensors
                    isAbsOn={isAbsOn}
                    isArsOn={isArsOn}
                    isEspOn={isEspOn}
                />
                <div className={styles.speedTitle}>{speed}</div>
                <div className={styles.speedSubtitle}>mph</div>
                <TurnSignals isLeftOn={isLeftOn} isRightOn={isRightOn} />
            </div>
            <div className={styles.mainSensors}>
                <BottomSensors {...bottomSensors} fuelColor={fuelColor} />
            </div>
            <div className={styles.transmission}>
                <TransmissionBlock transmission={transmission} />
            </div>

            <div className={styles.autoModes}>
                <AutoModes {...modes} />
            </div>
        </div>
    )
}
