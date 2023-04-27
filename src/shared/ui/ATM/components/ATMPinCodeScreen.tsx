import React/*, {useState, KeyboardEvent}*/ from 'react'
//import {Props} from './ATMPinCodeScreen.typings'
import stylesBase from './ATMPinCodeScreen.module.scss'
import classNames from 'classnames'

const ATMPinCodeScreen = (/* props:Props */) =>{
    return(
        <div className={stylesBase.cardShape}>
            <div id = 'pinCodeField' className={stylesBase.pinCodeField} /*onKeyUp={() => keyDownHandler()}*/>
                <div id='firstLetter' className={classNames(stylesBase.pinCodeFieldChar, stylesBase.pinChar)}>1</div>
                <div className={classNames(stylesBase.pinCodeFieldChar, stylesBase.pinShape)}></div>
                <div className={classNames(stylesBase.pinCodeFieldChar, stylesBase.pinShape)}></div>
                <div className={classNames(stylesBase.pinCodeFieldChar, stylesBase.pinShape)}></div>
            </div>
            <div className={stylesBase.screenAlert}>
                <div className={stylesBase.screenAlertText}>Для отказа операции нажмите кнопку "Завершить обслуживание"</div>
            </div>
        </div>
    )
}

export default ATMPinCodeScreen;