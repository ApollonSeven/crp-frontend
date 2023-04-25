import React from 'react'
//import {Props} from './ATMMainScreen.typings'
import stylesBase from './ATMMainScreen.module.scss'
import classNames from 'classnames'
import vector1 from '../assets/Vector1.svg'
import vector2 from '../assets/Vector2.svg'
import vector3 from '../assets/vector3.svg'
import vector4 from '../assets/Vector4.svg'
import vector5 from '../assets/Vector5.svg'


const ATMMainScreen = ({onSelect}:any, {test}:any) =>{
    return(
        <div className={stylesBase.cardShape}>
            <div className={stylesBase.bottomBackground}></div>
            <div className={stylesBase.menuTitle}>
                <div>Главное меню</div>
                <div>Выберите нужный Вам пункт</div>
            </div>
            <div className={stylesBase.navigation}>
                {test}
                <div className={classNames(stylesBase.leftTopNavBlock, stylesBase.navBlock)} onClick={() => onSelect('addMoney')}>
                    <div className={stylesBase.navTitle}>Положить{<br/>} на счет</div>
                    <div className={stylesBase.backgroundBlock}></div>
                    <div className={stylesBase.navPicTopLeft}>
                        <img src={vector1}/>
                        <img src={vector2}/>
                    </div>
                </div>
                <div className={classNames(stylesBase.rightTopNavBlock, stylesBase.navBlock)} onClick={() => onSelect('getCash')}>
                    <div className={stylesBase.navTitle}>Снять{<br/>} наличные</div>
                    <div className={stylesBase.backgroundBlock}></div>
                    <div className={stylesBase.navPicTopRight}>
                        <img src={vector1}/>
                        <img src={vector2}/>
                    </div>
                </div>
                <div className={classNames(stylesBase.leftBottomNavBlock, stylesBase.navBlock)} onClick={() => onSelect('history')}>
                    <div className={stylesBase.navTitle}/* onClick={listOfOperations()} */>История{<br/>} операций</div>
                    <div className={stylesBase.backgroundBlock}></div>
                    <div className={stylesBase.navPicBottomLeft}>
                        <img src={vector3}/>
                    </div>
                </div>
                <div className={classNames(stylesBase.rightBottomNavBlock, stylesBase.navBlock)} onClick={() => onSelect('balance')}>
                    <div className={stylesBase.navTitle}>Запросить{<br/>} баланс</div>
                    <div className={stylesBase.backgroundBlock}></div>
                    <div className={stylesBase.navPicBottomRight}>
                        <img src={vector4}/>
                        <img src={vector5}/>
                    </div>
                </div>
            </div>
        </div>
 
    )
}

export default ATMMainScreen;