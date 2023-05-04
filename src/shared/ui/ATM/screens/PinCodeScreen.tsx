import React, {useState} from 'react'
import styles from './PinCodeScreen.module.scss'

const PinCodeScreen = () =>{

    const [pin, setPin] = useState('')
    const [pinMask, setPinMask] = useState(pin)
    const [isError, setIsError] = useState(false)
    
    const sendPin = (pin:string) => {
        setIsError(pin == '0000' ? false : true) //тут будет отправка на бэкэнд
        setPin('')
    }

    const getPinMask = (pin:string) => {
        setPinMask(pin + '\u00b7'.repeat(4 - pin.length))
    }

    const getCharValidation = (char:string) => {
        const regexp = /[0-9]/g
        return regexp.test(char)
    }

    const handlePinChange = (event:any) => {
        if (getCharValidation(event.target.value[event.target.value.length - 1])) {
            setPin(pin + event.target.value[event.target.value.length - 1])
            getPinMask(pin)
            pin.length == 4 && sendPin(pin)
        } else {
            setPin('')
            getPinMask
        }
    }

    return(
        <div className={styles.cardShape}>
            <input
                id='input'
                className={styles.pinCodeInput}
                autoFocus
                type='text'
                maxLength={4}
                placeholder='&#183;&#183;&#183;&#183;'//\u00B7\u00B7\u00B7\u00B7
                onChange ={handlePinChange}
                value={pinMask}
                />
            <div className={(isError? `${styles.screenAlertError}` : `${styles.screenAlert}`)}>
                <div className={(isError? `${styles.screenAlertTextError}` : `${styles.screenAlertText}`)}>{isError? 'Пароль введен неверно' : 'Для отказа операции нажмите кнопку "Завершить обслуживание'}</div>
            </div>
        </div>
    )
}


export default PinCodeScreen;