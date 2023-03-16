import { InputProps } from '../Input.typings'

export type Props = {
    options: OptionsType[]
    isRounded?: boolean
    placeholder?: string
} & InputProps<any>

type OptionsType = {
    label: string
    value: any
}
