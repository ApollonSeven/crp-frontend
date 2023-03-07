import { InputProps } from '../Input.typings'
import { ReactNode } from 'react'

export type Props = {
    valueName: string
    variant?: 'Dark' | 'Light'
    children?: ReactNode
    styles?: Record<string, string>
} & InputProps<string>
