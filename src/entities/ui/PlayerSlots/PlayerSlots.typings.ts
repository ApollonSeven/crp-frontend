import { SVGProps } from 'react'

export interface PlayerSlot {
    image: string
    id: string
}

export interface SlotComponent {
    Icon?: (props: SVGProps<SVGSVGElement>) => JSX.Element
    data?: NullablePlayerSlot
}

type NullablePlayerSlot = PlayerSlot | null

interface PlayerSlotsData {
    hat: NullablePlayerSlot
    mask: NullablePlayerSlot
    outerwear: NullablePlayerSlot
    tie: NullablePlayerSlot
    shirt: NullablePlayerSlot
    pants: NullablePlayerSlot
    gloves: NullablePlayerSlot
    watch: NullablePlayerSlot
    shoes: NullablePlayerSlot
    bracelet: NullablePlayerSlot
    chain: NullablePlayerSlot
    glasses: NullablePlayerSlot
    backpack: NullablePlayerSlot
}

export interface Props {
    data: PlayerSlotsData
}
