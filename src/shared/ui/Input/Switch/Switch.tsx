import { InputProps } from '../Input.typings'
import styles from 'shared/ui/Input/Switch/Switch.module.css'
import React from 'react'

const Switch = ({ value = false, onChange }: InputProps<boolean>) => {
    return (
        <label className={styles.switch}>
            <input
                type="checkbox"
                checked={value}
                onChange={() => onChange(!value)}
            />
            <span className={styles.slider} />
        </label>
    )
}
export default Switch
