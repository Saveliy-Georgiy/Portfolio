import React from 'react';
import styles from './Main.module.css';
import {Greeting} from "./Greeting/Greeting";
import {MyPhoto} from "./MyPhoto/MyPhoto";

export const Main = () => {
    return (
        <div className={styles.main} id="main">
            <div className={styles.container}>
                <Greeting/>
                <MyPhoto/>
            </div>
        </div>
    );
}