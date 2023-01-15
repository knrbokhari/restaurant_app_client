import { lazy } from 'react';
import Loadable from 'components/Loadable';
import HomeLayout from 'layout/HomeLayout/index';

// render Pages
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/SamplePage')));
const HomePage = Loadable(lazy(() => import('pages/Home/index')));

const HomeRoute = {
    path: '/',
    element: <HomeLayout />,
    children: [
        {
            path: '/',
            element: <HomePage />
        },
        {
            path: 'menu',
            element: <SamplePage />
        },
        {
            path: 'blog',
            element: <SamplePage />
        },
        {
            path: 'contact',
            element: <SamplePage />
        }
    ]
};

export default HomeRoute;
