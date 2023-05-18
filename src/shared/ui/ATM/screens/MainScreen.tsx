import React from 'react'
import styles from './MainScreen.module.scss'
import addMoneyPic from '../assets/addMoneyPic.svg'
import withdrawalMoneyPic from '../assets/withdrawalMoneyPic.svg'
import transfersPic from '../assets/transfersPic.svg'
import balancePic from '../assets/balancePic.svg'
import NavButton from '../components/NavButton'
import { Screen } from '../ATM.config'

const MainScreen = ({ onSelect }: any) => {
    return (
        <div className={styles.cardShape}>
            <div className={styles.bottomBackground}></div>
            <div className={styles.navigation}>
                <div className={styles.leftTopNavBlock}>
                    <NavButton title='Положить на счет' pic={addMoneyPic} onSelect={() => onSelect(Screen.AddMoney)}/>
                </div>
                <div className={styles.rightTopNavBlock}>
                    <NavButton title='Снять наличные' pic={withdrawalMoneyPic} onSelect={() => onSelect(Screen.PinCode)}/>
                </div>
                <div className={styles.leftBottomNavBlock}>
                    <NavButton title='Платежи и переводы' pic={transfersPic} onSelect={() => onSelect(Screen.PaymentsAndTransfers)}/>
                </div>
                <div className={styles.rightBottomNavBlock}>
                    <NavButton title='Запросить баланс' pic={balancePic} onSelect={() => onSelect(Screen.Balance)}/>
                </div>
            </div>
        </div>

    )
}

export default MainScreen;