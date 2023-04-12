import React from 'react'
import styles from 'entities/ui/InventoryCard/InventoryCard.module.scss'
import { SlotsCard } from 'shared/ui/SlotsCard/SlotsCard'
import { InventorySlot } from 'shared/ui/InventorySlot/InventorySlot'

export const InventoryCard: React.FC = () => {
    const arr = [...Array(12)].map((x, i) => i)

    return (
        <SlotsCard title="Инвентарь" subTitle="12,3 / 15кг.">
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
