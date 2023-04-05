/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import styles from './PlayerInfo.module.css'
import { PlayerInfoProps } from './PlayerInfo.typings'
import { Wallet } from 'shared/icons/generated'
import { Card } from 'shared/icons/generated'

const PlayerInfo: React.FC<PlayerInfoProps> = ({ fullName,
    birthDate,
    address,
    workPlace,
    occupation,
    age,
    cash,
    card
    }) => {
    return (
        <div className={styles.container}>
           
            <div className={styles.block1}>
             
            <div className={styles.names}> <span className={styles.yellow}>{fullName}</span> <span className={styles.age}>{age}</span> </div>
            <div className={styles.space}> <span> Дата рождения: </span> <span className={styles.desc}> {birthDate} </span> </div>
            <div className={styles.space}> <span> Адрес: </span>  <span className={styles.desc}> {address} </span> </div>
            <div className={styles.space}> <span> Место работы: </span>  <span className={styles.desc}> {workPlace} </span> </div>
            <div className={styles.space}> <span> Должность: </span>  <span className={styles.desc}> {occupation} </span> </div>
    
            <div className={styles.earnings}> <span>Средства:</span>  
             <span className={styles.card}>{card}</span>  <span className={styles.cash}>{cash}</span> </div>
           
            </div>  
        </div>
    )
    }
export default PlayerInfo