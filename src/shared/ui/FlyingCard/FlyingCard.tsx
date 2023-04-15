import React from 'react'
//import {Props} from './BoaterCard.typings'
import stylesBase from './FlyingCard.module.scss'
//import cn from 'classnames'
import logo_left from "./logo_left.svg"
import logo_right from "./logo_right.svg"
import photo from './photo.png'
import sign from './sign.png'

const FlyingCard = () =>{
    return(
        <div className={stylesBase.cardShape}>
            <img src={logo_left} className={stylesBase.logo_left}></img>
            <img src={logo_right} className={stylesBase.logo_right}></img>
            <img src={photo} className={stylesBase.photo}></img>
            <div className={stylesBase.header}>
                <div className={stylesBase.numbers}>I</div>
                <div className={stylesBase.h1}>UNITED STATES OF AMERICA</div>
                <div className={stylesBase.numbers}>XI</div>
            </div>
            <div className={stylesBase.subHeader}>
                <div>DEPARTMENT OF TRANSPORTATION</div>
                <div></div>
                <div>FEDERAL AVIATION ADMINISTRATION</div>
            </div>
            <div className={stylesBase.headerName}>IV &nbsp; NAME</div>
            <div className={stylesBase.name}>WEAZY B. PILOT</div>
            <div className={stylesBase.address}>
                <div>V &nbsp; ADDRESS</div>
                <div>4727 N. KENMORE AVE<br/>CHICAGO IL 60640</div>
            </div>
            <div className={stylesBase.personData}>
                <div>
                    <div>SEX</div>
                    <div>M</div>
                </div>
                <div>
                    <div>HEIGHT</div>
                    <div>67</div>
                </div>
                <div>
                    <div>WEIGHT</div>
                    <div>200</div>
                </div>
                <div>
                    <div>HAIR</div>
                    <div>BROWN</div>
                </div>
                <div>
                    <div>EYES</div>
                    <div>GREEN</div>
                </div>
            </div>
            <div className={stylesBase.nationality}>
                <div>VI &nbsp;NATIONALITY</div>
                <div>AMERICAN</div>
            </div>
            <div className={stylesBase.dob}>
                <div>IVa &nbsp;D.O.B.</div>
                <div>23 SEP 1999</div>
            </div>
            <div className={stylesBase.anyData}>IX &nbsp;HAS BEEN FOUND TO BE PROPERLY QUALIFIED TO EXERCISE THE PRIVILEGIES OF</div>
            <div className={stylesBase.info}>
                <div>
                    <div>III</div>
                    <div className={stylesBase.pilot}>PRIVATE PILOT</div>
                </div>
                <div>
                    <div>VI CERTIFICATE NUMBER</div>
                    <div>2549741</div>
                </div>
                <div>
                    <div>X &nbsp;DATE OF ISSUE</div>
                    <div>24 OCT 2022</div>
                </div>
            </div>
            <div className={stylesBase.sign}>
                <div>XIV</div>
                <img src={sign}></img>
            </div>
            <div className={stylesBase.vii}>
                <div>VII</div>
                <div>ADMINISTRATOR</div>
            </div>
        </div>
    )
}

export default FlyingCard;