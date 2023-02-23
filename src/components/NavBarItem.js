import PropTypes from 'prop-types';
import { forwardRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// material-ui
import { ListItemButton, ListItemText, Typography, Box } from '@mui/material';

// project import
import { activeItem } from 'fetaures/menu/menuSlice';

// ==============================|| NAVIGATION - LIST ITEM ||============================== //

const NavBarItem = ({ item }) => {
    const dispatch = useDispatch();
    const menu = useSelector((state) => state.menu);
    const user = useSelector((state) => state.user);
    const { openItem } = menu;

    let itemTarget = '_self';
    if (item.target) {
        itemTarget = '_blank';
    }

    let listItemProps = {
        component: forwardRef((props, ref) => (
            <Link
                ref={ref}
                {...props}
                to={item.url}
                target={itemTarget}
                style={{ marginRight: 10, display: 'block', textAlign: 'center' }}
            />
        ))
    };
    if (item?.external) {
        listItemProps = { component: 'a', href: item.url, target: itemTarget };
    }

    const itemHandler = (id) => {
        dispatch(activeItem({ openItem: [id] }));
    };

    const isSelected = openItem.findIndex((id) => id === item.id) > -1;

    // active menu item on page load
    useEffect(() => {
        const currentIndex = document.location.pathname
            .toString()
            .split('/')
            .findIndex((id) => id === item.id);
        if (currentIndex > -1) {
            dispatch(activeItem({ openItem: [item.id] }));
        }
        // eslint-disable-next-line
    }, []);

    const textColor = 'red';
    const iconSelectedColor = 'green';

    return (
        <>
            {user && item.title === 'Login' ? (
                <></>
            ) : (
                <ListItemButton {...listItemProps} disabled={item.disabled} onClick={() => itemHandler(item.id)}>
                    <ListItemText
                        primary={
                            <Typography
                                variant="h6"
                                sx={{
                                    color: isSelected ? iconSelectedColor : textColor,
                                    '&:hover': {
                                        color: iconSelectedColor
                                    }
                                }}
                            >
                                {item.title}
                            </Typography>
                        }
                    />
                </ListItemButton>
            )}
        </>
    );
};

NavBarItem.propTypes = {
    item: PropTypes.object,
    level: PropTypes.number
};

export default NavBarItem;
