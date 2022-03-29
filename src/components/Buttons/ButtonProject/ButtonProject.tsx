import React from "react";
import styles from "./ButtonStyles.module.css";

type ButtonProjectPropsType = {
    name: string
}

export const ButtonProject = (props: ButtonProjectPropsType) => {

    let href: string;

    if (props.name === "Социальная сеть") {
        href = "https://saveliy-georgiy.github.io/SocialNetwork/";
    } else if (props.name === "Счетчик") {
        href = "https://Saveliy-Georgiy.github.io/Counter2.0";
    } else if (props.name === "Практическая страница") {
        href = "https://saveliy-georgiy.github.io/Homework2.0/";
    } else {
        href = "https://saveliy-georgiy.github.io/diplom/#/";
    }

    return (
        <div>
            <a href={href}>
                <button className={styles.btnSubmit}>Смотреть</button>
            </a>
        </div>
    );
};
