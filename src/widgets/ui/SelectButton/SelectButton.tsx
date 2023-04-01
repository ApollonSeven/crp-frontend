import React from 'react'
import styles from './SelectButton.module.css'
import { SelectButtonProps } from './SelectButton.typings'

const SelectButton: React.FC<SelectButtonProps> = ({ onChange}) => {
    return (
        <div className={styles.div1}>
        <button onClick={onChange}> Вход в игру </button>
        </div>
    )
    }
export default SelectButton