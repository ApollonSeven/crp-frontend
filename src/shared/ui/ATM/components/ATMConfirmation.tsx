import React from 'react'
import stylesBase from './ATMConfirmation.module.scss'
import vector9 from '../assets/Vector9.svg'
import {Props} from './ATMConfirmation.typings'

const ATMConfirmation = (props:Props) => {
    return (
        <div className={stylesBase.cardShape}>
            <div className={stylesBase.mainInfo}>
                <img src={vector9}/>
                <div>Вы сняли со счета</div>
                <div>{props.value}</div>
            </div>
        </div>
    )
}

export default ATMConfirmation