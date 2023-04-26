import React from 'react'
//import {Props} from './ATMMainScreen.typings'
import stylesBase from './ATMMainScreen.module.scss'
//import classNames from 'classnames'
import vector1 from '../assets/Vector1.svg'
//import vector2 from '../assets/Vector2.svg'
//import vector3 from '../assets/vector3.svg'
//import vector4 from '../assets/Vector4.svg'
import ATMNavButton from './ATMNavButton'

const ATMMainScreen = ({ onSelect }: any) => {
    return (
        <div className={stylesBase.cardShape}>
            <div className={stylesBase.bottomBackground}></div>
            {/* <div className={stylesBase.menuTitle}>
                <div>Главное меню</div>
                <div>Выберите нужный Вам пункт</div>
            </div> */}
            <div className={stylesBase.navigation}>
                {/* <div className={classNames(stylesBase.leftTopNavBlock, stylesBase.navBlock)} onClick={() => onSelect('addMoney')}>
                    <div className={stylesBase.navTitle}>Положить{<br/>} на счет</div>
                    <div className={stylesBase.backgroundBlock}></div>
                    <div className={stylesBase.navPic}>
                        <img src={vector1}/>
                    </div>
                </div>
                <div className={classNames(stylesBase.rightTopNavBlock, stylesBase.navBlock)} onClick={() => onSelect('getCash')}>
                    <div className={stylesBase.navTitle}>Снять{<br/>} наличные</div>
                    <div className={stylesBase.backgroundBlock}></div>
                    <div className={stylesBase.navPic}>
                        <img src={vector2}/>
                    </div>
                </div>
                <div className={classNames(stylesBase.leftBottomNavBlock, stylesBase.navBlock)} onClick={() => onSelect('history')}>
                    <div className={stylesBase.navTitle}>История{<br/>} операций</div>
                    <div className={stylesBase.backgroundBlock}></div>
                    <div className={stylesBase.navPic}>
                        <img src={vector3}/>
                    </div>
                </div>
                <div className={classNames(stylesBase.rightBottomNavBlock, stylesBase.navBlock)} onClick={() => onSelect('balance')}>
                    <div className={stylesBase.navTitle}>Запросить{<br/>} баланс</div>
                    <div className={stylesBase.backgroundBlock}></div>
                    <div className={stylesBase.navPic}>
                        <img src={vector4}/>
                    </div>
                </div> */}
                <div className={stylesBase.leftTopNavBlock} onClick={() => onSelect('addMoney')}>
                    <ATMNavButton title='Положить на счет' pic={vector1} />
                </div>
                <div className={stylesBase.rightTopNavBlock} onClick={() => onSelect('getCash')}>
                    <ATMNavButton title='Снять наличные' pic={vector1} />
                </div>
                <div className={stylesBase.leftBottomNavBlock} onClick={() => onSelect('history')}>
                    <ATMNavButton title='История операций' pic={vector1} />
                </div>
                <div className={stylesBase.rightBottomNavBlock} onClick={() => onSelect('balance')}>
                    <ATMNavButton title='Запросить баланс' pic={vector1} />
                </div>
            </div>
        </div>

    )
}

export default ATMMainScreen;