import { lazy } from 'react';
import Loadable from 'components/Loadable';
import HomeLayout from 'layout/HomeLayout/index';

// render Pages
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/SamplePage')));

const HomeRoute = {
    path: '/',
    element: <HomeLayout />,
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
