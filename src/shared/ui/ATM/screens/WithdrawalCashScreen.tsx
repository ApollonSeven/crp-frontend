import React, {useState} from 'react'
import styles from './WithdrawalCashScreen.module.scss'
import AcceptButton from '../components/AcceptButton'
//import { Props } from './ATMWithdrawalCash.typings'

const WithdrawalCashScreen = () => {

    const[keys, setKeys] = useState('')
    const handleKeyDown = (event:any) => {
        setKeys(prevKeys => prevKeys + event.key)
        console.log(keys)
    }

    return (
        <div className={styles.cardShape}>
            <div className={styles.title}>Выберите нужную сумму</div>
            <div className={styles.mainGrid}>
            {[
                {value:'100$'},
                {value:'500$'},
                {value:'1 000$'},
                {value:'3 000$'},
                {value:'5 000$'},
                {value:'10 000$'}].map(button =>(
                    <div key = {button.value} className={styles.withdrawalValue}>{button.value}</div>
                ))}
                <div className={styles.otherValue}>Другая сумма</div>
                <div>
                    <input type='text' placeholder='Введите другую сумму' className={styles.input} onKeyDown={handleKeyDown}/>
                </div>
                <div><AcceptButton title='Снять деньги'/></div>
            </div>
        </div>
    )
}

export default WithdrawalCashScreen