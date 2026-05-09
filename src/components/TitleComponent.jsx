import React from 'react';
import * as styles from '/src/styles/Main.module.scss';

export const TitleComponent = ({ questionTitle }) => {
    return (
        <h2 className={styles.question} id="question">
            {/*Loading questionable question...*/}
            { questionTitle }
        </h2>
    )
}