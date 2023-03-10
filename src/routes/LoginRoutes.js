import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

// render - login
const AuthLogin = Loadable(lazy(() => import('pages/authentication/Login')));
const AuthRegister = Loadable(lazy(() => import('pages/authentication/Register')));
const VerifyUser = Loadable(lazy(() => import('pages/authentication/VerifyUser')));
const ForgotPassword = Loadable(lazy(() => import('pages/authentication/ForgotPassword')));

// ==============================|| AUTH ROUTING ||============================== //

const LoginRoutes = {
    path: '/',
    element: <MinimalLayout />,
    children: [
        {
            path: 'login',
            element: <AuthLogin />
        },
        {
            path: 'register',
            element: <AuthRegister />
        },
        {
            path: 'verify/:token',
            element: <VerifyUser />
        },
        {
            path: 'reset/:token',
            element: <ForgotPassword />
        }
    ]
};

export default LoginRoutes;
