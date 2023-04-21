export enum Gender {
    male = 'male',
    female = 'female',
}

export interface Props {
    value: Gender
    onSelect?: (value: Gender) => void
}
