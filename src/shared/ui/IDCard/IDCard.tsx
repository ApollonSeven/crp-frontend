/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import styles from './IDCard.module.css'

interface IDCardProps {
    state: string
    id: string
    expireDate: string
    firstName: string
    lastName: string
    street: string
    birthDate: string
    photoURL: string
    donor: boolean
    sex?: 'M' | 'F'
    height: string
    hair?: string
    weight: number
    eyes?: string
    issued: string
    DocDiscriminator: string
    signature: string
}

//const css = mergeStyles(styles, styles)
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
    DocDiscriminator,
    signature,
    state,
}) => {
    return (
        <div className={styles['idcard-container']}>
            <div className={styles.state}>{`${state}`} </div>

            <div className={styles.info}>
                <div className={styles.idbox}>
                    <span className={styles.bluetext}>{'ID'}</span>
                    <span className={styles.id}>{`${id}`}</span>
                </div>
                <div className={styles.expbox}>
                    <span className={styles.bluetext}>{'EXP'}</span>
                    <span className={styles.redtext}>{`${expireDate}`}</span>
                </div>
                <div>
                    <span className={styles.bluetext}>{'LN'}</span>
                    <span className={styles.text}>{`${lastName}`}</span>
                </div>
                <div>
                    <span className={styles.bluetext}>{'FN'}</span>
                    <span className={styles.text}>{`${firstName}`}</span>
                </div>
                <div>
                    <span className={styles.text}>{`${street}`}</span>
                </div>
                <div>
                    <span className={styles.bluetext}>{'DOB'}</span>
                    <span className={styles.redtext}>{`${birthDate}`}</span>
                </div>
            </div>

            <div className={styles.photoURL}>
                <img src={photoURL} />
            </div>

            <div className={styles.bwphoto}>
                <img src={photoURL} />
            </div>

            <div className={styles.signature}>
                <img src={signature} />
            </div>

            <div className={styles.chars}>
                <div>
                    <span className={styles.bluetext}>{'SEX'}</span>
                    <span className={styles.textsmall}>{`${sex}`}</span>
                </div>

                <div>
                    <span className={styles.bluetext}>{'HGT'}</span>
                    <span className={styles.textsmall}>{`${height}`}</span>
                </div>

                <div>
                    <span className={styles.bluetext}>{'HAIR'}</span>
                    <span className={styles.textsmall}>{`${hair}`}</span>
                </div>

                <div>
                    <span className={styles.bluetext}>{'WGT'}</span>
                    <span className={styles.textsmall}>{`${weight}`}</span>
                </div>

                <div>
                    <span className={styles.bluetext}>{'EYES'}</span>
                    <span className={styles.textsmall}>{`${eyes}`}</span>
                </div>
            </div>
            <div className={styles.ddbox}>
                <span className={styles.bluetext}>{'DD'}</span>
                <span
                    className={styles.textsmall}
                >{`${DocDiscriminator}`}</span>
            </div>
            <div className={styles.issbox}>
                <span className={styles.bluetext}>{'ISS'}</span>{' '}
                <span className={styles.textsmall}>{`${issued}`}</span>
            </div>
        </div>
    )
}

export default IDCard
