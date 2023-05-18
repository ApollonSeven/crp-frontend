import React from 'react'
import styles from './ConfirmationScreen.module.scss'
import successPic from '../assets/successPic.svg'
import {Props} from './ConfirmationScreen.typings'

const Confirmation = ({message, value}:Props) => {
    return (
        <div className={styles.cardShape}>
            <div className={styles.mainInfo}>
                <img src={successPic}/>
                <div>{message}</div>
                <div>{value}</div>
            </div>
        </div>
    )
}

export default Confirmation