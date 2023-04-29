import React from 'react'
import {Props} from './BalanceScreen.typings'
import styles from './BalanceScreen.module.scss'

const BalanceScreen = (props:Props) =>{

    return(
        <div className={styles.cardShape}>
            <div className={styles.mainInfo}>
                <div>На Вашем счету:</div>
                <div>{props.balance}</div>
            </div>
         </div>
    )
}

export default BalanceScreen;