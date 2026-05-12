import React from 'react';
import clsx from 'clsx';
import * as styles from '/src/styles/Terminal.module.scss';

export const ResponseTerminal = ({response = 'Is this your name?'}) => {
    return (
        <>
            <div className={styles.terminal}>
                <div className={styles.terminal__header}>
                    <span className={clsx(
                        styles.terminal__headerBtns,
                        styles.red,
                    )}></span>
                    <span className={clsx(
                        styles.terminal__headerBtns,
                        styles.yellow,
                    )}></span>
                    <span className={clsx(
                        styles.terminal__headerBtns,
                        styles.green,
                    )}></span>
                </div>

                {response}
            </div>
        </>
    )
}