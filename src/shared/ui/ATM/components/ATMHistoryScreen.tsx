import React from 'react'
import { Props } from './ATMHistoryScreen.typings'
import stylesBase from './ATMHistoryScreen.module.scss'

const ATMHistoryScreen = (props: Props) => {

    return (
        <div className={stylesBase.cardShape}>
            <div className={stylesBase.mainInfo}>
                {props.history?.map((block) => (
                    <div className={stylesBase.day} key={block.id}>
                        <div className={stylesBase.operationDate}>
                            <div>{block.date}</div>
                        </div>
                        {block.operations?.map((record) => (
                        <div className={stylesBase.operationRecord} key={record.id}>
                            <div className={stylesBase.operationRecordContainer}>
                                <div className={stylesBase.recordShortName}>{record.shortName}</div>
                                <div className={stylesBase.recordOperation}>{record.operation}</div>
                                <div className={stylesBase.recordValue}>{record.value}</div>
                            </div>
                        </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ATMHistoryScreen;