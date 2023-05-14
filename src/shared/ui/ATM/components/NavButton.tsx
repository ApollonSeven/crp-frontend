import React from 'react'
import {Props} from './NavButton.typings'
import styles from './NavButton.module.scss'

const NavButton = (props:Props) => {
    return (
        <div className={styles.navBlock} onClick = {() => props.onSelect()}>
            <div className={styles.navTitle}>{props.title}</div>
            <div className={styles.backgroundBlock}></div>
            <div className={styles.navPic}>
                <img src={props.pic} />
            </div>
        </div>
    )
}

export default NavButton;