import React from 'react'
import styles from './WithdrawalCashScreen.module.scss'
import AcceptButton from '../components/AcceptButton'
//import { Props } from './ATMWithdrawalCash.typings'

const WithdrawalCashScreen = () => {
    return (
        <div className={styles.cardShape}>
            <div className={styles.title}>Выберите нужную сумму</div>
            <div className={styles.mainGrid}>
                <div className={styles.withdrawalValue}>100$</div>
                <div className={styles.withdrawalValue}>500$</div>
                <div className={styles.withdrawalValue}>1 000$</div>
                <div className={styles.withdrawalValue}>3 000$</div>
                <div className={styles.withdrawalValue}>5 000$</div>
                <div className={styles.withdrawalValue}>10 000$</div>
                <div className={styles.otherValue}>Другая сумма</div>
                <div>
                    <input type='text' placeholder='Введите другую сумму' className={styles.input}/>
                </div>
                <div><AcceptButton title='Снять деньги'/></div>
            </div>
        </div>
    )
}

export default WithdrawalCashScreen