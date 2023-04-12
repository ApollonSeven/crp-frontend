import React from 'react'
import { SlotsCard } from 'shared/ui/SlotsCard/SlotsCard'
import styles from 'entities/ui/WeaponCard/WeaponCard.module.scss'
import classNames from 'classnames'

export const WeaponCard: React.FC = () => {
    return (
        <SlotsCard title="Оружие" subTitle="12,3 / 15кг.">
            <div className={styles.slots}>
                <div className={classNames(styles.slot, styles.bigSlot)}></div>
                <div className={classNames(styles.slot)}></div>
                <div className={classNames(styles.slot)}></div>
                <div className={classNames(styles.slot)}></div>
            </div>
        </SlotsCard>
    )
}
