import React from 'react'
import { Props } from './HistoryScreen.typings'
import styles from './HistoryScreen.module.scss'

const HistoryScreen = (props: Props) => {

    return (
        <div className={styles.cardShape}>
            <div className={styles.mainInfo}>
                {props.history?.map((block) => (
                    <div className={styles.day} key={block.id}>
                        <div className={styles.operationDate}>
                            <div>{block.date}</div>
                        </div>
                        {block.operations?.map((record) => (
                        <div className={styles.operationRecord} key={record.id}>
                            <div className={styles.operationRecordContainer}>
                                <div className={styles.recordShortName}>{record.shortName}</div>
                                <div className={styles.recordOperation}>{record.operation}</div>
                                <div className={styles.recordValue}>{record.value}</div>
                            </div>
                        </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HistoryScreen;