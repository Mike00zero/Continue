// src/store/GameStore.jsx
import { createContext, useContext, useReducer } from "react";

const GameContext = createContext(null);

const initialState = {
    currentQuestion: 0,
    score: 0,
    answers: [],
};

function gameReducer(state, action) {
    switch (action.type) {
        case "ANSWER_QUESTION":
            return {
                ...state,
                answers: [...state.answers, action.payload],
                currentQuestion: state.currentQuestion + 1,
            };

        case "RESET_GAME":
            return initialState;

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