import React from 'react';
import styles from './Projects.module.css';
import {Project} from "./Project/Project";
import {H2} from "../../H2/H2";

export const Projects = () => {
    return (
        <div className={styles.projects} id="projects">
            <div className={styles.myProjectsContainer}>
                <H2 name="Проекты"/>
                <div className={styles.listOfMyProjects}>
                    <Project picture={styles.picture1 + ' ' + styles.backgroundPosition} name="Социальная сеть"
                             description="Описание соц сети Описание соц сети Описание соц сети Описание соц сети"/>
                    <Project picture={styles.picture2 + ' ' + styles.backgroundPosition} name="Счетчик"
                             description="Описание второго проекта"/>
                    <Project picture={styles.picture3 + ' ' + styles.backgroundPosition} name="Практическая страница"
                             description="Описание третьего проекта"/>
                </div>
            </div>
        </div>
    );
}
