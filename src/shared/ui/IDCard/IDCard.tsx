import React from 'react'
import styles from './IDCard.module.css'
import { IDCardProps } from './IDCard.typings'
const IDCard: React.FC<IDCardProps> = ({
    expireDate,
    lastName,
    birthDate,
    photoURL,
    firstName,
    id,
    street,
    sex,
    height,
    hair,
    weight,
    eyes,
    issued,
    docDiscriminator,
    signature,
    state,
    donor
}) => {
    return (
        <div className={`${styles.container} ${donor? styles['donor'] : ''}`} > 
            <div className={styles.state}>{state} </div>
            <div className={styles.info}>
                <div className={styles.idBox}>
                    <span className={styles.blueText}>{'ID'}</span>
                    <span className={styles.id}>{id}</span>
                </div>
                <div className={styles.expBox}>
                    <span className={styles.blueText}>{'EXP'}</span>
                    <span className={styles.redText}>{expireDate}</span>
                </div>
                <div>
                    <span className={styles.blueText}>{'LN'}</span>
                    <span className={styles.text}>{lastName}</span>
                </div>
                <div>
                    <span className={styles.blueText}>{'FN'}</span>
                    <span className={styles.text}>{firstName}</span>
                </div>
                <div className={styles.streetBlock}>
                    <span className={styles.text}>{street}</span>
                </div>
                <div>
                    <span className={styles.blueText}>{'DOB'}</span>
                    <span className={styles.redText}>{birthDate}</span>
                </div>
            </div>

            <div className={styles.photoURL}>
                <img src={photoURL} />
            </div>

            <div className={styles.bwPhoto}>
                <img src={photoURL} />
            </div>

            <div className={styles.signature}>
                <img src={signature} />
            </div>

            <div className={styles.chars}>
                <div>
                    <span className={styles.blueText}>{'SEX'}</span>
                    <span className={styles.textSmall}>{sex}</span>
                </div>

                <div>
                    <span className={styles.blueText}>{'HGT'}</span>
                    <span className={styles.textSmall}>{height}</span>
                </div>

                <div>
                    <span className={styles.blueText}>{'HAIR'}</span>
                    <span className={styles.textSmall}>{hair}</span>
                </div>

                <div>
                    <span className={styles.blueText}>{'WGT'}</span>
                    <span className={styles.textSmall}>{weight}</span>
                </div>

                <div>
                    <span className={styles.blueText}>{'EYES'}</span>
                    <span className={styles.textSmall}>{eyes}</span>
                </div>
            </div>
            <div className={styles.ddBox}>
                <span className={styles.blueText}>{'DD'}</span>
                <span className={styles.textSmall}>{docDiscriminator}</span>
            </div>
            <div className={styles.grayText}>
                {birthDate.split('/').join('')}
            </div>

            <div className={styles.issBox}>
                <span className={styles.blueText}>{'ISS'}</span>{' '}
                <span className={styles.textSmall}>{issued}</span>
            </div>
        </div>
    )
}

export default IDCard
