import { useState } from "react";

export default function usePersistedState(key, initialState) {
    const [state, setState] = useState(() => {
        const persistedAuth = sessionStorage.getItem(key);

        if (!persistedAuth) {
            return typeof initialState === 'function' 
            ? initialState()
            : initialState;
        }

        const authData = JSON.parse(persistedAuth);

        return authData;
    });

    const updateState = (value) => {

        sessionStorage.setItem(key, JSON.stringify(value));
        
        setState(value);
    }

    return [state, updateState];
}