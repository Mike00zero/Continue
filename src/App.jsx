import * as styles from './styles/Main.module.scss';
import clsx from 'clsx';
import {get} from 'lodash';
import { useGameStore } from './store/GameStore';
import { questionTypeMapper } from './helpers/questionTypeMapper';

export default function App() {
    const { state, dispatch } = useGameStore();
    const showContinueBtn = true;
    const showResponse = true;
    const questionTypeKey = get(state, `questions.${state.nextQuestionKey}.questionType`);
    const currentQuestionProps = get(state, `questions.${state.nextQuestionKey}`);
    const question = questionTypeMapper(currentQuestionProps);

    console.log('state', state);

    return (
        <main className={styles.game}>
            <div id="screen" className={clsx(
                styles.screen,
                styles.fadeIn,
            )}>
                {/*<div className="progress" id="progress">Question 1 of 6</div>*/}

                {question[questionTypeKey]}

                {/* This will be the 'responses' component */}
                <p
                    className={clsx(
                        styles.response,
                        showResponse && styles.show,
                    )}
                    id="response"
                >
                    Test Response Here
                </p>

                {/* This will be its own component as there will be different types of questions */}
                <div className={styles.choices} id="choices">
                    <button>Yes</button>
                    <button className={styles.secondary}>No</button>
                </div>

                <button
                    id="nextButton"
                    className={clsx(
                        styles.nextButton,
                        showContinueBtn && styles.show,
                    )}
                >
                    Continue, apparently
                </button>
            </div>
            <div className={styles.footerNote}>There is definitely an ending. Probably. Maybe.</div>
        </main>
    );
}