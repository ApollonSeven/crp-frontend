import React from 'react'
import { Props } from 'shared/ui/InventorySlot/InventorySlot.typings'
import styles from 'shared/ui/InventorySlot/InventorySlot.module.scss'

export const InventorySlot: React.FC<Props> = ({ Icon, subTitle, image }) => {
    return (
        <div className={styles.wrapper}>
            {Icon && !image && <Icon className={styles.icon} />}
            {!!image && <img src={image} className={styles.image} />}
            <span className={styles.subTitle}>{subTitle}</span>
        </div>
    )
}
