import React from 'react'
import styles from './AutoModuleBlock.module.css'

export const AutoModuleBlock = (props: any) => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                {props.title}
                <span
                    className={
                        props.percent < 30
                            ? styles.red
                            : props.percent < 60
                            ? styles.yellow
                            : styles.green
                    }
                >
                    {' '}
                    ({props.percent}%)
                </span>
            </div>
            <div className={styles.description}>{props.description}</div>
        </div>
    )
}
