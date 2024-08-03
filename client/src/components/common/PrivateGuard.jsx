import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom'

import { AuthContext } from '../../contexts/AuthContext';

export default function PrivateGuard() {
    const { isAuthenticated } = useContext(AuthContext);

    if (isAuthenticated) {
        return <Outlet />
    } else {
        return <Navigate to="/login" />
    }
}