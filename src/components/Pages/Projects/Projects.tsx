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
                             description="Социальная сеть с реальными пользователями"/>
                    <Project picture={styles.picture2 + ' ' + styles.backgroundPosition} name="Счетчик"
                             description="Не имеющий практического применения счетчик, был создан для тренировки"/>
                    <Project picture={styles.picture3 + ' ' + styles.backgroundPosition} name="Практическая страница"
                             description="универсальные компоненты, мелкие интересные задачки и т.д."/>
                    <Project picture={styles.picture4 + ' ' + styles.backgroundPosition} name="Дипломный проект"
                             description="Функциональное портфолио сотрудников"/>
                </div>
            </div>
        </div>
    );
}
