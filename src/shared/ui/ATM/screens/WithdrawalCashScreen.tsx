import React, {useState, ChangeEvent} from 'react'
import styles from './WithdrawalCashScreen.module.scss'
import AcceptButton from '../components/AcceptButton'
//import { Props } from './ATMWithdrawalCash.typings'

const WithdrawalCashScreen = () => {

    const[value, setValue] = useState('')

    const handleKeyDown = (event:ChangeEvent<HTMLInputElement>) => {
        const newValue = event.currentTarget.value.replace(/\D/g, ''); // Фильтрация только цифр
        setValue(newValue);
    }

    const maskValue = !value ? 'Введите другую сумму' : `${Number(value).toLocaleString()} $`

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
                <div style={{position:'relative'}}>
                    <input
                        type='text'
                        placeholder='Введите другую сумму'
                        className={styles.input}
                        onChange={handleKeyDown}
                        autoFocus
                    />
                    <div className={styles.mask} style = {!value ? {fontSize:12, color: 'rgba(255, 255, 255, 0.5)'}: {}}>{maskValue}</div>
                </div>
                <div><AcceptButton title='Снять деньги'/></div>
            </div>
        </div>
    )
}

export default WithdrawalCashScreen