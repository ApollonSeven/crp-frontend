import React from 'react'
import stylesBase from './ATMPaymentsAndTransfers.module.scss'
import ATMNavButton from './ATMNavButton'
import vector7 from '../assets/Vector7.svg'
import vector8 from '../assets/Vector8.svg'

const ATMPaymentsAndTransfers = () => {
    return (
        <div className={stylesBase.cardShape}>
            <div className={stylesBase.mainInfo}>
                <ATMNavButton title='Переводы' pic={vector7}/>
                <ATMNavButton title='Платежи' pic={vector8}/>
            </div>
        </div>
    )
}

export default ATMPaymentsAndTransfers