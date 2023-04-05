import React from 'react'
import styles from './CheckBox.module.css'
import { CheckBoxProps } from './CheckBox.typings'
import { CrossOutline, Key } from 'shared/icons/generated'

const CheckBox: React.FC<CheckBoxProps> = ({ onClick }) => {
    return (
        <div className={styles.container}>
           <button onClick={onClick}> <Key className={styles.key}/></button> 
           <button onClick={onClick}> <CrossOutline className={styles.cross}/> </button>

        </div>
    )
    }
export default CheckBox