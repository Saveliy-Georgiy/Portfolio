import React, {useState} from "react";
import styles from "./ButtonStyles.module.css";
import s from "./ButtonWindow.module.css";

type ButtonWindowPropsType = {
    name: string
}

export const ButtonWindow = (props: ButtonWindowPropsType) => {

    const [modalWindow, setModalWindow] = useState<boolean>(false)

    const activateModalWindow = () => {
        setModalWindow(true);
    };

    const deactivateModalWindow = () => {
        setModalWindow(false);
    };

    const display = modalWindow ? s.displayBlock : s.displayNone;

    return (
        <div>
            <button className={styles.btnSubmit} onClick={activateModalWindow}>{props.name}</button>
            <div className={s.modalBackground + ' ' + display}>
                <div className={s.modalWindow}>
                    <h3>Здравствуйте!</h3>
                    <p>Вы успешно отправили заявку.</p>
                    <button onClick={deactivateModalWindow}>Закрыть</button>
                </div>
            </div>
        </div>
    );
};
