import React from 'react'
import styles from 'entities/ui/WeaponSlots/WeaponSlots.module.scss'
import { WeaponSlot } from 'shared/ui/WeaponSlot/WeaponSlot'

export const WeaponSlots: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <WeaponSlot number={1} />
            <WeaponSlot number={2} />
            <WeaponSlot number={3} />
            <WeaponSlot number={4} />
        </div>
    )
}
