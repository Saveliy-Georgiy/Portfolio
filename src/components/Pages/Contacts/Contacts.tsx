import React from 'react';
import styles from './Contacts.module.css';
import {ButtonWindow} from '../../Buttons/ButtonProject/ButtonWindow';
import {H2} from "../../H2/H2";

export const Contacts = () => {
    return (
        <div className={styles.contacts} id="contacts">
            <div className={styles.myContacts}>
                <H2 name="Контакты"/>
                <form className={styles.formWrapper}>
                    <input className={styles.formArea} placeholder="Имя" type="text"/>
                    <input className={styles.formArea} placeholder="e-mail" type="email"/>
                    <textarea className={styles.messageArea} placeholder="Сообщение">
              </textarea>
                </form>
                <ButtonWindow name="Отправить"/>
            </div>
        </div>
    );
}
