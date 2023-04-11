import React from 'react'
//import { Props } from './ArmyCard.typings'
import stylesBase from './ArmyCard.module.scss'
//import cn from 'classnames'

const ArmyCard = () =>{
    return(
        <div className={stylesBase.cardShape}>
            <div className={stylesBase.header}>
                <div className={stylesBase.photo}>
                    <div>№9891833</div>
                </div>
                <div className={stylesBase.logo}>
                    <h3>Armed Forces of the United States</h3>
                    <div className={stylesBase.logo_pic}></div>
                    <h2>Army</h2>
                    <h2>Active Duty</h2>
                </div>
            </div>
            <div className={stylesBase.name}>
                <h2>KEVIN</h2>
                <h2>JOHN ADAMS</h2>
            </div>
            <div className={stylesBase.info}>
                <div className={stylesBase.qr_pic}></div>
                <div className={stylesBase.grade}>
                    <div>
                        <h3>Pav Grade</h3>
                        <h3>E-6</h3>
                    </div>
                        <div className={stylesBase.sim_pic}></div>
                </div>
                <div className={stylesBase.rank}>
                    <div>
                        <h3>Rank</h3>
                        <h3>SSG</h3>
                    </div>
                    <div className={stylesBase.date_date}>
                        <h2>Issue Date</h2>
                        <h2>2014 DEC 18</h2>
                        <h2>Expiration Date</h2>
                        <h2>2021 DEC 18</h2>
                    </div>
                </div>
            </div>
            <div className={stylesBase.grow}></div>
            <div className={stylesBase.footer}>Libya Deployment Identification Card</div>
        </div>
    )
}

export default ArmyCard;