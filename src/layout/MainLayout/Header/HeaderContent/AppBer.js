import React, { useEffect, useState } from 'react';
import { Box, List, ListItem, ListItemText, ListItemButton } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
import ListItemIcon from '@mui/material/ListItemIcon';
import NavBarItem from 'components/NavBarItem';

const AppBer = () => {
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
            url: 'contact',
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

export default AppBer;
