import React from 'react'
import styles from './PaymentsAndTransfersScreen.module.scss'
import NavButton from '../components/NavButton'
import transfersPic from '../assets/transfersPic.svg'
import paymentsPic from '../assets/paymentsPic.svg'

const PaymentsAndTransfers = () => {
    return (
        <div className={styles.cardShape}>
            <div className={styles.mainInfo}>
                <NavButton title='Переводы' pic={transfersPic}/>
                <NavButton title='Платежи' pic={paymentsPic}/>
            </div>
        </div>
    )
}

export default PaymentsAndTransfers