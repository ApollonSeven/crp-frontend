import React from 'react'
import stylesBase from './ATMMainScreen.module.scss'
import vector1 from '../assets/Vector1.svg'
import vector2 from '../assets/Vector2.svg'
import vector3 from '../assets/vector3.svg'
import vector4 from '../assets/Vector4.svg'
import ATMNavButton from './ATMNavButton'

const ATMMainScreen = ({ onSelect }: any) => {
    return (
        <div className={stylesBase.cardShape}>
            <div className={stylesBase.bottomBackground}></div>
            <div className={stylesBase.navigation}>
                <div className={stylesBase.leftTopNavBlock} onClick={() => onSelect('addMoney')}>
                    <ATMNavButton title='Положить на счет' pic={vector1} />
                </div>
                <div className={stylesBase.rightTopNavBlock} onClick={() => onSelect('getCash')}>
                    <ATMNavButton title='Снять наличные' pic={vector2} />
                </div>
                <div className={stylesBase.leftBottomNavBlock} onClick={() => onSelect('history')}>
                    <ATMNavButton title='История операций' pic={vector3} />
                </div>
                <div className={stylesBase.rightBottomNavBlock} onClick={() => onSelect('balance')}>
                    <ATMNavButton title='Запросить баланс' pic={vector4} />
                </div>
            </div>
        </div>

    )
}

export default ATMMainScreen;