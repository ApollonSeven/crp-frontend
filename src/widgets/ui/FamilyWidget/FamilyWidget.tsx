import React from 'react'
import styles from './FamilyWidget.module.css'
import { FamilyWidgetProps } from './FamilyWidget.typings'

const FamilyWidget: React.FC<FamilyWidgetProps> = ({ onChange}) => {
    return (
        <div className={styles.div1}>
        <button onClick={onChange}> Родословная </button>
        <button onClick={onChange}> Удалить персонажа </button>
        </div>
    )
    }
export default FamilyWidget