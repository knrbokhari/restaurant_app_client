import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/SamplePage')));

// render - utilities
const Typography = Loadable(lazy(() => import('pages/components-overview/Typography')));
const Color = Loadable(lazy(() => import('pages/components-overview/Color')));
const Shadow = Loadable(lazy(() => import('pages/components-overview/Shadow')));
const AntIcons = Loadable(lazy(() => import('pages/components-overview/AntIcons')));
const DProductPage = Loadable(lazy(() => import('pages/dashboard/product/DProductPage')));
const AddProduct = Loadable(lazy(() => import('pages/dashboard/product/AddProduct')));
const DUsers = Loadable(lazy(() => import('pages/dashboard/DUsers')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: 'dashboard',
            element: <DashboardDefault />
        },
        {
            path: 'dashboard',
            children: [
                {
                    path: 'products',
                    element: <DProductPage />
                },
                {
                    path: 'products/create',
                    element: <AddProduct />
                },
                {
                    path: 'orders',
                    element: <Typography />
                },
                {
                    path: 'users',
                    element: <DUsers />
                },
                {
                    path: 'sales',
                    element: <Color />
                }
            ]
        }
    ]
};

export default MainRoutes;
