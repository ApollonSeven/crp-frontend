import React, {useState} from 'react'
import stylesBase from './ATMPinCodeScreen.module.scss'
import classNames from 'classnames'

const ATMPinCodeScreen = () =>{

    const [isError] = useState(true)

    return(
        <div className={stylesBase.cardShape}>
            <div id = 'pinCodeField' className={stylesBase.pinCodeField} /*onKeyUp={() => keyDownHandler()}*/>
                <div id='firstLetter' className={classNames(stylesBase.pinCodeFieldChar, stylesBase.pinChar)}>1</div>
                <div className={classNames(stylesBase.pinCodeFieldChar, stylesBase.pinShape)}></div>
                <div className={classNames(stylesBase.pinCodeFieldChar, stylesBase.pinShape)}></div>
                <div className={classNames(stylesBase.pinCodeFieldChar, stylesBase.pinShape)}></div>
            </div>
            <div className={(isError? `${stylesBase.screenAlertError}` : `${stylesBase.screenAlert}`)}>
                <div className={(isError? `${stylesBase.screenAlertTextError}` : `${stylesBase.screenAlertText}`)}>{isError? 'Пароль введен неверно' : 'Для отказа операции нажмите кнопку "Завершить обслуживание'}</div>
            </div>
        </div>
    )
}

export default ATMPinCodeScreen;