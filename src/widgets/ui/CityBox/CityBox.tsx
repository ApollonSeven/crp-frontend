import React from 'react'
import styles from './CityBox.module.css'
import { CityBoxProps } from './CityBox.typings';




const CityBox: React.FC<CityBoxProps> = ({ pros, cons, cityName, onClick, backgroundType }) => {
  
  
  let backgroundTypeClass;

  if (backgroundType === 'LosSantos') {
    backgroundTypeClass = styles.losSantos;
  } else if (backgroundType === 'PaletoBay') {
    backgroundTypeClass = styles.paletoBay;
  } else if (backgroundType === 'SandyShores') {
    backgroundTypeClass = styles.sandyShores;
  }

    return (

<div onClick={onClick} className= {  `${styles.block1} ${backgroundTypeClass}` }>
      <span className={styles.text1}>{cityName}</span>
      <p className={styles.pros}>Плюсы</p>
      <ul>
        {pros.map((plus) => (
          <li key={plus}>
            <span className={styles.defaultText}>{plus}</span>
          </li>
        ))}
        <hr />
      </ul>
      <p className={styles.cons}>Минусы</p>
      <ul className={styles.ul2}>
        {cons.map((minus) => (
          <li key={minus}>
            <span className={styles.consText}>{minus}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CityBox;
