import React, { useState } from 'react';
import styles from './FamilyWindow.module.css';
import { FamilyWindowProps } from './FamilyWindow.typings';
import CheckBox from '../CheckBox/CheckBox';

enum Tab {
  Family = 'family',
  Requests = 'requests',
  Add = 'add',
}

const FamilyWindow: React.FC<FamilyWindowProps> = () => {
  const [activeTab, setActiveTab] = useState(Tab.Family);
  const [border1Style, setBorder1Style] = useState(styles.border1);
  const [border2Style, setBorder2Style] = useState(styles.border2);
  const [addButtonStyle, setAddButtonStyle] = useState('');
  const [searchInput, setsearchInput] = useState('');
  // const handleSearch = () => { ////void}

  const handleTabClick = (tab: Tab) => {
    setActiveTab(tab);
    if (tab === Tab.Family) {
      setBorder1Style(styles.border1Active);
      setBorder2Style(styles.border2);
    } else if (tab === Tab.Requests) {
      setBorder1Style(styles.border1);
      setBorder2Style(styles.border2Active);
    } else {
      setBorder1Style(styles.border1);
      setBorder2Style(styles.border2);
    }
    if (tab === Tab.Add) {
      setAddButtonStyle(styles.active);
    } else {
      setAddButtonStyle('');
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.tabs}>
        <div className={`${styles.tabdiv} ${activeTab === Tab.Family ? styles.active : ''}`} onClick={() => handleTabClick(Tab.Family)}>
          <span>Родственники</span>
        </div>
        <div className={`${styles.tabdiv} ${activeTab === Tab.Requests ? styles.active : ''}`} onClick={() => handleTabClick(Tab.Requests)}>
          <span className={styles.request}>Заявки</span>
        </div>
        <button className={`${styles.addbutton} ${activeTab === Tab.Add ? styles.active : ''} ${addButtonStyle}`} onClick={() => handleTabClick(Tab.Add)}>
          Добавить
        </button>
      </div>
      <div className={styles.border}>
        <div className={`${border1Style}`}> </div>
        <div className={`${border2Style}`}></div>
      </div>
      {activeTab === Tab.Family && (
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
      {activeTab === Tab.Requests && (
       
        <div className={styles.columns3}>
       <div> Лорд Гаритос </div> <div> 46 лет</div> <div>Отец</div> <CheckBox onClick={function (): void {
              throw new Error('Function not implemented.');
            } }/>
       <div> Утер </div> <div> 46 лет</div> <div>Тренер</div> <CheckBox onClick={function (): void {
              throw new Error('Function not implemented.');
            } }/>
        </div>

      )}
      {activeTab === Tab.Add && (
        <div>
        <input type="text" value={searchInput} onChange={(e) => setsearchInput(e.target.value)} className={styles.searchID} placeholder="Статический ID" />
        <button className={styles.searchButton}>Подтвердить</button>
      </div>
      )}
    </div>
  );
}

export default FamilyWindow;