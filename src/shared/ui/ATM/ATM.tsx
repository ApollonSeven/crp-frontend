import React, { useState } from 'react'
import stylesBase from './ATM.module.scss'
import logo from './assets/logo.svg'
import vector from './assets/Vector.png'
import vector6 from './assets/Vector6.svg'
import ATMMainScreen from './components/ATMMainScreen';
import ATMBalanceScreen from './components/ATMBalanceScreen';
import ATMHistoryScreen from './components/ATMHistoryScreen';
import ATMPinCodeScreen from './components/ATMPinCodeScreen';

enum Screen { Main, AddMoney, GetCash, History, Balance }
enum Title { Main, AddMoney, GetCash, History, Balance }
enum SubTitle { Main, AddMoney, GetCash, History, Balance }

const ATM = () => {

    const [screen, setScreen] = useState(Screen.Main)
    const [title, setTitle] = useState(Title.Main)
    const [subTitle, setSubTitle] = useState(SubTitle.Main)
    const [backButtonVisibility, setBackButtonVisibility] = useState(false)
    const handleMainScreenSelect = (type: string) => {
        if (type == 'addMoney') { setScreen(Screen.AddMoney); setTitle(Title.AddMoney); setSubTitle(SubTitle.AddMoney); setBackButtonVisibility(true) }
        if (type == 'getCash') { setScreen(Screen.GetCash); setTitle(Title.GetCash); setSubTitle(SubTitle.GetCash); setBackButtonVisibility(true) }
        if (type == 'history') { setScreen(Screen.History); setTitle(Title.History); setSubTitle(SubTitle.History); setBackButtonVisibility(true) }
        if (type == 'balance') { setScreen(Screen.Balance); setTitle(Title.Balance); setSubTitle(SubTitle.Balance); setBackButtonVisibility(true) }
    }

    return (
        <div className={stylesBase.greenBorderBackground}>
            <img src={logo} />
            <div className={stylesBase.blackBackground}>
                <div className={stylesBase.colorBackground}></div>
                <div className={stylesBase.header}>
                    <div className={stylesBase.menuTitle}>
                        <div className={(backButtonVisibility ? `${stylesBase.backButton}` : `${stylesBase.backButtonHide}`)}>
                            <img src={vector6}></img>
                        </div>
                        <div>
                            <div className={stylesBase.title}>
                                {title == Title.Main && 'Главное меню'}
                                {title == Title.AddMoney && 'Введите PIN код'}
                                {title == Title.GetCash && 'Введите PIN код'}
                                {title == Title.History && 'Операции'}
                                {title == Title.Balance && 'Баланс'}
                            </div>
                            <div className={stylesBase.subTitle}>
                                {subTitle == SubTitle.Main && 'Выберите нужный Вам пункт'}
                                {subTitle == SubTitle.AddMoney}
                                {subTitle == SubTitle.GetCash}
                                {subTitle == SubTitle.History}
                                {subTitle == SubTitle.Balance}
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