import React, {useState} from 'react';
import styles from './PlayerSelect.module.css'
import { PlayerSelectProps } from './PlayerSelect.typings'

const PlayerSelect: React.FC<PlayerSelectProps> = ({ onChange, fullName, rank, age, id}) => 
{ const [buttons, setButtons] = useState<number[]>([]);

    const addNewButton = () => {
      const newButton = buttons.length + 1;
      setButtons([...buttons, newButton]);

     
      
    };
    return (
        <div>
        <div onClick={onChange} className={styles.container}>
            <div className={styles.names}> <span className={styles.yellow}>{fullName}</span> <span className={styles.id}>#{id}</span> </div>
            <div> <span className={styles.desc}> {age}, {rank} </span> </div>
        </div>

       
        {buttons.map((button) => (
            <div key={button} onClick={onChange} className={styles.container2}>
        <div className={styles.names}> <span className={styles.yellow}>{fullName}</span> <span className={styles.id}>#{id}</span> </div>
        <div> <span className={styles.desc}> {age}, {rank} </span> </div>
        </div>
        
      )
      
      )}

    <div onClick={addNewButton} className={styles.button} > <div className={styles.plus}>+</div></div>




        </div>
    )
    }

export default PlayerSelect

