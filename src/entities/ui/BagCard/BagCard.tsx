import React from 'react'
import styles from 'entities/ui/BagCard/BagCard.module.scss'
import { SlotsCard } from 'shared/ui/SlotsCard/SlotsCard'
import { InventorySlot } from 'shared/ui/InventorySlot/InventorySlot'
import { Props } from 'entities/ui/BagCard/BagCard.typings'

export const BagCard: React.FC<Props> = ({ count = 28 }) => {
    const arr = [...Array(count)].map((x, i) => i)

    return (
        <SlotsCard title="Сумка" subTitle="12,3 / 15кг.">
            <div className={styles.slots}>
                {arr.map((el) => {
                    return (
                        <div key={el} className={styles.slotWrapper}>
                            <InventorySlot />
                        </div>
                    )
                })}
            </div>
        </SlotsCard>
    )
}
