// material-ui
import { Box, IconButton, Link, useMediaQuery } from '@mui/material';
import { GithubOutlined } from '@ant-design/icons';

// project import
import Search from './Search';
import Profile from './Profile';
import Notification from './Notification';
import MobileSection from './MobileSection';
import NavBer from './NavBer';
import Cart from './Cart';
import { useSelector } from 'react-redux';

// ==============================|| HEADER - CONTENT ||============================== //

const HeaderContent = () => {
    const matchesXs = useMediaQuery((theme) => theme.breakpoints.down('md'));
    const user = useSelector((state) => state.user);
    console.log(user);

    return (
        <>
            {!matchesXs && <Search />}
            {matchesXs && <Box sx={{ width: '100%', ml: 1 }} />}
            {(user?.role === 'user' || !user) && !matchesXs && <NavBer />}
            {user?.role === 'user' && <Cart />}
            {user?.role !== 'user' && user && <Notification />}
            {user && <Profile />}
            {matchesXs && (user?.role === 'user' || !user) && <MobileSection />}
        </>
    );
};

export default HeaderContent;
