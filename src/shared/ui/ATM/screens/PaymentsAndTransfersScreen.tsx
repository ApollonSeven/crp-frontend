import React from 'react'
import styles from './PaymentsAndTransfersScreen.module.scss'
import NavButton from '../components/NavButton'
import transfersPic from '../assets/transfersPic.svg'
import paymentsPic from '../assets/paymentsPic.svg'
import { Screen } from '../ATM.config'

const PaymentsAndTransfers = ({ onSelect }:any) => {

    const getTransfers = () => {
        onSelect(Screen.Transfer)
    }

    return (
        <div className={styles.cardShape}>
            <div className={styles.mainInfo}>
                <NavButton title='Переводы' onSelect={getTransfers} pic={transfersPic}/>
                <NavButton title='Платежи' pic={paymentsPic}/>
            </div>
        </div>
    )
}

export default PaymentsAndTransfers