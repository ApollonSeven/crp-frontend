import React from 'react'
import {Props} from './BoaterCard.typings'
import stylesBase from './BoaterCard.module.scss'
//import cn from 'classnames'
import logo_left from "./assets/logo_left.png"
import logo_right from "./assets/logo_right.png"

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
                    <div className={stylesBase.pHead}>SEX</div>
                    <div className={stylesBase.pDescription}>{props.sex}</div>
                </div>
                <div>
                    <div className={stylesBase.pHead}>EYES</div>
                    <div className={stylesBase.pDescription}>{props.eyes}</div>
                </div>
                <div>
                    <div className={stylesBase.pHead}>HAIR</div>
                    <div className={stylesBase.pDescription}>{props.hair}</div>
                </div>
            </div>
            <div className={stylesBase.date}>
                <div>
                <div className={stylesBase.pHead}>DATE OF BIRTH</div>
                <div className={stylesBase.pDescription}>{props.dateOfBirth}</div>
                </div>
                <div>
                <div className={stylesBase.pHead}>DATE OF ISSUE</div>
                <div className={stylesBase.pDescription}>{props.dateOfIssue}</div>
                </div>
                <div>
                <div className={stylesBase.pHead}>BOATER ID CARD</div>
                <div className={stylesBase.pDescription}>{props.boaterIdCard}</div>
                </div>
            </div>
        </div>
    )
}

export default BoaterCard;