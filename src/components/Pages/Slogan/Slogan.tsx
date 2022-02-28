import React from 'react';
import styles from './Slogan.module.css';
import {H2} from "../../H2/H2";
import {ButtonWindow} from "../../Buttons/ButtonProject/ButtonWindow";

export const Slogan = () => {
    return (
        <div className={styles.slogan}>
            <div className={styles.mySlogan}>
                <H2 name="Рассматриваю варианты удаленной работы"/>
                <ButtonWindow name="Нанять меня"/>
            </div>
        </div>
    );
}
