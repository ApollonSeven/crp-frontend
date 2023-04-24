import * as React from 'react'
import { SVGProps } from 'react'

export const Mood = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M15 0C6.75 0 0 6.75 0 15C0 23.25 6.75 30 15 30C23.25 30 30 23.25 30 15C30 6.75 23.25 0 15 0ZM20.25 9C21.45 9 22.5 10.05 22.5 11.25C22.5 12.45 21.45 13.5 20.25 13.5C19.05 13.5 18 12.45 18 11.25C18 10.05 19.05 9 20.25 9ZM9.75 9C10.95 9 12 10.05 12 11.25C12 12.45 10.95 13.5 9.75 13.5C8.55 13.5 7.5 12.45 7.5 11.25C7.5 10.05 8.55 9 9.75 9ZM15 24C11.1 24 7.8 21.45 6.6 18H23.4C22.2 21.45 18.9 24 15 24Z"
            fill={props.color}
        />
    </svg>
)
