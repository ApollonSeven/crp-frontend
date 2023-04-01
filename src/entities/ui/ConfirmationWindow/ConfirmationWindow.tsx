import React from 'react'
import styles from './ConfirmationWindow.module.css'
import { ConfirmationWindowProps } from './ConfirmationWindow.typings'
import ConfirmButton from 'widgets/ui/ConfirmButton/ConfirmButton'
import { CrossOutline } from 'shared/icons/generated'



const ConfirmationWindow: React.FC<ConfirmationWindowProps> = (
) => {
    return (
        <div className={styles.container}>
            <CrossOutline className={styles.close}></CrossOutline> 
           <div className={styles.box}>Вы точно хотите удалить персонажа?
           </div>
          <div className={styles.buttons}> <ConfirmButton  onChange={function (): void {
                throw new Error('Function not implemented.')
            } }></ConfirmButton> </div>
           
        </div>
    )
    }
export default ConfirmationWindow