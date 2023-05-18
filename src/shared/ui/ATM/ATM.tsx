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
import TransferScreen from './screens/TransferScreen'
import { ATM_TITLES, Screen } from './ATM.config'
import { getBalance } from './modules/getBalance'

const ATM = () => {

    const [screen, setScreen] = useState(Screen.Main)
    const hasBackButton = screen != Screen.Main && screen
    const [addingValue, setAddingValue] = useState('')
    const [confirmationScreenMessage, setConfirmationScreenMessage] = useState('')
    const handleMainScreenSelect = (activeScreen: Screen, message:string, inputValue:string) => {
        setScreen(activeScreen)
        setAddingValue(inputValue)
        setConfirmationScreenMessage(message)
    }

    return (
        <div className={styles.greenBorderBackground}>
            <img src={logo} />
            <div className={styles.blackBackground}>
                <div className={styles.colorBackground}></div>
                <div className={styles.header}>
                    <div className={styles.menuTitle}>
                        {hasBackButton && <div className={styles.backButton} onClick = {() => setScreen(Screen.Main)}>
                            <img src={backButtonPic}></img>
                        </div>}
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
                {screen == Screen.AddMoney && <AddMoneyScreen onSelect={handleMainScreenSelect}/>}
                {screen == Screen.GetCash && <WithdrawalCashScreen onSelect={handleMainScreenSelect}/>}
                {screen == Screen.PaymentsAndTransfers && <PaymentsAndTransfersScreen onSelect={handleMainScreenSelect} />}
                {screen == Screen.Balance && <ATMBalanceScreen balance={getBalance()} />}
                {screen == Screen.Confirmation && <ConfirmationScreen message = {confirmationScreenMessage} value={addingValue}/>}
                {screen == Screen.PinCode && <PinCodeScreen onSelect={handleMainScreenSelect}/>}
                {screen == Screen.Transfer && <TransferScreen onSelect={handleMainScreenSelect}/>}
            </div >
        </div >
    )
}

export default ATM;