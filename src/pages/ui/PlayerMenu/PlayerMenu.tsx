import React from 'react';
import styles from './PlayerMenu.module.scss';
import { PlayerMenuProps } from './PlayerMenu.typings';
import Subscription from 'entities/ui/Subscription/Subscription';
import { PlayerInfoProps } from 'entities/ui/PlayerInfo/PlayerInfo.typings';
import PlayerInfo from 'entities/ui/PlayerInfo/PlayerInfo';
import PlayerSelect from 'widgets/ui/PlayerSelect/PlayerSelect';
import TimerWidget from 'widgets/ui/TimerWidget/TimerWidget';
import { Button } from 'shared/ui/Button/Button';
const PlayerMenu: React.FC<PlayerMenuProps> = ({price}) => {
  const playerInfoProps: PlayerInfoProps = {
    fullName: 'Megaman X',
    birthDate: '08/02/20XX',
    address: 'Neo Arcadia',
    workPlace: 'Maverick Hunter HQ',
    occupation: 'Maverick Hunter',
    age: '18',
    cash: '$1000',
    card: '$2000', }

    const players = [
      { id: 235235, fullName: 'Megaman X', age: 18, rank: 'Class B' },
      { id: 235235, fullName: 'Megaman X', age: 18, rank: 'Class B' }
    ];
   
  return (
    <div className={styles.container}>
      <div className={styles.title}> Выбор Персонажа</div>
       <div className={styles.select}> <PlayerSelect  playerMembers={players} onChange={function (): void {
       ///
      } }/> </div>
        <div className={styles.box1}>
        <Subscription date={'22.03.1425 - 22.03.1525'}/>
        </div>
         <div className={styles.box2}> <PlayerInfo {...playerInfoProps}/> </div>
         <div className={styles.timer}> <TimerWidget time={86590}/> </div>
        <div className={styles.button}> <Button type='button' size='Z' > {price}</Button>  </div>
        
    </div>
  );
};

export default PlayerMenu;