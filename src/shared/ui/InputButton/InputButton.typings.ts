import { SVGProps } from 'react'

export interface Props {
    Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
    onClick?: () => void
}
