import React from 'react'
import styles from 'shared/ui/ProgressBar/ProgressBar.module.scss'
import { Props } from 'shared/ui/ProgressBar/ProgressBar.typings'

export const ProgressBar: React.FC<Props> = ({
    value,
    maxValue,
    color = '#ffffff',
    backgroundColor = 'rgba(255, 255, 255, 0.1)',
}) => {
    const progress: number = (value * 100) / maxValue

    return (
        <div className={styles.wrapper} style={{ backgroundColor }}>
            <div
                className={styles.progress}
                style={{ width: `${progress}%`, color }}
            />
        </div>
    )
}
