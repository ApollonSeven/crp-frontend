import React from 'react'
import {Props} from './ATMNavButton.typings'
import stylesBase from './ATMNavButton.module.scss'

const ATMNavButton = (props:Props) => {
    return (
        <div className={stylesBase.navBlock}>
            <div className={stylesBase.navTitle}>{props.title}</div>
            <div className={stylesBase.backgroundBlock}></div>
            <div className={stylesBase.navPic}>
                <img src={props.pic} />
            </div>
        </div>
    )
}

export default ATMNavButton;