// src/store/GameStore.jsx
import { createContext, useContext, useReducer } from 'react';
import {questions} from './gameQuestionsStore';
const GameContext = createContext(null);
import * as C from '/src/constants/';

const initialState = {
    questions,
    nextQuestionKey: 'whatsYourName', //TODO: We will need to update this to check for localstorage on page load
    playAttempts: 1, // TODO: Update to handle localstorage
    playerName: '',
    bgColor: '#000',
};

function gameReducer(state, action) {
    switch (action.type) {
        case C.ANSWER_QUESTION:
            return {
                ...state,
                answers: [...state.answers, action.payload],
                currentQuestion: state.currentQuestion + 1,
            };

        case C.RESET_GAME:
            return initialState;

        case C.SET_QUESTION_KEY:
            return {
                ...state,
                nextQuestionKey: state.nextQuestionKey,
            }

        case C.SET_PLAYER_NAME:
            return {
                ...state,
                playerName: state.playerName,
            }

        default:
            return state;
    }
}

export function GameProvider({ children }) {
    const [state, dispatch] = useReducer(gameReducer, initialState);

    return (
        <GameContext.Provider value={{ state, dispatch }}>
            {children}
        </GameContext.Provider>
    );
}

export function useGameStore() {
    const context = useContext(GameContext);

    if (!context) {
        throw new Error("useGameStore must be used inside GameProvider");
    }

    return context;
}