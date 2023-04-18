import React from 'react'
import { Tooltip } from 'shared/ui/Tooltip/Tooltip'
import styles from 'entities/ui/InventoryTooltip/InventoryTooltip.module.scss'
import { Props } from 'entities/ui/InventoryTooltip/InventoryTooltip.typings'

export const InventoryTooltip: React.FC<Props> = ({
    children,
    title,
    mainTitle,
    description,
    weight,
    img,
}) => {
    const Content = () => {
        return (
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <div className={styles.imageBlock}>
                        <img src={img} className={styles.image} />
                    </div>
                    <div>
                        <div className={styles.title}>{title}</div>
                        <div className={styles.mainTitle}>{mainTitle}</div>
                    </div>
                </div>
                <div className={styles.description}>{description}</div>
                <hr className={styles.divider} />
                <div className={styles.weightBlock}>
                    <div>Вес</div>
                    <div>{weight}&nbsp;oz</div>
                </div>
            </div>
        )
    }

    return (
        <Tooltip overlay={<Content />} placement="bottomRight">
            {children}
        </Tooltip>
    )
}
