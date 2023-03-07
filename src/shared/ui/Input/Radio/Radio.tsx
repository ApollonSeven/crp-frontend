import classNames from 'classnames'
import stylesBase from 'shared/ui/Input/Radio/Radio.module.scss'
import { Props } from './Radio.typings'
import { mergeStyles } from 'shared/utils/mergeStyles'
import React from 'react'

const Radio = ({
    value,
    onChange,
    valueName,
    variant = 'Dark',
    children,
    styles,
}: Props) => {
    const css = mergeStyles(stylesBase, styles)

    return (
        <div className={classNames(css.radio, css[`radio${variant}`])}>
            <button
                className={classNames(
                    css.btn,
                    value === valueName && css.radioChecked
                )}
                onClick={() => onChange(valueName)}
            ></button>
            <div className={css.label}>{children}</div>
        </div>
    )
}
export default Radio
