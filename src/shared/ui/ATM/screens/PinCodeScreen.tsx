import React, {useState} from 'react'
import styles from './PinCodeScreen.module.scss'
import classNames from 'classnames'

const PinCodeScreen = () =>{

    const [isError] = useState(true)

    return(
        <div className={styles.cardShape}>
            <div id = 'pinCodeField' className={styles.pinCodeField}>
                <div id='firstLetter' className={classNames(styles.pinCodeFieldChar, styles.pinChar)}>1</div>
                <div className={classNames(styles.pinCodeFieldChar, styles.pinShape)}></div>
                <div className={classNames(styles.pinCodeFieldChar, styles.pinShape)}></div>
                <div className={classNames(styles.pinCodeFieldChar, styles.pinShape)}></div>
            </div>
            <div className={(isError? `${styles.screenAlertError}` : `${styles.screenAlert}`)}>
                <div className={(isError? `${styles.screenAlertTextError}` : `${styles.screenAlertText}`)}>{isError? 'Пароль введен неверно' : 'Для отказа операции нажмите кнопку "Завершить обслуживание'}</div>
            </div>
        </div>
    )
}

export default PinCodeScreen;