import React from 'react'
import stylesBase from './ATMAddMoneyScreen.module.scss'
import { Props } from './ATMAddMoneyScreen.typings'
import ATMAcceptButton from './ATMAcceptButton'

const ATMAddMoneyScreen = (props: Props) => {
    return (
        <div className={stylesBase.cardShape}>
            <div className={stylesBase.title}>Введите сумму:</div>
            <div className={stylesBase.mainInfo}>
                <div className={stylesBase.value}>{props.value}</div>
                <div className={stylesBase.info}>
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
            <div className={stylesBase.acceptButton}>
                <ATMAcceptButton title='Пополнить' />
            </div>
        </div>
    )
}

export default ATMAddMoneyScreen