import React, { useEffect, useState } from 'react';
import {
    Autocomplete,
    Box,
    Button,
    Checkbox,
    Grid,
    IconButton,
    Modal,
    Paper,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    TableSortLabel,
    TextField,
    Toolbar,
    Tooltip,
    Typography,
    MenuItem
} from '@mui/material';
import PropTypes from 'prop-types';
import { visuallyHidden } from '@mui/utils';
import { alpha } from '@mui/material/styles';
import AnalyticEcommerce from 'components/cards/statistics/AnalyticEcommerce';
import SalesColumnChart from '../SalesColumnChart';
import MainCard from 'components/MainCard';

const descendingComparator = (a, b, orderBy) => {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
};

const getComparator = (order, orderBy) => {
    return order === 'desc' ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy);
};

const stableSort = (array, comparator) => {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
};

const headCells = [
    {
        id: 'name',
        numeric: false,
        disablePadding: true,
        label: 'Product name'
    },
    {
        id: 'sales',
        numeric: true,
        disablePadding: false,
        label: 'Total Sales'
    },
    {
        id: 'stock',
        numeric: true,
        disablePadding: false,
        label: 'Stock'
    },
    {
        id: 'rating',
        numeric: true,
        disablePadding: false,
        label: 'Rating'
    },
    {
        id: 'reviews',
        numeric: true,
        disablePadding: false,
        label: 'Reviews'
    }
];

const EnhancedTableHead = (props) => {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">
                    <Checkbox
                        color="primary"
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{
                            'aria-label': 'select all desserts'
                        }}
                    />
                </TableCell>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
};

EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired
};

const EnhancedTableToolbar = (props) => {
    const { numSelected } = props;

    return (
        <Toolbar
            sx={{
                pl: { sm: 2 },
                pr: { xs: 1, sm: 1 },
                ...(numSelected > 0 && {
                    bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity)
                })
            }}
        >
            {numSelected > 0 ? (
                <Typography sx={{ flex: '1 1 100%' }} color="inherit" variant="subtitle1" component="div">
                    {numSelected} selected
                </Typography>
            ) : (
                <Typography sx={{ flex: '1 1 100%' }} variant="h6" id="tableTitle" component="div">
                    All Sales
                </Typography>
            )}

            {numSelected > 0 ? (
                <Tooltip title="Delete">
                    <IconButton>
                        {/* <DeleteIcon /> */}
                        del
                    </IconButton>
                </Tooltip>
            ) : (
                <Tooltip title="Filter list">
                    <IconButton>
                        {/* <FilterListIcon /> */}
                        Fol
                    </IconButton>
                </Tooltip>
            )}
        </Toolbar>
    );
};

EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired
};

const products = [
    { id: 1, name: 'Snow', sales: 200, stock: 35, size: 'Normal', reviews: 35, Orders: 35, rating: 30 },
    { id: 2, name: 'Lannister', sales: 200, stock: 42, size: 'Normal', reviews: 42, Orders: 42, rating: 30 },
    { id: 3, name: 'Lannister', sales: 200, stock: 45, size: 'Normal', reviews: 45, Orders: 45, rating: 30 },
    { id: 4, name: 'Stark', sales: 200, stock: 16, size: 'Normal', reviews: 16, Orders: 16, rating: 30 },
    { id: 5, name: 'Targaryen', sales: 200, stock: null, reviews: null, Orders: null, rating: 30 },
    { id: 6, name: 'Melisandre', sales: 200, stock: 150, size: 'Normal', reviews: 150, Orders: 150, rating: 30 },
    { id: 7, name: 'Clifford', sales: 200, stock: 44, size: 'Normal', reviews: 44, Orders: 44, rating: 30 },
    { id: 8, name: 'Frances', sales: 200, stock: 36, size: 'Normal', reviews: 36, Orders: 36, rating: 30 },
    { id: 9, name: 'Roxie', sales: 200, stock: 65, size: 'Normal', reviews: 65, Orders: 65, rating: 30 },
    { id: 10, name: 'Snow', sales: 200, stock: 35, size: 'Normal', reviews: 35, Orders: 35, rating: 30 },
    { id: 11, name: 'Lannister', sales: 200, stock: 42, size: 'Normal', reviews: 42, Orders: 42, rating: 30 },
    { id: 12, name: 'Lannister', sales: 200, stock: 45, size: 'Normal', reviews: 45, Orders: 45, rating: 30 },
    { id: 13, name: 'Stark', sales: 200, stock: 16, size: 'Normal', reviews: 16, Orders: 16, rating: 30 },
    { id: 14, name: 'Targaryen', sales: 200, stock: null, reviews: null, Orders: null, rating: 30 },
    { id: 15, name: 'Melisandre', sales: 200, stock: 150, size: 'Normal', reviews: 150, Orders: 150, rating: 30 },
    { id: 16, name: 'Clifford', sales: 200, stock: 44, size: 'Normal', reviews: 44, Orders: 44, rating: 30 },
    { id: 17, name: 'Frances', sales: 200, stock: 36, size: 'Normal', reviews: 36, Orders: 36, rating: 30 },
    { id: 18, name: 'Frances', sales: 200, stock: 36, size: 'Normal', reviews: 36, Orders: 36, rating: 30 },
    { id: 19, name: 'Roxie', sales: 200, stock: 65, size: 'Normal', reviews: 65, Orders: 65, rating: 30 },
    { id: 20, name: 'Roxie', sales: 200, stock: 65, size: 'Normal', reviews: 65, Orders: 65, rating: 30 }
];

// sales report status
const status = [
    {
        value: 'today',
        label: 'Today'
    },
    {
        value: 'month',
        label: 'This Month'
    },
    {
        value: 'year',
        label: 'This Year'
    }
];

const DSales = () => {
    const [value, setValue] = useState('today');
    const [slot, setSlot] = useState('week');
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    // const [products, setProducts] = React.useState([]);
    const [singleProduct, setSingleProduct] = React.useState(null);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelected = (singleProduct ? singleProduct : products).map((n) => n.name);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
        }

        setSelected(newSelected);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const isSelected = (name) => selected.indexOf(name) !== -1;

    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - products.length) : 0;

    return (
        <Box>
            <Grid container rowSpacing={4.5} columnSpacing={2.75}>
                <Grid item xs={12} sx={{ mb: -2.25 }}>
                    <Typography variant="h5">Sales Details</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <AnalyticEcommerce title="Total Sales" count="4,42,236" extra="35,000" />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <AnalyticEcommerce title="30 Days" count="78,250" extra="8,900" />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <AnalyticEcommerce title="Last Year Sales" count="18,800" isLoss color="warning" extra="1,943" />
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                    <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item>
                            <Typography variant="h5">Sales Report</Typography>
                        </Grid>
                        <Grid item>
                            <TextField
                                id="standard-select-currency"
                                size="small"
                                select
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                                sx={{ '& .MuiInputBase-input': { py: 0.5, fontSize: '0.875rem' } }}
                            >
                                {status.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                    </Grid>
                    <MainCard sx={{ mt: 1.75 }}>
                        <Stack spacing={1.5} sx={{ mb: -12 }}>
                            <Typography variant="h6" color="secondary">
                                Net Profit
                            </Typography>
                            <Typography variant="h4">$1560</Typography>
                        </Stack>
                        <SalesColumnChart />
                    </MainCard>
                </Grid>
            </Grid>
            <Paper sx={{ width: '100%', mb: 2, mt: 3 }}>
                <EnhancedTableToolbar numSelected={selected.length} />
                <TableContainer>
                    <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle" size={dense ? 'small' : 'medium'}>
                        <EnhancedTableHead
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={singleProduct ? singleProduct.length : products.length}
                        />
                        <TableBody>
                            {stableSort(singleProduct ? singleProduct : products, getComparator(order, orderBy))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => {
                                    const isItemSelected = isSelected(row?.name);
                                    const labelId = `enhanced-table-checkbox-${index}`;

                                    return (
                                        <TableRow
                                            hover
                                            onClick={(event) => handleClick(event, row?.name)}
                                            stock="checkbox"
                                            aria-checked={isItemSelected}
                                            tabIndex={-1}
                                            key={row?.name}
                                            selected={isItemSelected}
                                        >
                                            <TableCell padding="checkbox">
                                                <Checkbox
                                                    color="primary"
                                                    checked={isItemSelected}
                                                    inputProps={{
                                                        'aria-labelledby': labelId
                                                    }}
                                                />
                                            </TableCell>
                                            <TableCell component="th" id={labelId} scope="row" padding="none">
                                                {row?.name}
                                            </TableCell>
                                            <TableCell align="right">${row?.sales}</TableCell>
                                            <TableCell align="right">{row?.stock}%</TableCell>
                                            <TableCell align="right">{row?.rating} Min</TableCell>
                                            <TableCell align="right">{row?.reviews}</TableCell>
                                        </TableRow>
                                    );
                                })}
                            {emptyRows > 0 && (
                                <TableRow
                                    style={{
                                        height: (dense ? 33 : 53) * emptyRows
                                    }}
                                >
                                    <TableCell colSpan={16} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 50, 100]}
                    component="div"
                    count={products.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </Box>
    );
};

export default DSales;
