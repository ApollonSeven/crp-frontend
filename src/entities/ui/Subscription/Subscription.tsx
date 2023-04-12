import React from 'react'
import styles from './Subscription.module.scss'
import { SubscriptionProps } from './Subscription.typings'


const Subscription: React.FC<SubscriptionProps> = ({ date
    }) => {
    return (
        <div className={styles.container}>
           <div className={styles.box}>Срок действия премиум подписки:
           
           </div>
           <div className={styles.date}> {date} </div>
        </div>
    )
    }
export default Subscription