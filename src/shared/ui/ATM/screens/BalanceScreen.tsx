import React from 'react'
import {Props} from './BalanceScreen.typings'
import styles from './BalanceScreen.module.scss'

const BalanceScreen = ({balance}:Props) =>{

    return(
        <div className={styles.cardShape}>
            <div className={styles.mainInfo}>
                <div>На Вашем счету:</div>
                <div>{balance} $</div>
            </div>
         </div>
    )
}

export default BalanceScreen;