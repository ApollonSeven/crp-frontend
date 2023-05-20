import React, { ChangeEvent, useState } from 'react'
import styles from './TransferScreen.module.scss'
import cardLogo from '../assets/cardLogo.png'
import { Props } from './TransferScreen.typings'
import classNames from 'classnames'
import { setTransfer } from '../modules/setTransfer'
import {Screen} from '../ATM.config'
import {formatPhoneNumber, formatRecipientNumber} from '../utils/format'


enum InputSelect { card, phone }

const TransferScreen = ({cardBalance, recipientForTransfer, onSelect}: Props) => {

    const [inputSelect, setInputSelect] = useState(InputSelect.card)
    const [transferValue, setTransferValue] = useState('')
    const [recipient, setRecipient] = useState('')
    const transferValueMask = Number(transferValue).toLocaleString()
    const cardOrPhoneSelectedMaxLength = inputSelect == InputSelect.card ? 19 : 10


    const handleClick = (type: InputSelect) => {
            setInputSelect(type)
            setRecipient('')
    }
    /*--------------chars validation-----------------*/
    const handleRecipientNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
        const inputRecipientNumber = event.currentTarget.value.replace(/\D/g, ''); // Фильтрация только цифр
        setRecipient(inputRecipientNumber)
    }

    /*------------------------transfer value block------------------*/

    const handleChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
        const newTransferValue = event.currentTarget.value.replace(/\D/g, ''); // Фильтрация только цифр
        setTransferValue(newTransferValue)
    }

    const maskedRecipient = inputSelect == InputSelect.card ? formatRecipientNumber(recipient) : formatPhoneNumber(recipient)

    const doTransfer = () =>{
        if (inputSelect == InputSelect.card && recipient.length == 16){
                setTransfer(recipient, transferValue)
                onSelect(Screen.Confirmation, 'Перевод успешно совершен')
        }
        if (inputSelect == InputSelect.phone && recipient.length == 10){
                setTransfer(`+7 ${recipient}`, transferValue)
                onSelect(Screen.Confirmation, 'Перевод успешно совершен')
        }

    }

    return (
        <div className={styles.cardShape}>
            <div className={styles.mainInfo}>
                <div className={styles.header}>
                    <img src={cardLogo} />
                    <div>{cardBalance}</div>
                </div>
                <div className={styles.cardOrPhone}>
                    <div className={classNames(styles.cardOrPhoneSelect, `${inputSelect == InputSelect.card && styles.whiteBg}`)} onClick={() => handleClick(InputSelect.card)}>Карта</div>
                    <div className={classNames(styles.cardOrPhoneSelect, `${inputSelect == InputSelect.phone && styles.whiteBg}`)} onClick={() => handleClick(InputSelect.phone)}>Телефон</div>
                </div>
                <div className={styles.recipient}>
                    <img className={classNames(`${inputSelect == InputSelect.phone ? styles.cardLogoHide : styles.cardLogo}`)} src={cardLogo} />
                    <input
                        className={inputSelect == InputSelect.phone ? styles.recipientInputHide : styles.recipientInput}
                        type='text'
                        placeholder={inputSelect == InputSelect.card ? 'Карта получателя' : 'Телефон получателя'}
                        onChange={handleRecipientNumberChange}
                        value={inputSelect == InputSelect.card ? maskedRecipient : recipient}
                        maxLength={cardOrPhoneSelectedMaxLength}
                        autoFocus
                    />
                    {inputSelect == InputSelect.phone && <div className={styles.phoneMaskBlock}>+7 {maskedRecipient}</div>} 
                </div>
                {(inputSelect == InputSelect.phone && recipient.length == 10 || inputSelect == InputSelect.card && recipient.length == 16) &&
                    <div className={styles.phoneBookContainer}>
                        <div>{recipientForTransfer}</div>
                        <div>Деньги поступят на карту</div>
                    </div>}
                <input
                    id='transferValue'
                    type='text'
                    placeholder='Введите сумму перевода'
                    value={transferValue}
                    className={transferValue == '' ? styles.valueTransfer : styles.valueTransferHide}
                    onChange={handleChangeValue}
                    maxLength={10}
                />
                <div className={styles.transferValueMask}>{transferValueMask} $</div>
            </div>
            <div className={styles.transferButton} onClick={doTransfer}>Перевести {transferValueMask} $</div>
        </div>
    )

}

export default TransferScreen