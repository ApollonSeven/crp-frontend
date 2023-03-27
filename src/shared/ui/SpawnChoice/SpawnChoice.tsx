/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import styles from './SpawnChoice.module.css'
import { SpawnChoiceProps } from './SpawnChoice.typings'

const SpawnChoice: React.FC<SpawnChoiceProps> = ({ onChange }) => {
    return (
        <div className={styles.container}>
            <span className={styles.title}>
                ВЫБЕРИТЕ ГОРОД В КОТОРОМ ВЫ НАЧНЕТЕ СВОЙ ПУТЬ
            </span>
            <div onClick={onChange} className={styles.block1}>
                <span className={styles.text1}> Лос-Сантос </span>
                <p className={styles.pros}> Плюсы </p>
                <ul>
                    <li>
                        <span className={styles.defaultText}>
                            Хорошая инфраструктура
                        </span>
                    </li>
                    <li>
                        <span className={styles.defaultText}>
                            Много рабочих мест на промышленном производстве
                        </span>
                    </li>
                    <li>
                        <span className={styles.defaultText}>
                            Большой выбор жилья
                        </span>
                    </li>
                    <hr></hr>
                </ul>
                <p className={styles.cons}> Минусы </p>
                <ul className={styles.ul2}>
                    <li>
                        <span className={styles.consText}>
                            Большой налог
                        </span>
                    </li>
                    <li>
                        <span className={styles.consText}>
                            Высокие цены
                        </span>
                    </li>
                    <li>
                        
                        <span className={styles.consText}>
                            Продление визы
                        </span>
                    </li>
                    <li>
                        <span className={styles.consText}>
                            Высокая загрязненность воздуха
                        </span>
                    </li>
                    <li>
                        <span className={styles.consText}>
                            Высокая преступность
                        </span>
                    </li>
                </ul>
            </div>
            <div onClick={onChange} className={styles.block2}>
                <span className={styles.text1}> Сенди Шорс </span>
                <p className={styles.pros}> Плюсы </p>
                <ul>
                    <li>
                        <span className={styles.defaultText}>
                            Гражданство
                        </span>
                    </li>
                    <li>
                        <span className={styles.defaultText}>
                            Низкие цены
                        </span>
                    </li>
                    <li>
                        <span className={styles.defaultText}>
                            Среднее количество рабочихмест на фермерских
                            хозяйствах
                        </span>
                    </li>
                    <li>
                        <span className={styles.defaultText}>
                            Чистый воздух
                        </span>
                    </li>
                    <li>
                        <span className={styles.defaultText}>
                            Низкие налог
                        </span>
                    </li>
                    <hr></hr>
                </ul>
                <p className={styles.cons}> Минусы </p>
                <ul className={styles.ul2}>
                    <li>
                        <span className={styles.consText}>
                            Плохая инфраструктура
                        </span>
                    </li>
                    <li>
                        <span className={styles.consText}>
                            Жилье эконом класса
                        </span>
                    </li>
                </ul>
            </div>
            <div onClick={onChange} className={styles.block3}>
                <span className={styles.text1}> Палетто Бэй </span>
                <p className={styles.pros}> Плюсы </p>
                <ul>
                    <li>
                        <span className={styles.defaultText}>
                            Гражданство
                        </span>
                    </li>
                    <li>
                        <span className={styles.defaultText}>
                            Атмосфера маленького города
                        </span>
                    </li>
                    <li>
                        <span className={styles.defaultText}> 
                            Чистый воздух
                        </span>
                    </li>
                    <li>
                        <span className={styles.defaultText}>
                            Туристические зоны
                        </span>
                    </li>
                    <hr></hr>
                </ul>
                <p className={styles.cons}> Минусы </p>
                <ul className={styles.ul2}>
                    <li>
                        <span className={styles.consText}>
                            Дикие животные рядом с городом
                        </span>
                    </li>
                    <li>
                        <span className={styles.consText}>
                            В лесу регулярно теряются люди и находят
                            человеческие останки
                        </span>
                    </li>
                    <li>
                        <span className={styles.consText}>
                            Маленькое количество рабочих мест
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SpawnChoice
