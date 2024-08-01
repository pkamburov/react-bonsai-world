import { useState } from 'react';
import {Navigate, Outlet} from 'react-router-dom'

import { AuthContext } from '../../contexts/AuthContext';

export default function PrivateGuard() {
    const { isAuthenticated } = useState(AuthContext);

    return isAuthenticated
        ? <Outlet />
        : <Navigate to="/login" />
}