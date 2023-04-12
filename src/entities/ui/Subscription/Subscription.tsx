import React from 'react'
import styles from './Subscription.module.scss'
import { SubscriptionProps } from './Subscription.typings'


const Subscription: React.FC<SubscriptionProps> = ({ date
    }) => {
    return (
        <div className={styles.container}>
           <div className={styles.box}>Срок действия премиум подписки:
           <div> {date} </div>
           </div>
        </div>
    )
    }
export default Subscription