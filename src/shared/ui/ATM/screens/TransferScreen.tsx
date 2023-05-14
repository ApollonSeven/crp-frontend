import React, { ChangeEvent, useState } from 'react'
import styles from './TransferScreen.module.scss'
import cardLogo from '../assets/cardLogo.png'
import phoneBookPic from '../assets/phoneBookPic.svg'
import { Props } from './TransferScreen.typings'
import classNames from 'classnames'
import { setTransfer } from '../modules/setTransfer'
import {Screen} from '../ATM.config'

enum InputSelect { card, phone }

const TransferScreen = (props: Props) => {

    const [inputSelect, setInputSelect] = useState(InputSelect.card)
    const [transferValue, setTransferValue] = useState('')
    const [recipient, setRecipient] = useState('')
    const transferValueMask = Number(transferValue).toLocaleString()
    const cardOrPhoneSelectedMaxLength = inputSelect == InputSelect.card ? 19 : 10
    let maskPhoneNumber = ''
  

    const handleClick = (type: any) => {
        if (type == 'card') {
            setInputSelect(InputSelect.card)
            setRecipient('')
        }
        if (type == 'phone') {
            setInputSelect(InputSelect.phone)
            setRecipient('')
        }
    }
    /*--------------chars validation-----------------*/
    const handleRecipientNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
        const inputRecipientNumber = event.currentTarget.value.replace(/\D/g, ''); // Фильтрация только цифр
        setRecipient(inputRecipientNumber)
    }

    /*--------------card mask block--------------------*/

    const formatRecipientNumber = (recipient: string) => {
        const formattedRecipientNumber = recipient.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ')
        return formattedRecipientNumber.trim()
    }

    /*------------------------phone mask block----------------------*/

    // const formatPhoneNumber = (phoneNumber: string) => {
    //     const formattedPhoneNumber = phoneNumber.replace(/(\d{1,3})?(\d{0,3})?(\d{0,3})?(\d{0,2})?(\d{0,2})?/, (match, p1, p2, p3, p4, p5)
    // };

    const formatPhoneNumber = (phoneNumber:string) => {
        const digitsOnly = phoneNumber.replace(/\D/g, ''); // Фильтрация только цифр
        const areaCode = digitsOnly.slice(0, 3).padEnd(3, '_');
        const firstPart = digitsOnly.slice(3, 6).padEnd(3, '_');
        const secondPart = digitsOnly.slice(6, 8).padEnd(2, '_');
        const thirdPart = digitsOnly.slice(8, 10).padEnd(2, '_');
        const formattedNumber = `(${areaCode}) ${firstPart}-${secondPart}-${thirdPart}`;
        maskPhoneNumber = formattedNumber
        return recipient;
      };


    /*------------------------transfer value block------------------*/

    const handleChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
        const newTransferValue = event.currentTarget.value.replace(/\D/g, ''); // Фильтрация только цифр
        setTransferValue(newTransferValue)
    }

    /*-----------------------selector function---------------------*/

    const selectorValueFunction = (recipient: string) => {
        if (inputSelect == InputSelect.card) return formatRecipientNumber(recipient)
        else return formatPhoneNumber(recipient)
    }

    const doTransfer = () =>{
        if (inputSelect == InputSelect.card){
            if (recipient.length == 16){
                setTransfer(recipient, transferValue)
                props.onSelect(Screen.Confirmation, 'Перевод успешно совершен')
            }
        }
        if (inputSelect == InputSelect.phone){
            if (recipient.length == 10){
                setTransfer(`+7 ${recipient}`, transferValue)
                props.onSelect(Screen.Confirmation, 'Перевод успешно совершен')
            }
        }

    }

    return (
        <div className={styles.cardShape}>
            <div className={styles.mainInfo}>
                <div className={styles.header}>
                    <img src={cardLogo} />
                    <div>{props.cardBalance}</div>
                </div>
                <div className={styles.cardOrPhone}>
                    <div className={classNames(styles.cardOrPhoneSelect, `${inputSelect == InputSelect.phone && styles.cardOrPhoneSelectWhiteBackground}`)} onClick={() => handleClick('card')}>Карта</div>
                    <div className={classNames(styles.cardOrPhoneSelect, `${inputSelect == InputSelect.card && styles.cardOrPhoneSelectWhiteBackground}`)} onClick={() => handleClick('phone')}>Телефон</div>
                </div>
                <div className={styles.recipient}>
                    <img className={classNames(`${inputSelect == InputSelect.phone ? styles.cardLogoHide : styles.cardLogo}`)} src={cardLogo} />
                    <input
                        className={inputSelect == InputSelect.phone ? styles.recipientInputHide : styles.recipientInput}
                        type='text'
                        placeholder={inputSelect == InputSelect.card ? 'Карта получателя' : 'Телефон получателя'}
                        onChange={handleRecipientNumberChange}
                        value={selectorValueFunction(recipient)}
                        maxLength={cardOrPhoneSelectedMaxLength}
                        autoFocus
                    />
                    <div className={inputSelect == InputSelect.phone ? styles.phoneMaskBlock : styles.phoneMaskBlockHide}>+7 {maskPhoneNumber}</div>
                    <img className={inputSelect == InputSelect.card ? styles.phoneBookLogoHide : styles.phoneBookLogo} src={phoneBookPic} />
                </div>
                {inputSelect == InputSelect.phone &&
                    <div className={styles.phoneBookContainer}>
                        <div>{props.recipient}</div>
                        <div>Деньги поступят на карту</div>
                    </div>}
                <input
                    id='transferValue'
                    type='text'
                    placeholder='Введите сумму перевода'
                    value={transferValue}
                    className={transferValue == '' ? styles.valueTransfer : styles.valueTransferHide}
                    onChange={handleChangeValue}
                />
                <div className={styles.transferValueMask}>{transferValueMask} $</div>
            </div>
            <div className={styles.transferButton} onClick={doTransfer}>Перевести {transferValueMask} $</div>
        </div>
    )

}

export default TransferScreen