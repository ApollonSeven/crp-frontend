import React from 'react'
import styles from './AutoModes.module.scss'
import classNames from 'classnames'

export interface IAutoModes {
    hasSportMode: boolean
    isSportMode: boolean | null
    hasLaunchControl: boolean
    isLaunchControl: boolean | null
}

export const AutoModes: React.FC<IAutoModes> = ({
    hasLaunchControl,
    hasSportMode,
    isLaunchControl,
    isSportMode,
}) => {
    return (
        <div className={styles.container}>
            {hasSportMode && (
                <span className={classNames(isSportMode && styles.active)}>
                    SPORT
                </span>
            )}
            {hasLaunchControl && (
                <span
                    className={classNames(
                        styles.launchControl,
                        isLaunchControl && styles.active
                    )}
                >
                    LAUNCH
                    <br />
                    CONTROL
                </span>
            )}
        </div>
    )
}
