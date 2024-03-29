import * as React from 'react'
import { SVGProps } from 'react'

export const Ars = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 16 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M4.47598 13.0366C3.07553 12.2839 2.00165 11.1062 1.43758 9.7045C0.873508 8.30281 0.854216 6.76399 1.383 5.35065C1.91177 3.9373 2.95585 2.73702 4.33705 1.95464C5.71825 1.17226 7.35097 0.85627 8.95658 1.06059C10.5622 1.26491 12.0412 1.97688 13.1412 3.075C14.2412 4.17312 14.894 5.58933 14.9882 7.08195C15.0824 8.57458 14.6121 10.0511 13.6577 11.2596C12.7033 12.468 11.3239 13.3335 9.75485 13.7083"
            stroke={props.color}
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.3501 10.7393L2.53467 10.7443L7.93796 1.50574L13.3501 10.7393Z"
            stroke={props.color}
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.75332 8.84093C8.75333 8.93329 8.73383 9.02474 8.69591 9.11007C8.658 9.19539 8.60242 9.27293 8.53235 9.33823C8.46227 9.40354 8.37908 9.45535 8.28752 9.4907C8.19597 9.52604 8.09783 9.54423 7.99873 9.54423C7.89963 9.54423 7.80149 9.52604 7.70994 9.4907C7.61838 9.45535 7.53519 9.40354 7.46511 9.33823C7.39504 9.27293 7.33946 9.19539 7.30155 9.11007C7.26363 9.02474 7.24413 8.93329 7.24414 8.84093C7.24413 8.74858 7.26363 8.65713 7.30155 8.5718C7.33946 8.48647 7.39504 8.40894 7.46511 8.34363C7.53519 8.27832 7.61838 8.22652 7.70994 8.19117C7.80149 8.15583 7.89963 8.13763 7.99873 8.13763C8.09783 8.13763 8.19597 8.15583 8.28752 8.19117C8.37908 8.22652 8.46227 8.27832 8.53235 8.34363C8.60242 8.40894 8.658 8.48647 8.69591 8.5718C8.73383 8.65713 8.75333 8.74858 8.75332 8.84093Z"
            fill={props.color}
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.21342 4.62011C7.20434 3.38171 8.68821 3.35439 8.70287 4.59618L8.12506 7.30637C8.10078 7.55276 7.87112 7.53477 7.83616 7.3303L7.21342 4.62011Z"
            fill={props.color}
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.44686 12.0817L6.85563 14.125H4.03809L5.44686 12.0817Z"
            fill={props.color}
            stroke={props.color}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)
