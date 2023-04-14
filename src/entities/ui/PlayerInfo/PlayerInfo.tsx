import React, { useState } from 'react'
import styles from './PlayerInfo.module.scss'
import { PlayerInfoProps } from './PlayerInfo.typings'
import { Wallet } from 'shared/icons/generated'
import { Card } from 'shared/icons/generated'
import { Button } from 'shared/ui/Button/Button'
import FamilyWindow from 'widgets/ui/FamilyWindow/FamilyWindow'

const PlayerInfo: React.FC<PlayerInfoProps> = ({ fullName,
    birthDate,
    address,
    workPlace,
    occupation,
    age,
    cash,
    card
    }) =>  {  
        const [showFamilyWindow, setShowFamilyWindow] = useState(false);

        const handleClick = () => {
          setShowFamilyWindow(true);
        };
        
        if (showFamilyWindow) {
          return <FamilyWindow onClose ={() => setShowFamilyWindow(false)} />
        }

        return (
          <div className={styles.container}>
            <div className={styles.block1}>
              <div className={styles.names}>
                <span className={styles.yellow}>{fullName}</span>
                <span className={styles.age}>{age}</span>
              </div>
              <div className={styles.spacing}>Дата рождения:  <span className={styles.desc}>{birthDate}</span></div>
              <div className={styles.spacing}><span>Адрес:</span> <span className={styles.desc}>{address}</span></div>
              <div className={styles.spacing}><span>Место работы:</span> <span className={styles.desc}>{workPlace}</span></div>
              <div className={styles.spacing}><span>Должность:</span> <span className={styles.desc}>{occupation}</span></div>
              <div className={styles.earnings}>
                <span>Средства:</span>  
                <span className={styles.card}>{card}</span> 
                <Card className={styles.cardIcon}/>
                <span className={styles.cash}>{cash}</span> 
                <Wallet className={styles.walletIcon}/> 
              </div>
              
            </div>  
            <div className={styles.buttons}>
                <Button type='button' size='Z' onClick={handleClick}>Родословная</Button>
                <Button type='button' size='Z'>Отменить удаление</Button>
              </div>
          </div>
        )
    }
    
export default PlayerInfo

