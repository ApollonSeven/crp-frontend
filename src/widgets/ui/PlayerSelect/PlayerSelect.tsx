import React, { useState } from 'react'
import { PlayerSelectProps } from './PlayerSelect.typings'
import styles from './PlayerSelect.module.scss'

const PlayerSelect: React.FC<PlayerSelectProps> = ({ playerMembers, onChange }) => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleClick = (index: number) => {
    setActiveIndex(index === activeIndex ? -1 : index);
    onChange();
  };

  return (
    <div className={styles.container}>
      {playerMembers.map((member, index) => (
        <div
          onClick={() => handleClick(index)}
          className={`${styles.box} ${activeIndex === index ? styles.active : ''}`}
          key={index}
        >
          <div className={styles.names}>
            <span className={styles.yellow}>{member.fullName}</span>
            <span className={styles.id}>#{member.id}</span>
          </div>
          <div>
            <span className={styles.desc}>
              {member.age}, {member.rank}
            </span>
          </div>
        </div>
      ))}
      <div className={styles.button}>
        <div className={styles.plus}>+</div>
      </div>
    </div>
  )
}

export default PlayerSelect

