import React, { SVGProps } from 'react'
import { getProgressColor } from 'shared/utils/getProgressColor'

interface ISpeedometerSvg extends SVGProps<SVGSVGElement> {
    percent: number
}

export const SpeedometerSvg: React.FC<ISpeedometerSvg> = ({
    percent,
    ...props
}) => {
    const color = getProgressColor(1 - percent)

    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 203 173"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M34.5176 168.35C17.2231 151.145 6.51758 127.322 6.51758 101C6.51758 48.5329 49.0505 6 101.518 6C153.985 6 196.518 48.5329 196.518 101C196.518 127.323 185.812 151.145 168.518 168.35"
                stroke="#111111"
                strokeWidth="12"
                strokeOpacity={0.4}
            />
            <path
                d="M34.5176 168.35C17.2231 151.145 6.51758 127.322 6.51758 101C6.51758 48.5329 49.0505 6 101.518 6C153.985 6 196.518 48.5329 196.518 101C196.518 127.323 185.812 151.145 168.518 168.35"
                strokeWidth="12"
                stroke={color}
                fill="none"
                strokeDasharray="450"
                strokeDashoffset={450 - percent * 450}
                strokeOpacity={0.8}
            />
        </svg>
    )
}
