import React, { useState } from 'react'
import styles from './ATM.module.scss'
import logo from './assets/logo.svg'
import closePic from './assets/ClosePic.png'
import backButtonPic from './assets/backButtonPic.svg'
import ATMMainScreen from './screens/MainScreen';
import ATMBalanceScreen from './screens/BalanceScreen';
import ATMHistoryScreen from './screens/HistoryScreen';
import AddMoneyScreen from './screens/AddMoneyScreen'
import WithdrawalCashScreen from './screens/WithdrawalCashScreen'
import { ATM_TITLES, Screen } from './ATM.config'

const ATM = () => {

    const [screen, setScreen] = useState(Screen.Main)
    const hasBackButton = screen != Screen.Main && screen
    const handleMainScreenSelect = (activeScreen: Screen) => {
        setScreen(activeScreen)
    }

    return (
        <div className={styles.greenBorderBackground}>
            <img src={logo} />
            <div className={styles.blackBackground}>
                <div className={styles.colorBackground}></div>
                <div className={styles.header}>
                    <div className={styles.menuTitle}>
                        <div className={(hasBackButton ? `${styles.backButton}` : `${styles.backButtonHide}`)} onClick = {() => setScreen(Screen.Main)}>
                            <img src={backButtonPic}></img>
                        </div>
                        <div>
                            <div className={styles.title}>
                                {ATM_TITLES[screen]}
                            </div>
                            <div className={styles.subTitle}>
                                {screen == Screen.Main && 'Выберите нужный Вам пункт'}
                            </div>
                        </div>
                    </div>
                    <div className={styles.finishWork} onClick = {(() => setScreen(Screen.Main))}>
                        <div>Завершить обслуживание</div>
                        <div>
                            <img src={closePic} />
                        </div>
                    </div>
                </div>
                {screen == Screen.Main && <ATMMainScreen onSelect={handleMainScreenSelect} />}
                {screen == Screen.AddMoney && <AddMoneyScreen value='50 000 000$' gas='456$' toAdding='50 000 456$' />}
                {screen == Screen.GetCash && <WithdrawalCashScreen />}
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