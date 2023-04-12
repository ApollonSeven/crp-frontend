import React from 'react'
import styles from 'entities/ui/PlayerSlots/PlayerSlots.module.scss'
import { InventorySlot } from 'shared/ui/InventorySlot/InventorySlot'
import {
    Backpack,
    Bracelet,
    Chain,
    Glasses,
    Gloves,
    ManHat,
    ManJacket,
    ManWatch,
    Mask,
    Shoe,
    Tie,
    TShirt,
    WomenPants,
} from 'shared/icons/generated'
import classNames from 'classnames'
import {
    Props,
    SlotComponent,
} from 'entities/ui/PlayerSlots/PlayerSlots.typings'

export const PlayerSlots: React.FC<Props> = ({ data }) => {
    const {
        hat,
        mask,
        outerwear,
        tie,
        shirt,
        glasses,
        gloves,
        pants,
        watch,
        shoes,
        bracelet,
        chain,
        backpack,
    } = data

    const Slot = ({ data, Icon }: SlotComponent) => {
        return <InventorySlot {...data} Icon={Icon} />
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.row}>
                <Slot Icon={ManHat} data={hat} />
                <Slot Icon={Mask} data={mask} />
            </div>
            <div className={styles.row}>
                <Slot Icon={ManJacket} data={outerwear} />
                <Slot Icon={Tie} data={tie} />
            </div>
            <div className={styles.divider}></div>
            <div className={styles.row}>
                <Slot Icon={TShirt} data={shirt} />
                <Slot Icon={Gloves} data={gloves} />
            </div>
            <div className={styles.row}>
                <Slot Icon={WomenPants} data={pants} />
                <Slot Icon={ManWatch} data={watch} />
            </div>
            <div className={styles.row}>
                <Slot Icon={Shoe} data={shoes} />
                <Slot Icon={Bracelet} data={bracelet} />
            </div>
            <div className={classNames(styles.row, styles.last)}>
                <Slot />
                <Slot Icon={Chain} data={chain} />
                <Slot Icon={Glasses} data={glasses} />
                <Slot Icon={Backpack} data={backpack} />
            </div>
        </div>
    )
}
