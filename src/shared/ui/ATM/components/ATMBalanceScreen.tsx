import React from 'react'
import {Props} from './ATMBalanceScreen.typings'
import stylesBase from './ATMBalanceScreen.module.scss'

const ATMBalanceScreen = (props:Props) =>{

    return(
        <div className={stylesBase.cardShape}>
            <div className={stylesBase.mainInfo}>
                <div>На Вашем счету:</div>
                <div>{props.balance}</div>
            </div>
         </div>
    )
}

export default ATMBalanceScreen;