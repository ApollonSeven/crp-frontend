import React, { SVGProps } from 'react'

interface ITachometerSvg extends SVGProps<SVGSVGElement> {
    percent: number
}

export const TachometerSvg: React.FC<ITachometerSvg> = ({
    percent = 0,
    ...props
}) => {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 100 133"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M56 126.115C27.6229 121.354 6 96.6748 6 66.9448C6 33.8077 32.8629 6.94482 66 6.94482C77.1356 6.94482 87.5627 9.9784 96.5 15.2642"
                stroke="#111111"
                strokeWidth="12"
                strokeOpacity={0.4}
            />
            <path
                d="M56 126.115C27.6229 121.354 6 96.6748 6 66.9448C6 33.8077 32.8629 6.94482 66 6.94482C77.1356 6.94482 87.5627 9.9784 96.5 15.2642"
                stroke="#fff"
                strokeWidth="12"
                strokeDasharray="215"
                strokeDashoffset={215 - percent * 215}
                strokeOpacity={0.8}
            />
            <rect
                x="55.4438"
                y="128.19"
                width="1"
                height="8"
                transform="rotate(-170.476 55.4438 128.19)"
                fill="white"
                strokeOpacity={0.8}
            />
            <rect
                x="39.7961"
                y="120.936"
                width="0.5"
                height="3"
                transform="rotate(-153.802 39.7961 120.936)"
                fill="white"
                strokeOpacity={0.8}
            />
            <rect
                x="25.3733"
                y="111.099"
                width="0.5"
                height="3"
                transform="rotate(-137.042 25.3733 111.099)"
                fill="white"
                strokeOpacity={0.8}
            />
            <rect
                x="12.1155"
                y="97.628"
                width="1"
                height="7.99501"
                transform="rotate(-120.353 12.1155 97.628)"
                fill="white"
                strokeOpacity={0.8}
            />
            <rect
                x="7.73926"
                y="81.3513"
                width="0.5"
                height="3"
                transform="rotate(-103.423 7.73926 81.3513)"
                fill="white"
                strokeOpacity={0.8}
            />
            <rect
                x="6.0752"
                y="63.8782"
                width="0.5"
                height="3"
                transform="rotate(-86.6839 6.0752 63.8782)"
                fill="white"
                strokeOpacity={0.8}
            />
            <rect
                x="7.59277"
                y="46.0676"
                width="1"
                height="7.99882"
                transform="rotate(-69.8629 7.59277 46.0676)"
                fill="white"
                strokeOpacity={0.8}
            />
            <rect
                x="17.6265"
                y="31.4368"
                width="0.5"
                height="3"
                transform="rotate(-53.1304 17.6265 31.4368)"
                fill="white"
                strokeOpacity={0.8}
            />
            <rect
                x="29.9087"
                y="19.0052"
                width="0.5"
                height="3"
                transform="rotate(-36.4513 29.9087 19.0052)"
                fill="white"
                strokeOpacity={0.8}
            />
            <rect
                x="44.8831"
                y="8.64008"
                width="1"
                height="7.99927"
                transform="rotate(-19.491 44.8831 8.64008)"
                fill="white"
                strokeOpacity={0.8}
            />
            <rect
                x="62.304"
                y="7.0531"
                width="0.5"
                height="3"
                transform="rotate(-2.87423 62.304 7.0531)"
                fill="white"
                strokeOpacity={0.8}
            />
            <rect
                x="80.3154"
                y="8.6615"
                width="0.5"
                height="3"
                transform="rotate(14.1883 80.3154 8.6615)"
                fill="white"
                strokeOpacity={0.8}
            />
            <rect
                x="96.4927"
                y="12.9117"
                width="1"
                height="8.00189"
                transform="rotate(30.5308 96.4927 12.9117)"
                fill="white"
                strokeOpacity={0.8}
            />
        </svg>
    )
}
