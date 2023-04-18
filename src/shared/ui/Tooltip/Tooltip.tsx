import React from 'react'
import { Props } from 'shared/ui/Tooltip/Tooltip.typings'
import RcTooltip from 'rc-tooltip'
import styles from 'shared/ui/Tooltip/Tooltip.module.scss'
import classNames from 'classnames'

export const Tooltip: React.FC<Props> = (props) => {
    const { children, overlayClassName } = props

    return (
        <RcTooltip
            {...props}
            destroyTooltipOnHide
            overlayClassName={classNames(
                !overlayClassName && styles.overlay,
                overlayClassName
            )}
        >
            {children}
        </RcTooltip>
    )
}
