import React from 'react';
import Login from './components/Login';
import Register from './components/Register'
import ForgetPassword from './components/ForgetPassword';
import Dashboard from './components/DashboardMarkup' 
export default [
    {
        path: '/',
        exact: true,
        component: () => <Login />
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
    {
        path: '/dashboard',
        exact: true,
        component: () => <Dashboard />
    },
];