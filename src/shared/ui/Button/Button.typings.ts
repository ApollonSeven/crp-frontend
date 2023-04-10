export type ButtonSize = 'XS' | 'S' | 'M' | 'L' | 'Z'

export type ButtonVariant = 'Primary' | 'Secondary' | 'Tertiary'

export interface Props {
    size?: ButtonSize
    disabled?: boolean
    styles?: Record<string, string>
    type?: 'button' | 'submit' | 'reset'
    variant?: ButtonVariant
}
