import React from 'react';
import Dashboard from './components/Login';
import Register from './components/Register'
import ForgetPassword from './components/ForgetPassword';
export default [
    {
        path: '/',
        exact: true,
        component: () => <Dashboard />
    },
    {
        path: '/register',
        exact: true,
        component: () => <Register />
    },
    {
        path: '/forget-password',
        exact: true,
        component: () => <ForgetPassword />
    },
];