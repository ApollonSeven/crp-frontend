import React, { ChangeEvent, useState } from 'react'
import styles from './TransferScreen.module.scss'
import cardLogo from '../assets/cardLogo.png'
import phoneBookPic from '../assets/phoneBookPic.svg'
import { Props } from './TransferScreen.typings'
import classNames from 'classnames'

enum InputSelect { card, phone }

const TransferScreen = (props: Props) => {

    const [inputSelect, setInputSelect] = useState(InputSelect.card)
    const [transferValue, setTransferValue] = useState('')
    const [recipient, setRecipient] = useState('')
    const transferValueMask = Number(transferValue).toLocaleString()
    const cardOrPhoneSelectedMaxLength = inputSelect == InputSelect.card ? 19 : 17
    const countryCode = '+'; // Префикс номера телефона

    const handleClick = (type: any) => {
        if (type == 'card') {
            setInputSelect(InputSelect.card)
            setRecipient('')
        }
        if (type == 'phone') {
            setInputSelect(InputSelect.phone)
            setRecipient('+7')
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

    const formatPhoneNumber = (phoneNumber: string) => {
        const formattedPhoneNumber = phoneNumber.replace(/(\d{1,3})(\d{3})(\d{3})(\d{2})(\d{2})/, `${countryCode} $1 ($2)-$3-$4-$5`);
        return formattedPhoneNumber.trim();
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
                        className={styles.recipientInput}
                        type='text'
                        placeholder={inputSelect == InputSelect.card ? 'Карта получателя' : 'Телефон получателя'}
                        onChange={handleRecipientNumberChange}
                        value={selectorValueFunction(recipient)}
                        maxLength={cardOrPhoneSelectedMaxLength}
                    //onFocus={handleRecipientFocus}
                    //onBlur={handleRecipientBlur}
                    />
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
            <div className={styles.transferButton}>Перевести {transferValueMask} $</div>
        </div>
    )

}

export default TransferScreen