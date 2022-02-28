import React from 'react';
import styles from './Icon.module.css';

type IconPropsType = {
    url?: string
    picture: string
}

export const Icon = (props: IconPropsType) => {
    return (
        <div>
            <div>
                <a href={props.url}>
                    <img className={styles.square} src={props.picture} alt="icon"/>
                </a>
            </div>
        </div>
    );
}
