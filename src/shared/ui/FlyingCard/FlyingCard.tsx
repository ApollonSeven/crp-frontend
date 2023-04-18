import React from 'react'
import {Props} from './FyingCard.typings'
import stylesBase from './FlyingCard.module.scss'
//import cn from 'classnames'
import logo_left from "./assets/logo_left.svg"
import logo_right from "./assets/logo_right.svg"
import photo from './assets/photo.png'
import sign from './assets/sign.png'

const FlyingCard = (props:Props) =>{
    return(
        <div className={stylesBase.cardShape}>
            <img src={logo_left} className={stylesBase.logo_left}></img>
            <img src={logo_right} className={stylesBase.logo_right}></img>
            <img src={photo} className={stylesBase.photo}></img>
            <div className={stylesBase.header}>
                <div className={stylesBase.numbers}>I</div>
                <div className={stylesBase.mainTitle}>UNITED STATES OF AMERICA</div>
                <div className={stylesBase.numbers}>XI</div>
            </div>
            <div className={stylesBase.subHeader}>
                <div>DEPARTMENT OF TRANSPORTATION</div>
                <div></div>
                <div>FEDERAL AVIATION ADMINISTRATION</div>
            </div>
            <div className={stylesBase.headerName}>IV &nbsp; NAME</div>
            <div className={stylesBase.name}>{props.name?.toUpperCase()}</div>
            <div className={stylesBase.address}>
                <div>V &nbsp; ADDRESS</div>
                <div>4727 N. KENMORE AVE<br/>CHICAGO IL 60640</div>
            </div>
            <div className={stylesBase.personData}>
                <div>
                    <div>SEX</div>
                    <div>{props.sex?.toUpperCase()}</div>
                </div>
                <div>
                    <div>HEIGHT</div>
                    <div>{props.height}</div>
                </div>
                <div>
                    <div>WEIGHT</div>
                    <div>{props.weight}</div>
                </div>
                <div>
                    <div>HAIR</div>
                    <div>{props.hair?.toUpperCase()}</div>
                </div>
                <div>
                    <div>EYES</div>
                    <div>{props.eyes?.toUpperCase()}</div>
                </div>
            </div>
            <div className={stylesBase.nationality}>
                <div>VI &nbsp;NATIONALITY</div>
                <div>{props.nationality?.toUpperCase()}</div>
            </div>
            <div className={stylesBase.dob}>
                <div>IVa &nbsp;D.O.B.</div>
                <div>{props.dob?.toUpperCase()}</div>
            </div>
            <div className={stylesBase.anyData}>IX &nbsp;HAS BEEN FOUND TO BE PROPERLY QUALIFIED TO EXERCISE THE PRIVILEGIES OF</div>
            <div className={stylesBase.info}>
                <div>
                    <div>III</div>
                    <div className={stylesBase.pilot}>PRIVATE PILOT</div>
                </div>
                <div>
                    <div>VI CERTIFICATE NUMBER</div>
                    <div>{props.certNumber}</div>
                </div>
                <div>
                    <div>X &nbsp;DATE OF ISSUE</div>
                    <div>{props.dateOfIssue?.toUpperCase()}</div>
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