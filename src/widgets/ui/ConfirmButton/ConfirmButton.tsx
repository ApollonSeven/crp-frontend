import React from 'react'
import styles from './ConfirmButton.module.css'
import { ConfirmButtonProps } from './ConfirmButton.typings'

const ConfirmButton: React.FC<ConfirmButtonProps> = ({ onChange}) => {
    return (
        <div className={styles.container}>
        <button onClick={onChange}> Да </button>
        <button onClick={onChange}> Нет </button>
        </div>
    )
    }
export default ConfirmButton