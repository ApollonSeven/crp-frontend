import React from 'react'
import {Props} from './BoaterCard.typings'
import stylesBase from './BoaterCard.module.scss'
//import cn from 'classnames'
import logo_left from "./logo_left.png"
import logo_right from "./logo_right.png"

const BoaterCard = (props:Props) =>{
    return(
        <div className={stylesBase.cardShape}>
            <div className={stylesBase.header}>
                <img src={logo_left}></img>
                <div>
                    <div className={stylesBase.secondHeader}>San Andreas</div>
                    <div className={stylesBase.mainHeader}>BOATER CARD</div>
                </div>
                <img src={logo_right}></img>
            </div>
            <div className={stylesBase.department}>
            WEAZY BOATER {'\n'}N. KENMORE AVE{'\n'}CHICAGO , IL 60640
            </div>
            <div className={stylesBase.person}>
                <div>
                    <p className={stylesBase.pHead}>SEX</p>
                    <p className={stylesBase.pDescription}>{props.sex}</p>
                </div>
                <div>
                    <p className={stylesBase.pHead}>EYES</p>
                    <p className={stylesBase.pDescription}>{props.eyes}</p>
                </div>
                <div>
                    <p className={stylesBase.pHead}>HAIR</p>
                    <p className={stylesBase.pDescription}>{props.hair}</p>
                </div>
            </div>
            <div className={stylesBase.date}>
                <div>
                <p className={stylesBase.pHead}>DATE OF BIRTH</p>
                <p className={stylesBase.pDescription}>{props.dateOfBirth}</p>
                </div>
                <div>
                <p className={stylesBase.pHead}>DATE OF ISSUE</p>
                <p className={stylesBase.pDescription}>{props.dateOfIssue}</p>
                </div>
                <div>
                <p className={stylesBase.pHead}>BOATER ID CARD</p>
                <p className={stylesBase.pDescription}>{props.boaterIdCard}</p>
                </div>
            </div>
        </div>
    )
}

export default BoaterCard;