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
            <div className={styles.names}>
                <span className={styles.titleText}> {`${corpName}`}</span>
                <span className={styles.redTitleText}> {`${subName}`}</span>
            </div>

            <div className={styles.date}>
                {' '}
                <span>{'Срок действия:'} </span>{' '}
                <span className={styles.dateText}>{`${effectiveDate}`} </span>{' '}
            </div>
            <div className={styles.info}>
                <div className={styles.infoBlock}>
                    {' '}
                    <span>{'Имя:'} </span>{' '}
                    <span className={styles.text}>
                        {`${firstName}`} {`${lastName}`}{' '}
                    </span>{' '}
                </div>
                <div className={styles.infoBlock}>
                    {' '}
                    <span>{'ID:'} </span>{' '}
                    <span className={styles.text}>{`${id}`} </span>{' '}
                </div>
            </div>

            <div className={styles.busCard}>
                <div className={styles.busCardText}>
                    <div className={styles.busBlock}>
                        {' '}
                        <span>{'Получено в:'} </span>{' '}
                        <span className={styles.text}>
                            {`${givenAddress}`}{' '}
                        </span>{' '}
                    </div>
                    <div className={styles.busBlock}>
                        {' '}
                        <span>{'Телефон:'} </span>{' '}
                        <span className={styles.text}>{`${phoneNumber}`} </span>{' '}
                    </div>
                    <div className={styles.busBlock}>
                        {' '}
                        <span>{'Медицинская группа:'} </span>{' '}
                        <span className={styles.text}>{`${medGroup}`} </span>{' '}
                    </div>
                </div>
            </div>
            <div className={styles.cardIcon}></div>
            <div className={styles.rectangle}></div>
            <div className={styles.rectangle2}></div>
        </div>
    )
}

export default MedCard
