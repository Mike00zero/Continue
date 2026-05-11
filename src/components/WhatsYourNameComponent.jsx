import React, {useState} from 'react';
import { TextboxComponent } from '/src/common/TextboxComponent';
import clsx from 'clsx';
import { useGameStore } from '/src/store/GameStore';
import * as styles from '/src/styles/Main.module.scss';

export const WhatsYourNameComponent = (props) => {
    const [showBtn, setBtn] = useState(false);
    const { dispatch } = useGameStore();

    const getText = (e) => {
        console.log('e', e.target.value);
    }

    return (
        <>
            <TextboxComponent onChange={(e) => getText(e)} {...props} />
            <p
                className={clsx(
                    styles.response,
                    showBtn && styles.show,
                )}
                id="response"
            >
                Is this your name?
            </p>
            {showBtn &&
                <div className={styles.choices} id="choices">
                    <button>Yes</button>
                    <button className={styles.secondary}>No</button>
                </div>
            }
        </>
    )
}