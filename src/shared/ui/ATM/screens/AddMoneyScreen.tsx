import React, {useState} from 'react'
import styles from './AddMoneyScreen.module.scss'
import { Props } from './AddMoneyScreen.typings'
import AcceptButton from '../components/AcceptButton'

const AddMoneyScreen = (props: Props) => {

    const [inputValue, setInputValue] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const numericValue = event.target.value.replace(/\D/g, ''); // Фильтрация только цифр
        setInputValue(numericValue);
        console.log(inputValue)
    };

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
                        <div>{props.gas}</div>
                    </div>
                    <div>
                        <div>К пополнению:</div>
                        <div>{props.toAdding}</div>
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