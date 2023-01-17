import React, { useState } from 'react';
import { Toolbar, List, ListItem } from '@mui/material';
import { Link } from 'react-router-dom';

const AppBer = () => {
    const [location, setLocation] = useState(window.location.pathname);

    const navItems = [
        { url: '/', name: 'Home' },
        { url: '/menu', name: 'Menu' },
        { url: '/blog', name: 'Blog' },
        { url: '/contact', name: 'Contact' }
    ];

    return (
        <>
            <Toolbar>
                <List sx={{ display: { xs: 'flex' } }}>
                    {navItems.map((i) => (
                        <Link key={i.url} to={i.url} style={{ textDecoration: 'none' }}>
                            <ListItem
                                key={i}
                                onClick={() => setLocation(window.location.pathname)}
                                sx={{
                                    color: `${window.location.pathname === `${i.url}` ? 'warning.main' : '#fff'}`,
                                    '&:hover': { color: 'warning.main', backgroundColor: 'transparent' },
                                    backgroundColor: 'transparent'
                                }}
                            >
                                {i.name}
                            </ListItem>
                        </Link>
                    ))}
                </List>
            </Toolbar>
        </>
    );
};

export default AppBer;
