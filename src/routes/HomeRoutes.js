import { lazy } from 'react';
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout/index';

// render Pages
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/SamplePage')));

const HomeRoute = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: 'home',
            element: <SamplePage />
        },
        {
            path: 'register',
            element: <SamplePage />
        }
    ]
};

export default HomeRoute;
