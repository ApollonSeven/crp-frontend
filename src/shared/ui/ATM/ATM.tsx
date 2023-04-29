import React, { useState } from 'react'
import stylesBase from './ATM.module.scss'
import logo from './assets/logo.svg'
import vector from './assets/Vector.png'
import vector6 from './assets/Vector6.svg'
import ATMMainScreen from './components/ATMMainScreen';
import ATMBalanceScreen from './components/ATMBalanceScreen';
import ATMHistoryScreen from './components/ATMHistoryScreen';
import ATMPinCodeScreen from './components/ATMPinCodeScreen';
import { ATM_TITLES, Screen } from './ATM.config'


const ATM = () => {

    const [screen, setScreen] = useState(Screen.Main)
    const hasBackButton = screen != Screen.Main && screen != Screen.AddMoney && screen != Screen.GetCash
    const handleMainScreenSelect = (activeScreen: Screen) => {
        setScreen(activeScreen)
    }

    return (
        <div className={stylesBase.greenBorderBackground}>
            <img src={logo} />
            <div className={stylesBase.blackBackground}>
                <div className={stylesBase.colorBackground}></div>
                <div className={stylesBase.header}>
                    <div className={stylesBase.menuTitle}>
                        <div className={(hasBackButton ? `${stylesBase.backButton}` : `${stylesBase.backButtonHide}`)}>
                            <img src={vector6}></img>
                        </div>
                        <div>
                            <div className={stylesBase.title}>
                                {ATM_TITLES[screen]}
                            </div>
                            <div className={stylesBase.subTitle}>
                                {screen == Screen.Main && 'Выберите нужный Вам пункт'}
                            </div>
                        </div>
                    </div>
                    <div className={stylesBase.finishWork}>
                        <div>Завершить обслуживание</div>
                        <div>
                            <img src={vector} />
                        </div>
                    </div>
                </div>
                {screen == Screen.Main && <ATMMainScreen onSelect={handleMainScreenSelect} />}
                {screen == Screen.AddMoney && <ATMPinCodeScreen />}
                {screen == Screen.GetCash && <ATMPinCodeScreen />}
                {
                    screen == Screen.History && <ATMHistoryScreen
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
                    />
                }
                {screen == Screen.Balance && <ATMBalanceScreen balance='50 000 000$' />}
            </div >
        </div >
    )
}

export default ATM;