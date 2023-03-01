import { useRef, useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
    Avatar,
    Badge,
    Box,
    ClickAwayListener,
    Divider,
    IconButton,
    List,
    ListItemButton,
    ListItemAvatar,
    ListItemText,
    ListItemSecondaryAction,
    Paper,
    Popper,
    Typography,
    useMediaQuery
} from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import Transitions from 'components/@extended/Transitions';

// assets
import { ShoppingCartOutlined, CloseOutlined, GiftOutlined, MessageOutlined, SettingOutlined } from '@ant-design/icons';
import DrawerContent from 'layout/MainLayout/Drawer/DrawerContent/index';
import { Link } from 'react-router-dom';

// sx styles
const avatarSX = {
    width: 36,
    height: 36,
    fontSize: '1rem'
};

const actionSX = {
    mt: '6px',
    ml: 1,
    top: 'auto',
    right: 'auto',
    alignSelf: 'flex-start',

    transform: 'none'
};

// ==============================|| HEADER CONTENT - NOTIFICATION ||============================== //

const Cart = () => {
    const theme = useTheme();
    const matchesXs = useMediaQuery(theme.breakpoints.down('md'));

    const anchorRef = useRef(null);
    const [open, setOpen] = useState(false);
    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };

    const iconBackColorOpen = 'grey.300';
    const iconBackColor = 'grey.100';

    return (
        <div>
            <Box sx={{ flexShrink: 0, ml: 1.75 }}>
                <IconButton
                    disableRipple
                    color="secondary"
                    sx={{ color: 'text.primary', bgcolor: open ? iconBackColorOpen : iconBackColor }}
                    aria-label="open profile"
                    ref={anchorRef}
                    aria-controls={open ? 'profile-grow' : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                >
                    <Badge badgeContent={0} color="primary">
                        <ShoppingCartOutlined />
                    </Badge>
                </IconButton>
                <Popper
                    placement={matchesXs ? 'bottom' : 'bottom-end'}
                    open={open}
                    anchorEl={anchorRef.current}
                    role={undefined}
                    transition
                    disablePortal
                    popperOptions={{
                        modifiers: [
                            {
                                name: 'offset',
                                options: {
                                    offset: [matchesXs ? -5 : 0, 9]
                                }
                            }
                        ]
                    }}
                >
                    {({ TransitionProps }) => (
                        <Transitions type="fade" in={open} {...TransitionProps}>
                            <Paper
                                sx={{
                                    boxShadow: theme.customShadows.z1,
                                    width: '100%',
                                    minWidth: 285,
                                    maxWidth: 420,
                                    [theme.breakpoints.down('md')]: {
                                        maxWidth: 285
                                    }
                                }}
                            >
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MainCard
                                        title="Cart"
                                        elevation={0}
                                        border={false}
                                        content={false}
                                        secondary={
                                            <IconButton size="small" onClick={handleToggle}>
                                                <CloseOutlined />
                                            </IconButton>
                                        }
                                    >
                                        <List
                                            component="nav"
                                            sx={{
                                                p: 0,
                                                '& .MuiListItemButton-root': {
                                                    py: 0.5,
                                                    '& .MuiAvatar-root': avatarSX,
                                                    '& .MuiListItemSecondaryAction-root': { ...actionSX, position: 'relative' }
                                                }
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                    padding: '10px 20px'
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        justifyContent: 'space-between',
                                                        alignItems: 'center'
                                                    }}
                                                >
                                                    <img
                                                        src="https://preview.colorlib.com/theme/pizza/images/bg_1.png.webp"
                                                        alt=""
                                                        width={40}
                                                    />
                                                    <Box ml={2}>
                                                        <Typography>Italian Cuizine</Typography>
                                                        <Typography>1 × $15.55</Typography>
                                                    </Box>
                                                </Box>
                                                <IconButton size="small">
                                                    <CloseOutlined />
                                                </IconButton>
                                            </Box>
                                            <Divider />
                                            <Typography sx={{ padding: '10px 20px', textAlign: 'center' }}>Total Price: $120.00</Typography>
                                            <Link to="/cart" style={{ textDecoration: 'none' }} onClick={handleToggle}>
                                                <ListItemButton sx={{ textAlign: 'center', py: `${12}px !important` }}>
                                                    <ListItemText
                                                        primary={
                                                            <Typography variant="h6" color="primary">
                                                                View Cart
                                                            </Typography>
                                                        }
                                                    />
                                                </ListItemButton>
                                            </Link>
                                            <ListItemButton sx={{ textAlign: 'center', py: `${12}px !important` }}>
                                                <ListItemText
                                                    primary={
                                                        <Typography variant="h6" color="primary">
                                                            Checkout
                                                        </Typography>
                                                    }
                                                />
                                            </ListItemButton>
                                        </List>
                                    </MainCard>
                                </ClickAwayListener>
                            </Paper>
                        </Transitions>
                    )}
                </Popper>
            </Box>
        </div>
    );
};

export default Cart;
