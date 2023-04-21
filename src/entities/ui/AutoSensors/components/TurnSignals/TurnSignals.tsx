import React from 'react'
import styles from './TurnSignals.module.scss'
import { TurnLeft } from 'shared/icons/TurnLeft'
import { TurnRight } from 'shared/icons/TurnRight'

export interface ITurnSignals {
    isLeftOn: boolean
    isRightOn: boolean
}

export const TurnSignals: React.FC<ITurnSignals> = ({
    isLeftOn,
    isRightOn,
}) => {
    return (
        <div className={styles.container}>
            <TurnLeft
                className={styles.icon}
                color={isLeftOn ? '#92D925' : '#A29A98'}
            />
            <TurnRight
                className={styles.icon}
                color={isRightOn ? '#92D925' : '#A29A98'}
            />
        </div>
    )
}
