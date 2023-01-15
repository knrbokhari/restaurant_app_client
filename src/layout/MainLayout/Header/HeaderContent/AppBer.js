import React from 'react';
import { Toolbar, Box, Button, Link } from '@mui/material';
// import { Link } from 'react-router-dom';

const AppBer = () => {
    const navItems = [
        { url: '/', name: 'Home' },
        { url: '/menu', name: 'Menu' },
        { url: '/blog', name: 'Blog' },
        { url: '/contact', name: 'Contact' }
    ];
    return (
        <>
            <Toolbar>
                <Box sx={{ display: { xs: 'flex' } }}>
                    {navItems.map((i) => (
                        <Button
                            key={i}
                            component={Link}
                            href={i.url}
                            sx={{
                                color: `${window.location.pathname === `${i.url}` ? 'warning.main' : '#fff'}`,
                                '&:hover': { color: 'warning.main', backgroundColor: 'transparent' },
                                backgroundColor: 'transparent'
                            }}
                        >
                            {i.name}
                        </Button>
                    ))}
                </Box>
            </Toolbar>
        </>
    );
};

export default AppBer;
