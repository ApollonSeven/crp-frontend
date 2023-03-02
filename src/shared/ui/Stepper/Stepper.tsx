import classNames from 'classnames'
import styles from './Stepper.module.css'
import { Props } from './Stepper.typings'
import React from 'react'

export const Stepper = ({ steps, currentStep }: Props) => {
    const stepper = Array.from({ length: steps }, (_, i) => i + 1)

    return (
        <div className={styles.stepper}>
            {stepper.map((el) => (
                <div className={styles.container} key={el}>
                    <div
                        className={classNames(
                            styles.step,
                            currentStep === el && styles.active
                        )}
                    >
                        {el}
                    </div>
                    {el !== steps && (
                        <>
                            <div className={styles.dots} />
                            <div
                                className={classNames(
                                    styles.dots,
                                    styles.margin
                                )}
                            />
                        </>
                    )}
                </div>
            ))}
        </div>
    )
}
