import React from 'react'
import { Props } from './Button.typings'
import stylesBase from 'shared/ui/Button/Button.module.scss'
import cn from 'classnames'
import { mergeStyles } from 'shared/utils/mergeStyles'

export interface ButtonProps
    extends Props,
        React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<ButtonProps> = ({
    size = 'S',
    disabled,
    children,
    type = 'button',
    styles,
    variant = 'Primary',
    ...buttonProps
}) => {
    const css = mergeStyles(stylesBase, styles)

    return (
        <button
            type={type}
            className={cn(
                css.btn,
                css[`size${size}`],
                disabled && css.disabled,
                css[`btn${variant}`]
            )}
            disabled={disabled}
            {...buttonProps}
        >
            <p>{children}</p>
        </button>
    )
}
