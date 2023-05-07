import React, {useState, ChangeEvent, useEffect} from 'react'
import styles from './AddMoneyScreen.module.scss'
//import { Props } from './AddMoneyScreen.typings'
import AcceptButton from '../components/AcceptButton'

const AddMoneyScreen = (/*props: Props*/): JSX.Element => {

    const [inputValue, setInputValue] = useState('')
    const [gas, setGas] = useState<number>(0)
    const [toAdding, setToAdding] = useState(0)

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newValue = event.currentTarget.value.replace(/\D/g, ''); // Фильтрация только цифр
        setInputValue(() => newValue);
    }

    useEffect(() => {
        console.log(inputValue)
        setGas(Number(inputValue) * 0.05)
        setToAdding(Number(inputValue) + gas)
    })

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
                <div className={styles.info}>
                    <div>
                        <div>Комиссия:</div>
                        <div>{gas}</div>
                    </div>
                    <div>
                        <div>К пополнению:</div>
                        <div>{toAdding/*props.toAdding*/}</div>
                    </div>
                </div>
            </div>
            <div className={styles.acceptButton}>
                <AcceptButton title='Пополнить' />
            </div>
        </div>
    )
}

export default AddMoneyScreen