import { InputProps } from '../Input.typings'

export type Props = {
    options: OptionsType[]
    isRounded?: boolean
    placeholder?: string
} & InputProps<any>

export interface OptionsType {
    label: string
    value: any
}
