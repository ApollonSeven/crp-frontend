/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import styles from './FamilyWindow.module.css';
import { FamilyWindowProps } from './FamilyWindow.typings';
import CheckBox from '../CheckBox/CheckBox';
import cn from 'classnames';
import Select from 'shared/ui/Input/Select/Select';


const FamilyWindow: React.FC<FamilyWindowProps> = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [searchInput, setsearchInput] = useState('');
  // const handleSearch = () => { ////void}
  const handleTabClick = (tabIndex: React.SetStateAction<number>) => {
    setActiveTab(tabIndex);
  };
  const options = [
    { label: 'Доритос', value: 'option-1' },
    { label: 'Швепс', value: 'option-2' },
    { label: 'Булдак', value: 'option-3' },
  ]
  
  const [selectedValue, setSelectedValue] = useState('')
  
  const handleChange = (value: string) => {
    setSelectedValue(value)
  }

  return (
    <div className={styles.container}>
      <div className={styles.tabs}>
        <div  className={cn(styles.tabdiv, activeTab === 1 && styles.active)} onClick={() => handleTabClick(1)}>
          <span>Родственники</span>
        </div>
        <div className={cn(styles.tabdiv, activeTab === 2 && styles.active)} onClick={() => handleTabClick(2)}>
          <span className={styles.request}>Заявки</span>
        </div>
        <button className={cn(styles.addbutton, activeTab === 3 && styles.active)} onClick={() => handleTabClick(3)}>
          Добавить
        </button>
      </div>
      <div className={styles.border}>
        <div className={cn(styles.border1, activeTab === 1 && styles.active)}> </div>
        <div className={cn(styles.border2, activeTab === 2 && styles.active)}></div>
      </div>
      {activeTab === 1 && (
        <div className= {styles.family}>
          <div className={styles.columns2}>
              <div>Лорд Гаритос </div> <div>46 лет</div> <div>Отец</div>
              <div>Лорд Гаритос </div> <div>46 лет</div> <div>Отец</div>
              <div>Лорд Гаритос </div> <div>46 лет</div> <div>Отец</div>
              <div>Лорд Гаритос </div> <div>46 лет</div> <div>Отец</div>
              <div>Лорд Гаритос </div> <div>46 лет</div> <div>Отец</div>
              <div>Лорд Гаритос </div> <div>46 лет</div> <div>Отец</div>
              <div>Лорд Гаритос </div> <div>46 лет</div> <div>Отец</div>
              <div>Лорд Гаритос </div> <div>46 лет</div> <div>Отец</div>
              <div>Лорд Гаритос </div> <div>46 лет</div> <div>Отец</div>
              <div>Лорд Гаритос </div> <div>46 лет</div> <div>Отец</div>
              <div>Лорд Гаритос </div> <div>46 лет</div> <div>Отец</div>
          </div>
        </div>
      )}
      {activeTab === 2 && (
       
        <div className={styles.columns3}>
       <div> Лорд Гаритос </div> <div> 46 лет</div> <div>Отец</div> <CheckBox onClick={function (): void {
              throw new Error('Function not implemented.');
            } }/>
       <div> Утер </div> <div> 46 лет</div> <div>Тренер</div> <CheckBox onClick={function (): void {
              throw new Error('Function not implemented.');
            } }/>
        </div>

      )}
      {activeTab === 3 && (
        <div className={styles.addTab}>
        <input type="text" value={searchInput} onChange={(e) => setsearchInput(e.target.value)} className={styles.searchID} placeholder="Статический ID" />
        <Select
      value={selectedValue}
      onChange={handleChange}
      options={options}
      isRounded={true}
      placeholder="Роль"
    />
        <button className={styles.searchButton}>Подтвердить</button>
      </div>
      )}
    </div>
  );
}

export default FamilyWindow;