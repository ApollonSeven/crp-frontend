import React from 'react'
import styles from './MedCard.module.css'
import { MedCardProps } from './MedCard.typings'

const MedCard: React.FC<MedCardProps> = ({
    firstName,
    lastName,
    id,
    effectiveDate,
    givenAddress,
    phoneNumber,
    medGroup,
    corpName,
    subName,
}) => {
    return (
        <div className={styles['container']}>
            <div className={styles.cardIcon}></div>
            <div className={styles.rectangle}></div>
            <div className={styles.rectangle2}></div>
            <div className={styles.names}>
                <span className={styles.bigText}> {`${corpName}`}</span>
                <span className={styles.bigRedText}> {`${subName}`}</span>
            </div>

            <div className={styles.date}>
                {' '}
                <span>{'Срок действия:'} </span>{' '}
                <span className={styles.text}>{`${effectiveDate}`} </span>{' '}
            </div>
            <div className={styles.info}>
                <span>{'Имя:'} </span>{' '}
                <span className={styles.text}>
                    {`${firstName}`} {`${lastName}`}{' '}
                </span>
                <span>{'ID:'} </span>{' '}
                <span className={styles.text}>{`${id}`} </span>
            </div>

            <div className={styles.busCard}>
                <div className={styles.busCardText}>
                    <div>
                        {' '}
                        <span>{'Получено в:'} </span>{' '}
                        <span className={styles.text}>
                            {`${givenAddress}`}{' '}
                        </span>{' '}
                    </div>
                    <div>
                        {' '}
                        <span>{'Телефон:'} </span>{' '}
                        <span className={styles.text}>{`${phoneNumber}`} </span>{' '}
                    </div>
                    <div>
                        {' '}
                        <span>{'Медицинская группа:'} </span>{' '}
                        <span className={styles.text}>{`${medGroup}`} </span>{' '}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MedCard
