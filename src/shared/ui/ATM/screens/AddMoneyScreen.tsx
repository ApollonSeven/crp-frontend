import React, {useState, ChangeEvent, useEffect} from 'react'
import styles from './AddMoneyScreen.module.scss'
import AcceptButton from '../components/AcceptButton'

const AddMoneyScreen = (): JSX.Element => {

    const [inputValue, setInputValue] = useState('')
    const [gas, setGas] = useState<number>(0)
    const [toAdding, setToAdding] = useState(0)
    const [maskInput, setMaskInput] = useState('')
    const [maskGas, setMaskGas] = useState('$')
    const [maskToAdding, setMaskToAdding] = useState('$')

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newValue = event.currentTarget.value.replace(/\D/g, ''); // Фильтрация только цифр
        setInputValue(() => newValue);
    }

    useEffect(() => {
        console.log(inputValue)
        setGas(Math.floor(Number(inputValue) * 0.05))
        setToAdding(Number(inputValue) + gas)
        const formatInput = `${Number(inputValue).toLocaleString()} $`
        const formatGas = `${Number(gas).toLocaleString()} $`
        const formatToAdding = `${Number(toAdding).toLocaleString()} $`
        setMaskInput(formatInput)
        setMaskGas(formatGas)
        setMaskToAdding(formatToAdding)
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
                <div className={styles.mask}>{maskInput}</div>
                <div className={styles.info}>
                    <div>
                        <div>Комиссия:</div>
                        <div>{maskGas}</div>
                    </div>
                    <div>
                        <div>К пополнению:</div>
                        <div>{maskToAdding}</div>
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