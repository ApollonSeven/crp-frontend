import React from 'react'
import { PlayerSlots } from 'entities/ui/PlayerSlots/PlayerSlots'
import { InventoryCapacity } from 'entities/ui/InventoryCapacity/InventoryCapacity'
import styles from 'widgets/ui/FullInventory/FullInventory.module.scss'
import { InventoryCard } from 'entities/ui/InventoryCard/InventoryCard'
import { WeaponCard } from 'entities/ui/WeaponCard/WeaponCard'
import { BagCard } from 'entities/ui/BagCard/BagCard'
import { preview } from 'entities/ui/PlayerSlots/__mocks__/preview'

export const FullInventory: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.leftCol}>
                <PlayerSlots data={preview.data} />
                <InventoryCapacity value={15} maxValue={20} />
            </div>
            <div className={styles.rightCol}>
                <div className={styles.inventoryAndWeapon}>
                    <InventoryCard />
                    <WeaponCard />
                </div>
                <div>
                    <BagCard />
                </div>
            </div>
        </div>
    )
}
