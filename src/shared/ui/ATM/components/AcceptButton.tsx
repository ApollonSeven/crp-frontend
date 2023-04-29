import React from "react";
import styles from './AcceptButton.module.scss'
import {Props} from './AcceptButton.typings'

const AcceptButton = (props:Props) => {
    return(
        <div className={styles.cardShape}>{props.title}</div>
    )
}

export default AcceptButton