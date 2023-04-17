import React from 'react'
import {Props} from './VehiclePassport.typings'
import stylesBase from './VehiclePassport.module.scss'
import Rectangle1 from './Rectangle1.png'
import Rectangle5 from './Rectangle5.svg'

const VehiclePassport = (props:Props) =>{
    return(
        <div className={stylesBase.cardShape}>
            <div className={stylesBase.mainTitle}>CERTIFICATE OF TITLE</div>
            <div className={`${stylesBase.data} ${stylesBase.id}`}>{props.ID}</div>
            <div className={stylesBase.vehicleStory}>
                <div className={stylesBase.header}>ИСТОРИЯ АВТОМОБИЛЯ</div>
                <img src={Rectangle1}></img>
            </div>
            <div className={stylesBase.string1}>
                <div>
                    <div className={stylesBase.header}>VIN</div>
                    <div className={stylesBase.data}>{props.VEHICLE_ID_NUMBER}</div>
                </div>
                <div>
                    <div className={stylesBase.header}>МОДЕЛЬ</div>
                    <div className={stylesBase.data}>{props.MODEL}</div>
                </div>
                <div>
                    <div className={stylesBase.header}>МАРКА</div>
                    <div className={stylesBase.data}>{props.MAKE}</div>
                </div>
                <div>
                    <div className={stylesBase.header}>НОМЕРНОЙ ЗНАК</div>
                    <div className={stylesBase.data}>{props.PLATE_NUMBER}</div>
                </div> 
            </div>
            <div className={stylesBase.string2}>
                <div>
                    <div className={stylesBase.header}>ТИП КУЗОВА</div>
                    <div className={stylesBase.data}>{props.BODY_TYPE_MODEL}</div>
                </div>
                <div>
                    <div className={stylesBase.header}>ТИП ТОПЛИВА</div>
                    <div className={stylesBase.data}>{props.FUEL}</div>
                </div>
                <div>
                    <div className={stylesBase.header}>ДАТА ПОКУПКИ</div>
                    <div className={stylesBase.data}>{props.BUY_DATE}</div>
                </div>
                <div>
                    <div className={stylesBase.header}>НАЛОГ</div>
                    <div className={stylesBase.data}>{props.FEES_PAID}</div>
                </div>
                <div>
                    <div className={stylesBase.header}>ДАТА РЕГИСТРАЦИИ</div>
                    <div className={stylesBase.data}>{props.REG_DATE}</div>
                </div> 
            </div>
            <div className={stylesBase.string3}>
                <div>
                    <div className={stylesBase.header}>ГОД ПЕРВОЙ ПРОДАЖИ</div>
                    <div className={stylesBase.data}>{props.BODY_TYPE_MODEL}</div>
                </div>
                <div>
                    <div className={stylesBase.header}>МЕСЯЦ</div>
                    <div className={stylesBase.data}>{props.FUEL}</div>
                </div>
                <div>
                    <div className={stylesBase.header}>ISSUE DATE</div>
                    <div className={stylesBase.data}>{props.BUY_DATE}</div>
                </div>
            </div>
            <img className={stylesBase.logo} src={Rectangle5}></img>
            <div className={stylesBase.line1}></div>
            <div className={stylesBase.line2}></div>
            <div className={`${stylesBase.header} ${stylesBase.headerOwner}`}>ЗАРЕГИСТРИРОВАННЫЙ ВЛАДЕЛЕЦ(ЦЫ)</div>
            <div className={stylesBase.mainOwnerField}>
                <div className={stylesBase.ownerFieldData}>SILICON VALLEY OVERLAND ROBOTICS<br/>999 WOODLAND AVE<br/>MENLO PARK CA 94025</div>
            </div>
            <div className={`${stylesBase.header} ${stylesBase.headerOwnerHistory}`}>ИСТОРИЯ ВЛАДЕЛЬЦЕВ</div>
            <div className={stylesBase.historyNotes}>
                <div className={stylesBase.historyNote}>
                    <div className={stylesBase.ownerField}>
                        <div className={stylesBase.ownerFieldData}>WEAZY BUERO<br/>999 WOODLAND AVE<br/>MENLO PARK CA 94025</div>
                    </div>
                    <div>
                        <div className={stylesBase.header}>МЕСЯЦ</div>
                        <div className={stylesBase.data}>JU</div>
                    </div>
                    <div>
                        <div className={stylesBase.header}>ГОД</div>
                        <div className={stylesBase.data}>2003</div>
                    </div>
                    <div>
                        <div className={stylesBase.header}>ДАТА РЕГИСТРАЦИИ</div>
                        <div className={stylesBase.data}>06/30/2005</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VehiclePassport;