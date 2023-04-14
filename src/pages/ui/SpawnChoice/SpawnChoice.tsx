import React from 'react'
import styles from './SpawnChoice.module.css'
import { SpawnChoiceProps } from './SpawnChoice.typings'
import CityBox from 'widgets/ui/CityBox/CityBox'

const SpawnChoice: React.FC<SpawnChoiceProps> = ({ onChange }) => {

    const pros = ['Дешево', 'Лыжи'];
    const cons = ['Старшаки', 'Алкаши'];
    const cityName = 'Аблакетка';

    return (
        <div className={styles.container}>
            <span className={styles.title}>
                ВЫБЕРИТЕ ГОРОД В КОТОРОМ ВЫ НАЧНЕТЕ СВОЙ ПУТЬ
            </span>
        <div className={styles.cityBoxes}>
        <CityBox  pros={pros} cons={cons} cityName={cityName} onClick={onChange} backgroundType='LosSantos' />
        <CityBox  pros={pros} cons={cons} cityName={cityName} onClick={onChange} backgroundType='PaletoBay' />
        <CityBox  pros={pros} cons={cons} cityName={cityName} onClick={onChange} backgroundType='SandyShores' />
        </div>
        </div>
    )
}

export default SpawnChoice
