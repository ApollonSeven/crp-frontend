import cn from 'classnames'
import React, { useMemo, useState } from 'react'
import styles from './Select.module.scss'
import { OptionsType, Props } from './Select.typings'
import { CarouselArrow } from 'shared/icons/generated'

const Select = ({
    value,
    onChange,
    options,
    isRounded = true,
    placeholder = 'Выбрать',
}: Props) => {
    const [showOptions, setShowOptions] = useState(false)

    const label = useMemo(
        () =>
            options.find(({ value: elValue }: OptionsType) => elValue === value)
                ?.label,
        [value]
    )

    const changeOptionsShowing = () => {
        setShowOptions(!showOptions)
    }

    return (
        <div
            className={cn(
                styles.container,
                showOptions && styles.clicked,
                isRounded && styles.rounded
            )}
        >
            <div
                className={cn(styles.select, label && styles.hasValue)}
                onClick={changeOptionsShowing}
            >
                {label || placeholder}
                <div className={styles.arrow}>
                    <CarouselArrow width={8} height={8} color="#fff" />
                </div>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.options}>
                    {options?.map(({ label, value: elValue }, i) => (
                        <div
                            className={cn(
                                styles.option,
                                value == elValue && styles.activeOption
                            )}
                            key={i}
                            onClick={() => {
                                changeOptionsShowing()
                                onChange?.(elValue)
                            }}
                        >
                            {label}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Select
