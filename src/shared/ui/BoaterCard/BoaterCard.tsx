import React from 'react'
//import {Props} from './BoaterCard.typings'
import stylesBase from './BoaterCard.module.scss'
//import cn from 'classnames'
import logo_left from "./logo_left.png"
import logo_right from "./logo_right.png"

const BoaterCard = () =>{
    return(
        <div className={stylesBase.cardShape}>
            <div className={stylesBase.header}>
                <img src={logo_left}></img>
                <div>
                    <h2>San Andreas</h2>
                    <h1>BOATER CARD</h1>
                </div>
                <img src={logo_right}></img>
            </div>
            <div className={stylesBase.department}>
            WEAZY BOATER {'\n'}N. KENMORE AVE{'\n'}CHICAGO , IL 60640
            </div>
            <div className={stylesBase.person}>
                <div>
                    <p className={stylesBase.pHead}>SEX</p>
                    <p className={stylesBase.pDescription}>M</p>
                </div>
                <div>
                    <p className={stylesBase.pHead}>EYES</p>
                    <p className={stylesBase.pDescription}>BLUE</p>
                </div>
                <div>
                    <p className={stylesBase.pHead}>HAIR</p>
                    <p className={stylesBase.pDescription}>BRN</p>
                </div>
            </div>
        </div>
    )
}

export default BoaterCard;