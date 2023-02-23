import React from 'react';
import { Box } from '@mui/material';
import NavBarItem from 'components/NavBarItem';

const NavBer = () => {
    const nav = [
        {
            id: '',
            title: 'Home',
            type: 'item',
            url: '/',
            breadcrumbs: false
        },
        {
            id: 'menu',
            title: 'Menu',
            type: 'item',
            url: '/menu',
            breadcrumbs: false
        },
        {
            id: 'blog',
            title: 'Blog',
            type: 'item',
            url: '/blog',
            breadcrumbs: false
        },
        {
            id: 'contact',
            title: 'Contact',
            type: 'item',
            url: '/contact',
            breadcrumbs: false
        },
        {
            id: 'login',
            title: 'Login',
            type: 'item',
            url: '/login',
            breadcrumbs: false
        }
    ];

    return (
        <>
            <Box sx={{ display: { sm: 'block', md: 'flex' } }}>
                {nav.map((menuItem) => (
                    <NavBarItem key={menuItem.id} item={menuItem} level={1} />
                ))}
            </Box>
        </>
    );
};

export default NavBer;
