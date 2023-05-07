import React, {useState, useEffect} from 'react'
import styles from './PinCodeScreen.module.scss'

const PinCodeScreen = () =>{

    const [pin, setPin] = useState('')
    const [isError, setIsError] = useState(false)
    const [pinMask, setPinMask] = useState('')
    
    const handlePinChange = (event:any) => {
        const newPin = event.currentTarget.value.replace(/\D/g, ''); // Фильтрация только цифр
        setPin(() => newPin)
    }

    useEffect(() =>{
        console.log(pin)
        setPinMask(pin + '\u00b7'.repeat(4 - pin.length))
        const sendPin = () => {
            setIsError(pin == '0000' ? false : true) //тут будет отправка на бэкэнд
            setPin('')
        }
        pin.length == 4 && sendPin()
    })

    return(
        <div className={styles.cardShape} >
            <input
                id='input'
                className={styles.pinCodeInput}
                autoFocus
                type='text'
                maxLength={4}
                placeholder='&#183;&#183;&#183;&#183;'//\u00B7\u00B7\u00B7\u00B7
                onChange ={handlePinChange}
                value={pin}
                />
                <div className={styles.mask}>{pinMask}</div>
            <div className={(isError? `${styles.screenAlertError}` : `${styles.screenAlert}`)}>
                <div className={(isError? `${styles.screenAlertTextError}` : `${styles.screenAlertText}`)}>{isError? 'Пароль введен неверно' : 'Для отказа операции нажмите кнопку "Завершить обслуживание'}</div>
            </div>
        </div>
    )
}


export default PinCodeScreen;