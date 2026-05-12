import React, {useState, useEffect} from 'react';
import { TextboxComponent } from '/src/common/TextboxComponent';
import { ResponseTerminal } from '/src/common/ResponseTerminal';
import { useGameStore } from '/src/store/GameStore';
import * as styles from '/src/styles/Main.module.scss';

export const WhatsYourNameComponent = (props) => {
    const [showBtn, setBtn] = useState(false);
    const [name, setName] = useState('');
    const { dispatch } = useGameStore();

    const getText = (e) => {
        console.log('e', e.target.value);
        setName(e.target.value);
    }

    useEffect(() => {
        setBtn(!!name);
    }, [name])

    return (
        <>
            <TextboxComponent onChange={(e) => getText(e)} {...props} />
            <ResponseTerminal />
            <div className={styles.responseLayout}>
                {showBtn &&
                    <div className={styles.choices} id="choices">
                        <button>Yes</button>
                        <button className={styles.secondary}>No</button>
                    </div>
                }
            </div>
        </>
    )
}