import React from 'react';
import styles from './Skill.module.css';
import {Icon} from "../../../../Icons/Icon";

type SkillPropsType = {
    picture: string
    knowledge: string
    descriptionOfKnowledge?: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <div className={styles.container}>
            <div>
                <Icon picture={props.picture}/>
            </div>
            <div className={styles.knowledge}>
               {props.knowledge}
            </div>
            <div className={styles.borderOfDescription}>
                <div className={styles.descriptionOfKnowledge}>
                {props.descriptionOfKnowledge}
                </div>
            </div>
        </div>
    );
}