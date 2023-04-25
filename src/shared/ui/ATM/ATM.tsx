import React, { useState } from 'react'
import stylesBase from './ATM.module.scss'
import logo from './assets/logo.svg'
import vector from './assets/Vector.png'
import ATMMainScreen from './components/ATMMainScreen';
import ATMBalanceScreen from './components/ATMBalanceScreen';
import ATMHistoryScreen from './components/ATMHistoryScreen';
import ATMPinCodeScreen from './components/ATMPinCodeScreen';

enum Screen { Main, AddMoney, GetCash, History, Balance }

const ATM = () => {
    const [screen, setScreen] = useState(Screen.Main)
    const handleMainScreenSelect = (type: string) => {
        if (type == 'addMoney') { setScreen(Screen.AddMoney) }
        if (type == 'getCash') { setScreen(Screen.GetCash) }
        if (type == 'history') { setScreen(Screen.History) }
        if (type == 'balance') { setScreen(Screen.Balance) }
    }
    return (
        <div className={stylesBase.greenBorderPosition}>
            <div className={stylesBase.greenBorderBackground}>
                <div className={stylesBase.greenBorderRight}></div>
                <div className={stylesBase.greenBorderLeft}></div>
                <div className={stylesBase.greenBorderTop}></div>
                <div className={stylesBase.greenBorderBottom}></div>
                <img src={logo} />
            </div>
            <div className={stylesBase.metalBorder}>
                <div className={stylesBase.blackBackground}>
                    <div className={stylesBase.colorBackground}></div>
                    <div className={stylesBase.finishWork} /*onClick={onClose}*/>
                        <div>Завершить обслуживание</div>
                        <div>
                            <img src={vector} />
                        </div>
                    </div>
                    {screen == Screen.Main && <ATMMainScreen onSelect={handleMainScreenSelect} test={<div className={stylesBase.test}></div>} />}
                    {screen == Screen.AddMoney && <ATMPinCodeScreen />}
                    {screen == Screen.GetCash && <ATMPinCodeScreen />}
                    {screen == Screen.History && <ATMHistoryScreen
                        history={[
                            {
                                date: '12.09.2020',
                                operations: [{
                                    shortName: 'Иван Е.',
                                    operation: 'Пополнение',
                                    value: '+ 4 500 $',
                                },
                                {
                                    shortName: 'Иван Е.',
                                    operation: 'Перевод',
                                    value: '- 4 500 $',
                                }]
                            },
                            {
                                date: '02.09.2020',
                                operations: [{
                                    shortName: 'Иван Е.',
                                    operation: 'Перевод',
                                    value: '- 4 500 $',
                                },
                                {
                                    shortName: 'Иван Е.',
                                    operation: 'Пополнение',
                                    value: '+ 4 500 $',
                                },
                                {
                                    shortName: 'Иван Е.',
                                    operation: 'Пополнение',
                                    value: '+ 4 500 $',
                                }]
                            },
                            {
                                date: '02.09.2020',
                                operations: [{
                                    shortName: 'Иван Е.',
                                    operation: 'Перевод',
                                    value: '- 4 500 $',
                                },
                                {
                                    shortName: 'Иван Е.',
                                    operation: 'Пополнение',
                                    value: '+ 4 500 $',
                                },
                                {
                                    shortName: 'Иван Е.',
                                    operation: 'Пополнение',
                                    value: '+ 4 500 $',
                                }]
                            }
                        ]}
                    />}
                    {screen == Screen.Balance && <ATMBalanceScreen balance='50 000 000$' />}
                </div>
            </div>
        </div>
    )
}

export default ATM;