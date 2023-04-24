import React from 'react'
import styles from './TopSensors.module.scss'
import { Esp } from 'shared/icons/Esp'
import { Abs } from 'shared/icons/Abs'
import { Ars } from 'shared/icons/Ars'

export interface ITopSensors {
    isArsOn: boolean
    isAbsOn: boolean
    isEspOn: boolean
}

export const TopSensors: React.FC<ITopSensors> = ({
    isAbsOn,
    isArsOn,
    isEspOn,
}) => {
    return (
        <div className={styles.container}>
            <Esp
                className={styles.esp}
                color={isEspOn ? '#DF9733' : '#A29A98'}
            />
            <Abs
                className={styles.abs}
                color={isAbsOn ? '#DF9733' : '#A29A98'}
            />
            <Ars
                className={styles.ars}
                color={isArsOn ? '#DF9733' : '#A29A98'}
            />
        </div>
    )
}
