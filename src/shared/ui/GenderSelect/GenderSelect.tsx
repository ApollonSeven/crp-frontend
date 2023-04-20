import React from 'react'
import styles from './GenderSelect.module.scss'
import classNames from 'classnames'
import { Gender, Props } from 'shared/ui/GenderSelect/GenderSelect.typings'
import { Male } from 'shared/icons/Male'
import { Female } from 'shared/icons/Female'

export const GenderSelect: React.FC<Props> = ({ value, onSelect }) => {
    return (
        <div className={styles.container}>
            <div
                className={classNames(value === Gender.male && styles.active)}
                onClick={() => onSelect && onSelect(Gender.male)}
            >
                <Male className={styles.icon} />
            </div>
            <div
                className={classNames(value === Gender.female && styles.active)}
                onClick={() => onSelect && onSelect(Gender.female)}
            >
                <Female className={styles.icon} />
            </div>
        </div>
    )
}
