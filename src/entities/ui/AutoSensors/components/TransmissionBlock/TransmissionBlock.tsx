import React from 'react'
import styles from './TransmissionBlock.module.scss'
import { Transmission } from 'shared/icons/Transmission'

interface ITransmissionBlock {
    transmission: string
}

export const TransmissionBlock: React.FC<ITransmissionBlock> = ({
    transmission,
}) => {
    return (
        <div className={styles.container}>
            <Transmission className={styles.icon} color={'#A29A98'} />
            <span className={styles.title}>{transmission}</span>
        </div>
    )
}
