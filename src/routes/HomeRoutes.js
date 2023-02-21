import { lazy } from 'react';
import Loadable from 'components/Loadable';
import HomeLayout from 'layout/HomeLayout/index';

// render Pages
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/SamplePage')));
const HomePage = Loadable(lazy(() => import('pages/Home/index')));
const OurMenu = Loadable(lazy(() => import('pages/OurMenu')));
const Contact = Loadable(lazy(() => import('pages/Contact')));
const Product = Loadable(lazy(() => import('pages/product/Product')));
const CartPage = Loadable(lazy(() => import('pages/CartPage')));
const Checkout = Loadable(lazy(() => import('pages/Checkout')));
const Profile = Loadable(lazy(() => import('pages/user/Profile')));

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
            element: <OurMenu />
        },
        {
            path: 'menu/:id',
            element: <Product />
        },
        {
            path: 'blog',
            element: <SamplePage />
        },
        {
            path: 'contact',
            element: <Contact />
        },
        {
            path: 'cart',
            element: <CartPage />
        },
        {
            path: 'checkout',
            element: <Checkout />
        },
        {
            path: 'profile/:id',
            element: <Profile />
        }
    ]
};

export default HomeRoute;
