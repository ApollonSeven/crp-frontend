import React from 'react'
import styles from 'shared/ui/InputButton/InputButton.module.scss'
import { Props } from 'shared/ui/InputButton/InputButton.typings'

export const InputButton: React.FC<Props> = ({ onClick, Icon }) => {
    return (
        <div className={styles.container} onClick={onClick}>
            <Icon className={styles.icon} />
        </div>
    )
}
