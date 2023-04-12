import React from 'react'
import styles from 'shared/ui/SlotsCard/SlotsCard.module.scss'
import { Props } from 'shared/ui/SlotsCard/SlotsCard.typings'

export const SlotsCard: React.FC<Props> = ({ title, subTitle, children }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <span className={styles.title}>{title}</span>
                <span className={styles.subTitle}>{subTitle}</span>
            </div>
            <div className={styles.content}>{children}</div>
        </div>
    )
}
