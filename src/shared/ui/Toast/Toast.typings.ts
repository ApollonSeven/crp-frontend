import { ReactNode } from 'react'

export interface Props {
    variant?: 'Info' | 'Warning' | 'Error' | 'Success'
    icon?: JSX.Element
    styles: Record<string, string>
    children?: ReactNode
}
