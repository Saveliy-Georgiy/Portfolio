import React from 'react';
import styles from './H2.module.css';

type H2PropsType = {
    name: string
}

export const H2 = (props: H2PropsType) => {
    return (
        <div className={styles.headerTitle}>
            <h2 className={styles.headerText}>
                {props.name}
            </h2>
            <div className={styles.line}>
            </div>
        </div>
    );
}