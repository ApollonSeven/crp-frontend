import React, { useMemo } from 'react'
import { Props } from 'shared/ui/ProgressSvg/ProgressSvg.typings'
import { getProgressColor } from 'shared/utils/getProgressColor'

export const ProgressSvg: React.FC<Props> = ({
    Icon,
    percent = 0,
    ...props
}) => {
    const color = getProgressColor(percent)
    const id = useMemo(
        () => Math.floor(Math.random() * Date.now() * percent),
        []
    )

    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Icon color={`url(#${id})`} width={'100%'} height={'100%'} />
            <defs>
                <linearGradient
                    id={id.toString()}
                    x1="15"
                    y1="0"
                    x2="15"
                    y2="30"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="white" />
                    <stop offset={1 - percent} stopColor="white" />
                    <stop stopColor={color} />
                </linearGradient>
            </defs>
        </svg>
    )
}
