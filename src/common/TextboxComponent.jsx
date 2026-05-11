import React from 'react';
import * as styles from '/src/styles/Textbox.module.scss';
import { TitleComponent } from './TitleComponent';

export const TextboxComponent = (props) => {
    return (
        <div className="textbox">
            <TitleComponent {...props} />

            <div className={styles.textboxGroup}>
                <input
                    type="textbox"
                    id="playerAnswer"
                    className={styles.textbox}
                    placeholder={props?.textboxPlaceholderText}
                    onChange={props.onChange}
                />
            </div>
        </div>
    )
}