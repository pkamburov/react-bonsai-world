import { useContext } from 'react';
import { Outlet } from 'react-router-dom'

import { AuthContext } from '../../contexts/AuthContext';
import { LoginPageGuard } from '../header/LoginPageGuard';

export default function PrivateGuard() {
    const { isAuthenticated } = useContext(AuthContext);

    if (isAuthenticated) {
        return <Outlet />
    } else {
        return <LoginPageGuard />
    }
}