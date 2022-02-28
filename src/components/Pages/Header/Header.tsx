import React from 'react';
import styles from './Header.module.css';
import {Menu} from "./Menu";

export const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <Menu/>
            </div>
        </div>
    );
}
