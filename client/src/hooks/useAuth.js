import { useContext } from "react";

import { AuthContext } from "../contexts/AuthContext";
import { login, register } from "../api/auth-api";

export const useLogin = () => {
    const { changeAuthState } = useContext(AuthContext)

    const loginHandler = async (email, password) => {
        const result = await login(email, password);

        changeAuthState(result);
        
        return result;
    };

    return loginHandler;
};

export const useRegister = () => {
    const { changeAuthState } = useContext(AuthContext);

    const registerHandler = async (email, password) => {
        const result = await register(email, password);

        changeAuthState(result);

        return result;
    };

    return registerHandler;
};