import React from 'react'
import styles from './MainScreen.module.scss'
import addMoneyPic from '../assets/addMoneyPic.svg'
import withdrawalMoneyPic from '../assets/withdrawalMoneyPic.svg'
import historyPic from '../assets/historyPic.svg'
import balancePic from '../assets/balancePic.svg'
import NavButton from '../components/NavButton'
import { Screen } from '../ATM.config'

const MainScreen = ({ onSelect }: any) => {
    return (
        <div className={styles.cardShape}>
            <div className={styles.bottomBackground}></div>
            <div className={styles.navigation}>
                <div className={styles.leftTopNavBlock} onClick={() => onSelect(Screen.AddMoney)}>
                    <NavButton title='Положить на счет' pic={addMoneyPic} />
                </div>
                <div className={styles.rightTopNavBlock} onClick={() => onSelect(Screen.GetCash)}>
                    <NavButton title='Снять наличные' pic={withdrawalMoneyPic} />
                </div>
                <div className={styles.leftBottomNavBlock} onClick={() => onSelect(Screen.History)}>
                    <NavButton title='История операций' pic={historyPic} />
                </div>
                <div className={styles.rightBottomNavBlock} onClick={() => onSelect(Screen.Balance)}>
                    <NavButton title='Запросить баланс' pic={balancePic} />
                </div>
            </div>
        </div>

    )
}

export default MainScreen;