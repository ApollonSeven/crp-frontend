import React from 'react'

import styles from 'entities/ui/InventoryCapacity/InventoryCapacity.module.scss'
import { Props } from 'entities/ui/InventoryCapacity/InventoryCapacity.typings'
import { ProgressBar } from 'shared/ui/ProgressBar/ProgressBar'

export const InventoryCapacity: React.FC<Props> = ({ value, maxValue }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.titles}>
                <span className={styles.title}>Вместимость</span>
                <span className={styles.capacity}>
                    {value}/{maxValue}кг.
                </span>
            </div>
            <div className={styles.progressBar}>
                <ProgressBar value={value} maxValue={maxValue} />
            </div>
        </div>
    )
}
