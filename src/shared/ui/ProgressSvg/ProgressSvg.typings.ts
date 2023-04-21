import { SVGProps } from 'react'

export interface Props extends SVGProps<SVGSVGElement> {
    Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
    percent?: number
}
