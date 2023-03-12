import React from 'react'
import styles from './SSNCard.module.css'
import { SSNCardProps } from './SSNCard.typings'
const SSNCard: React.FC<SSNCardProps> = ({
    docNumber,
    firstName,
    lastName,
    signature,
    givenDate,
}) => {
    return (
        <div className={styles['container']}>
            <div className={styles.info}>
                <span className={styles.text}>{`${docNumber}`}</span>
                <div>
                    {' '}
                    <span
                        className={styles.text}
                    >{`${firstName}`}</span> &nbsp;{' '}
                    <span className={styles.text}>{`${lastName}`}</span>{' '}
                </div>
                <div className={styles.signature}>
                    <img src={signature} />
                </div>
            </div>
            <div className={styles.givenDate}>
                <span className={styles.text}>{`${givenDate}`}</span>
            </div>
        </div>
    )
}

export default SSNCard
