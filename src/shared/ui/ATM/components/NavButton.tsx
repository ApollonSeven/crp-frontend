import React from 'react'
import {Props} from './NavButton.typings'
import styles from './NavButton.module.scss'

const NavButton = ({pic, title, onSelect}:Props) => {
    return (
        <div className={styles.navBlock} onClick = {() =>onSelect && onSelect()}>
            <div className={styles.navTitle}>{title}</div>
            <div className={styles.backgroundBlock}></div>
            <div className={styles.navPic}>
                <img src={pic} />
            </div>
        </div>
    )
}

export default NavButton;