import React from "react";
import styles from './AcceptButton.module.scss'
import {Props} from './AcceptButton.typings'

const AcceptButton = ({title, onSelect}:Props) => {

    return(
        <div className={styles.cardShape} onClick = {() => onSelect()}>{title}</div>
    )
}

export default AcceptButton