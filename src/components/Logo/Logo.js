// material-ui
import { useTheme } from '@mui/material/styles';
import LOGO from '../../image/logo.png';

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {
    const theme = useTheme();

    return (
        <>
            <img src={LOGO} alt="Mantis" width="70" />
        </>
    );
};

export default Logo;
