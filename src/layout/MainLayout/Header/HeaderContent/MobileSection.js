import { useEffect, useRef, useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { AppBar, Box, ClickAwayListener, IconButton, Paper, Popper, Toolbar } from '@mui/material';

// project import
import Search from './Search';
import Profile from './Profile';
import Transitions from 'components/@extended/Transitions';

// assets
import { MoreOutlined } from '@ant-design/icons';
import NavBer from './NavBer';

// ==============================|| HEADER CONTENT - MOBILE ||============================== //

const MobileSection = () => {
    const theme = useTheme();

    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    const prevOpen = useRef(open);
    useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    return (
        <>
            <Box sx={{ flexShrink: 0, ml: 0.75 }}>
                <IconButton
                    component="span"
                    disableRipple
                    sx={{
                        bgcolor: open ? 'grey.300' : 'grey.100'
                    }}
                    ref={anchorRef}
                    aria-controls={open ? 'menu-list-grow' : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                    color="inherit"
                >
                    <MoreOutlined />
                </IconButton>
            </Box>
            <Popper
                placement="bottom-end"
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
                style={{
                    width: '300px'
                }}
                sx={{ height: '100vh' }}
                popperOptions={{
                    modifiers: [
                        {
                            name: 'offset',
                            options: {
                                offset: [0, 9]
                            }
                        }
                    ]
                }}
            >
                {({ TransitionProps }) => (
                    <Transitions type="fade" in={open} {...TransitionProps}>
                        <Paper sx={{ height: '100vh', position: 'relative', top: '-63px', right: '-30px' }}>
                            <ClickAwayListener onClickAway={handleClose}>
                                <AppBar color="inherit" sx={{ height: '100vh', position: 'relative', top: '0', right: '0' }}>
                                    <Toolbar sx={{ justifyContent: 'center', margin: '30px 0 0' }}>
                                        <NavBer />
                                    </Toolbar>
                                    {/* <Toolbar>
                                        <Search />
                                        <Profile />
                                    </Toolbar> */}
                                </AppBar>
                            </ClickAwayListener>
                        </Paper>
                    </Transitions>
                )}
            </Popper>
        </>
    );
};

export default MobileSection;
