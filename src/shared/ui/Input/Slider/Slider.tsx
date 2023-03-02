import classNames from 'classnames'
import styles from 'shared/ui/Input/Slider/Slider.module.css'
import { Props } from './Slider.typings'
import React from 'react'

const Slider = ({
    value = 40,
    onChange,
    maxValue,
    minValue,
    size = 'xl',
}: Props) => {
    return (
        <input
            type="range"
            value={value}
            min={minValue}
            max={maxValue}
            step="1"
            onChange={(e) => onChange(+e.target.value)}
            className={classNames(
                styles.progress,
                size === 'xs' && styles.progressSmall
            )}
            style={{
                background: `linear-gradient(to right, #ffd80e 0%, #ffd80e ${value}%, #393939 ${value}%, #393939 100%)`,
            }}
        />
    )
}

export default Slider
