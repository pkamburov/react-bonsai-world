import requester from './requester'

const BASE_URL = 'http://localhost:3030/users';

export const login = (email, password) => requester.post(`${BASE_URL}/login`, { email, password });

export const register = (data) => requester.post(`${BASE_URL}/register`, data);

export const logout = () => requester.get(`${BASE_URL}/logout`);