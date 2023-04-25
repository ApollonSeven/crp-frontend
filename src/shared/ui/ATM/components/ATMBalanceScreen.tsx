import React from 'react'
import {Props} from './ATMBalanceScreen.typings'
import stylesBase from './ATMBalanceScreen.module.scss'
import vector6 from '../assets/Vector6.svg'

const ATMBalanceScreen = (props:Props) =>{

    return(
        <div className={stylesBase.cardShape}>
            <div className={stylesBase.menuTitle}>
                <div /* onClick={back()} */>
                    <img src={vector6}></img>
                </div>
                <div>Баланс</div>
            </div>
            <div className={stylesBase.mainInfo}>
                <div>На Вашем счету:</div>
                <div>{props.balance}</div>
            </div>
         </div>
    )
}

export default ATMBalanceScreen;