import React, {useState, ChangeEvent} from 'react'
import styles from './AddMoneyScreen.module.scss'
import AcceptButton from '../components/AcceptButton'
import {addMoney} from '../modules/addMoney'
import { Screen } from '../ATM.config'

const AddMoneyScreen = ({ onSelect }: any): JSX.Element => {

    const [inputValue, setInputValue] = useState('')
    const gas = Math.floor(Number(inputValue) * 0.05)
    const toAdding = Number(inputValue) + gas
    const maskGas = Number(gas).toLocaleString()
    const maskInput = Number(inputValue).toLocaleString()
    const maskToAdding = Number(toAdding).toLocaleString()

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newValue = event.currentTarget.value.replace(/\D/g, ''); // Фильтрация только цифр
        setInputValue(newValue);
    }

    const addingMoney = () =>{
        addMoney(Number(inputValue))
        onSelect(Screen.Confirmation)
        
    }

    return (
        <div className={styles.cardShape}>
            <div className={styles.title}>Введите сумму:</div>
            <div className={styles.mainInfo}>
                <input
                    type='text'
                    autoFocus
                    value={inputValue}
                    className={styles.value}
                    onChange={handleChange}
                />
                <div className={styles.mask}>{maskInput} $</div>
                <div className={styles.info}>
                    <div>
                        <div>Комиссия:</div>
                        <div>{maskGas} $</div>
                    </div>
                    <div>
                        <div>К пополнению:</div>
                        <div>{maskToAdding} $</div>
                    </div>
                </div>
            </div>
            <div className={styles.acceptButton}>
                <AcceptButton title='Пополнить' onSelect={addingMoney}/>
            </div>
        </div>
    )
}

export default AddMoneyScreen