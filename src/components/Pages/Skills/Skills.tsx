import React from "react";
import styles from "./Skills.module.css";
import {Skill} from "./Skill/Skill";
import {H2} from "../../H2/H2";
import js from "../../../Icons/JS.png";
import react from "../../../Icons/reactjs.png";
import redux from "../../../Icons/redux.png";
import typescript from "../../../Icons/typescript.png";
import materialui from "../../../Icons/materialui.png";
import jest from "../../../Icons/jest.png";

export const Skills = () => {
    return (
        <div className={styles.skills} id="skills">
            <div className={styles.mySkillsContainer}>
                <H2 name="Мои cкиллы"/>
                <div className={styles.listOfMySkills}>
                    <Skill picture={js} knowledge="JS"/>
                    <Skill picture={react} knowledge="REACT"/>
                    <Skill picture={redux} knowledge="REDUX"/>
                    <Skill picture={typescript} knowledge="TS"/>
                    <Skill picture={materialui} knowledge="MUI"/>
                    <Skill picture={jest} knowledge="JEST TESTS"/>
                </div>
            </div>
        </div>
    );
}
