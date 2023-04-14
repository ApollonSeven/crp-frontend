import React from 'react'
import styles from './CheckBox.module.scss'
import { CheckBoxProps } from './CheckBox.typings'
import { Check, Cross2 } from 'shared/icons/generated'

const CheckBox: React.FC<CheckBoxProps> = ({ onClick }) => {
    return (
        <div className={styles.container}>
           <button onClick={onClick}> <Check className={styles.check}/></button> 
           <button onClick={onClick}> <Cross2 className={styles.cross}/> </button>

        </div>
    )
    }
export default CheckBox