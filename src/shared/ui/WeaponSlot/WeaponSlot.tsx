import React from 'react'
import { Props } from 'shared/ui/WeaponSlot/WeaponSlot.typings'
import styles from 'shared/ui/WeaponSlot/WeaponSlot.module.scss'

export const WeaponSlot: React.FC<Props> = ({ number }) => {
    return (
        <div className={styles.wrapper}>
            <span className={styles.number}>{number}</span>
        </div>
    )
}
