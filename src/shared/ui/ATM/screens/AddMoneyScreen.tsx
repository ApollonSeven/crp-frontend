import React from 'react'
import styles from './AddMoneyScreen.module.scss'
import { Props } from './AddMoneyScreen.typings'
import AcceptButton from '../components/AcceptButton'

const AddMoneyScreen = (props: Props) => {
    return (
        <div className={styles.cardShape}>
            <div className={styles.title}>Введите сумму:</div>
            <div className={styles.mainInfo}>
                <div className={styles.value}>{props.value}</div>
                <div className={styles.info}>
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
            <div className={styles.acceptButton}>
                <AcceptButton title='Пополнить' />
            </div>
        </div>
    )
}

export default AddMoneyScreen