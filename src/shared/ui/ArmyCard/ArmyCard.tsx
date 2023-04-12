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
                    <h3>Armed Forces of the United States</h3>
                    <div className={stylesBase.logo_pic}></div>
                    <h2>Army</h2>
                    <h2>{props.status}</h2>
                </div>
            </div>
            <div className={stylesBase.name}>
                <h2>{props.firstName?.toUpperCase()}</h2>
                <h2>{props.lastName?.toUpperCase()}</h2>
            </div>
            <div className={stylesBase.info}>
                <div className={stylesBase.qr_pic}></div>
                <div className={stylesBase.grade}>
                    <div>
                        <h3>Pav Grade</h3>
                        <h3>{props.pavGrade}</h3>
                    </div>
                        <div className={stylesBase.sim_pic}></div>
                </div>
                <div className={stylesBase.rank}>
                    <div>
                        <h3>Rank</h3>
                        <h3>{props.rank}</h3>
                    </div>
                    <div className={stylesBase.date_date}>
                        <h2>Issue Date</h2>
                        <h2>{props.issueDate}</h2>
                        <h2>Expiration Date</h2>
                        <h2>{props.expirationDate}</h2>
                    </div>
                </div>
            </div>
            <div className={stylesBase.grow}></div>
            <div className={stylesBase.footer}>Libya Deployment Identification Card</div>
        </div>
    )
}

export default ArmyCard;