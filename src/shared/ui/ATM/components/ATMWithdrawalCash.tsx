import React from 'react'
import stylesBase from './ATMWithdrawalCash.module.scss'
import ATMAcceptButton from './ATMAcceptButton'
//import { Props } from './ATMWithdrawalCash.typings'

const ATMWithdrawalCash = () => {
    return (
        <div className={stylesBase.cardShape}>
            <div className={stylesBase.title}>Выберите нужную сумму</div>
            <div className={stylesBase.mainGrid}>
                <div className={stylesBase.withdrawalValue}>100$</div>
                <div className={stylesBase.withdrawalValue}>500$</div>
                <div className={stylesBase.withdrawalValue}>1 000$</div>
                <div className={stylesBase.withdrawalValue}>3 000$</div>
                <div className={stylesBase.withdrawalValue}>5 000$</div>
                <div className={stylesBase.withdrawalValue}>10 000$</div>
                <div className={stylesBase.otherValue}>Другая сумма</div>
                <div>
                    <input type='text' placeholder='Введите другую сумму' className={stylesBase.input}/>
                </div>
                <div><ATMAcceptButton title='Снять деньги'/></div>
            </div>
        </div>
    )
}

export default ATMWithdrawalCash