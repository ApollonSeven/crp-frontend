import cn from 'classnames'
import React from 'react'
import { Props } from './Toast.typings'
import stylesBase from './Toast.module.css'
import { mergeStyles } from 'shared/utils/mergeStyles'

export const Toast: React.FC<Props> = ({
    variant = 'Info',
    icon,
    styles,
    children,
}) => {
    const css = mergeStyles(stylesBase, styles)

    return (
        <div className={cn(css.toast, css[`toast${variant}`])}>
            <div className={css.content}>
                <div className={css.icon}>{icon}</div>
                {children}
            </div>
        </div>
    )
}
