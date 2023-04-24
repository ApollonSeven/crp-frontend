import React from 'react'
import styles from './Tachometer.module.scss'
import { TachometerSvg } from 'entities/ui/AutoSensors/components/TachometerSvg/TachometerSvg'

interface Props {
    rotations: number
    maxRotations: number
}

export const Tachometer: React.FC<Props> = ({ rotations, maxRotations }) => {
    return (
        <div className={styles.container}>
            <TachometerSvg
                percent={rotations / maxRotations}
                className={styles.tachometer}
            />
            <div className={styles.rotations}>{rotations}</div>
            <div className={styles.subTitle}>x 1000 RPM</div>
        </div>
    )
}
