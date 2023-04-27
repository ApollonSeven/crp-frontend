import React from "react";
import stylesBase from './ATMAcceptButton.module.scss'
import {Props} from './ATMAcceptButton.typings'

const ATMAcceptButton = (props:Props) => {
    return(
        <div className={stylesBase.cardShape}>{props.title}</div>
    )
}

export default ATMAcceptButton