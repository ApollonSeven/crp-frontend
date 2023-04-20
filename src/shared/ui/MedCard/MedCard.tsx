import React from 'react'
import styles from './MedCard.module.scss'
import { MedCardProps } from './MedCard.typings'

const MedCard: React.FC<MedCardProps> = ({
    fullName,
    id,
    effectiveDate,
    givenAddress,
    phoneNumber,
    medGroup,
    corpName,
    subName,
}) => {
    return (
        <div className={styles.container}>
            <div className={styles.names}>
                <span className={styles.titleText}> {corpName}</span>
                <span className={styles.redTitleText}> {subName}</span>
            </div>

            <div className={styles.date}>
                Срок действия:&nbsp;
                <span className={styles.dateText}>{effectiveDate} </span>
            </div>
            <div className={styles.info}>
                <div className={styles.infoBlock}>
                    Имя:&nbsp;
                    <span className={styles.text}>{fullName}</span>
                </div>
                <div className={styles.idBlock}>
                    ID:&nbsp;
                    <span className={styles.text}>{id} </span>
                </div>
            </div>

            <div className={styles.busCard}>
                <div className={styles.busCardText}>
                    <div className={styles.busBlock}>
                        Получено в:&nbsp;
                        <span className={styles.text}>{givenAddress}</span>
                    </div>
                    <div className={styles.busBlock}>
                        Телефон:&nbsp;
                        <span className={styles.text}>{phoneNumber} </span>
                    </div>
                    <div className={styles.busBlock}>
                        Медицинская группа:&nbsp;
                        <span className={styles.text}>{medGroup} </span>
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
