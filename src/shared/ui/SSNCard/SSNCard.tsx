import React from 'react'
import styles from './SSNCard.module.css'
import { SSNCardProps } from './SSNCard.typings'
const SSNCard: React.FC<SSNCardProps> = ({
    docNumber,
    fullName,
    signature,
    givenDate,
}) => {
    return (
        <div className={styles.container}>
            <div className={styles.info}>
            <span className={styles.text}>{`${docNumber}`}</span>

                <div className={styles.break}></div>

                <span
                className={styles.text}
                    >{fullName}</span> 
  
            </div>
            <div className={styles.signature}>
                <img src={signature} />
            </div>
            <div className={styles.givenDate}>{givenDate}</div>
        </div>
    )
}

export default SSNCard
