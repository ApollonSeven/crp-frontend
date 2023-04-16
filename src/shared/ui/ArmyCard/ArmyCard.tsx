import React from 'react'
import {Props} from './ArmyCard.typings'
import stylesBase from './ArmyCard.module.scss'
//import cn from 'classnames'

const ArmyCard = (props:Props) =>{
    return(
        <div className={stylesBase.cardShape}>
            <div className={stylesBase.header}>
                <div className={stylesBase.photo}>
                    <div>{props.number}</div>
                </div>
                <div className={stylesBase.logo}>
                    <div className={stylesBase.h3}>Armed Forces of the United States</div>
                    <div className={stylesBase.logo_pic}></div>
                    <div className={stylesBase.h2}>Army</div>
                    <div className={stylesBase.h2}>{props.status}</div>
                </div>
            </div>
            <div className={stylesBase.name}>
                <div className={stylesBase.h2}>{props.firstName?.toUpperCase()}</div>
                <div className={stylesBase.h2}>{props.lastName?.toUpperCase()}</div>
            </div>
            <div className={stylesBase.info}>
                <div className={stylesBase.qr_pic}></div>
                <div className={stylesBase.grade}>
                    <div>
                        <div className={stylesBase.h3}>Pav Grade</div>
                        <div className={stylesBase.h3}>{props.pavGrade}</div>
                    </div>
                        <div className={stylesBase.sim_pic}></div>
                </div>
                <div className={stylesBase.rank}>
                    <div>
                        <div className={stylesBase.h3}>Rank</div>
                        <div className={stylesBase.h3}>{props.rank}</div>
                    </div>
                    <div className={stylesBase.date_date}>
                        <div className={stylesBase.h2}>Issue Date</div>
                        <div className={stylesBase.h2}>{props.issueDate}</div>
                        <div className={stylesBase.h2}>Expiration Date</div>
                        <div className={stylesBase.h2}>{props.expirationDate}</div>
                    </div>
                </div>
            </div>
            <div className={stylesBase.grow}></div>
            <div className={stylesBase.footer}>Libya Deployment Identification Card</div>
        </div>
    )
}

export default ArmyCard;