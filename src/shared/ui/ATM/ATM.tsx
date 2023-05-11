import React, { useState } from 'react'
import styles from './ATM.module.scss'
import logo from './assets/logo.svg'
import closePic from './assets/ClosePic.png'
import backButtonPic from './assets/backButtonPic.svg'
import ATMMainScreen from './screens/MainScreen';
import ATMBalanceScreen from './screens/BalanceScreen';
import PaymentsAndTransfersScreen from './screens/PaymentsAndTransfersScreen'
import AddMoneyScreen from './screens/AddMoneyScreen'
import WithdrawalCashScreen from './screens/WithdrawalCashScreen'
import ConfirmationScreen from './screens/ConfirmationScreen'
import PinCodeScreen from './screens/PinCodeScreen'
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
                {screen == Screen.AddMoney && <AddMoneyScreen />}
                {screen == Screen.GetCash && <WithdrawalCashScreen />}
                {screen == Screen.PaymentsAndTransfers && <PaymentsAndTransfersScreen />}
                {screen == Screen.Balance && <ATMBalanceScreen balance='50 000 000$' />}
                {screen == Screen.Confirmation && <ConfirmationScreen/>}
                {screen == Screen.PinCode && <PinCodeScreen/>}
            </div >
        </div >
    )
}

export default ATM;