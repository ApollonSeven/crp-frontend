import React, { SVGProps } from 'react'
import { getProgressColor } from 'shared/utils/getProgressColor'

interface IFuelGaugeSvg extends SVGProps<SVGSVGElement> {
    percent: number
}

export const FuelGaugeSvg: React.FC<IFuelGaugeSvg> = ({
    percent = 0,
    ...props
}) => {
    const color = getProgressColor(percent)

    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 44 178"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M18.2356 153 C 30.7284 134.065 38 111.382 38 86.9998 C 38 54.9691 25.4505 25.8695 5 4.34961"
                stroke="#111111"
                strokeOpacity={0.5}
                strokeWidth="12"
            />
            <path
                d="M18.2356 153 C 30.7284 134.065 38 111.382 38 86.9998 C 38 54.9691 25.4505 25.8695 5 4.34961"
                stroke={color}
                strokeWidth="12.1"
                strokeDasharray="165"
                strokeOpacity={0.8}
                strokeDashoffset={
                    185 - 185 * percent < 165 ? 185 - 185 * percent : 165
                }
            />

            <path
                d="M5 18.6502C9.37715 14.0442 13.3923 9.09088 17 3.83594"
                stroke="#111"
                strokeWidth="12.1"
                transform="translate(0 151)"
                strokeOpacity={0.5}
            />
            <path
                d="M5 18.6502C9.37715 14.0442 13.3923 9.09088 17 3.83594"
                stroke={color}
                strokeWidth="12"
                transform="translate(0 151)"
                strokeDasharray="185"
                strokeOpacity={0.8}
                strokeDashoffset={185 - 185 * percent}
            />
        </svg>
    )
}
