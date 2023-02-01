import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Toolbar, useMediaQuery } from '@mui/material';

// project import
import Header from '../MainLayout/Header';
import navigation from 'menu-items';
import Breadcrumbs from 'components/@extended/Breadcrumbs';

// ==============================|| MAIN LAYOUT ||============================== //

const MainLayout = () => {
    const theme = useTheme();
    const matchDownLG = useMediaQuery(theme.breakpoints.down('xl'));
    const dispatch = useDispatch();

    return (
        <Box sx={{ display: 'flex', width: '100%' }}>
            <Header HomeHeader={true} />
            <Box component="main" sx={{ width: '100%' }}>
                <Toolbar />
                {/* <Breadcrumbs navigation={navigation} title titleBottom card={false} divider={false} /> */}
                <Outlet />
            </Box>
        </Box>
    );
};

export default MainLayout;
