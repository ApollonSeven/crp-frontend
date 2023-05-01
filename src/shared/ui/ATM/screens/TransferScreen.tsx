import React, {useState} from 'react'
import styles from './TransferScreen.module.scss'
import cardLogo from '../assets/cardLogo.png'
import phoneBookPic from '../assets/phoneBookPic.svg'
import {Props} from './TransferScreen.typings'
import classNames from 'classnames'

enum InputSelect {card, phone}

const TransferScreen = (props:Props) => {

    const [inputSelect, setInputSelect] = useState(InputSelect.card)
    const [transferValue, setTransferValue] = useState('')
    const handleClick = (type:any) =>{
        if (type == 'card') setInputSelect(InputSelect.card)
        if (type == 'phone') setInputSelect(InputSelect.phone)
    }

    return (
        <div className={styles.cardShape}>
            <div className={styles.mainInfo}>
                <div className={styles.header}>
                    <img src={cardLogo}/>
                    <div>{props.cardBalance}</div>
                </div>
                <div className={styles.cardOrPhone}>
                    <div className={classNames(styles.cardOrPhoneSelect, `${inputSelect == InputSelect.card && styles.cardOrPhoneSelectWhiteBackground}`)} onClick ={() => handleClick('card')}>Карта</div>
                    <div className={classNames(styles.cardOrPhoneSelect, `${inputSelect == InputSelect.phone && styles.cardOrPhoneSelectWhiteBackground}`)} onClick ={() => handleClick('phone')}>Телефон</div>
                </div>
                <div className={styles.recipient}>
                    <img className={classNames(`${inputSelect == InputSelect.phone ? styles.cardLogoHide : styles.cardLogo}`)} src={cardLogo}/>
                    <input className={styles.recipientInput} type='text' placeholder={inputSelect == InputSelect.card ? 'Карта получателя' : 'Телефон получателя'}/>
                    <img className={inputSelect == InputSelect.card ? styles.phoneBookLogoHide : styles.phoneBookLogo} src={phoneBookPic}/>
                </div>
                <input id='transferValue' type='text' placeholder='Введите сумму перевода' value = {transferValue} className={styles.valueTransfer} onChange={(event) => setTransferValue(event.target.value)}/>
            </div>
            <div className={styles.transferButton}>Перевести {transferValue}</div>
        </div>
    )
}

export default TransferScreen