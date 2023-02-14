import React, { useEffect } from 'react';
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
    Typography
} from '@mui/material';
import PropTypes from 'prop-types';
import { visuallyHidden } from '@mui/utils';
import { alpha } from '@mui/material/styles';

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
        id: 'price',
        numeric: true,
        disablePadding: false,
        label: 'Price'
    },
    {
        id: 'discount',
        numeric: true,
        disablePadding: false,
        label: 'Discount'
    },
    {
        id: 'time',
        numeric: true,
        disablePadding: false,
        label: 'Time'
    },
    {
        id: 'stock_out',
        numeric: true,
        disablePadding: false,
        label: 'Stock_out'
    },
    {
        id: 'reviews',
        numeric: true,
        disablePadding: false,
        label: 'Reviews'
    },
    {
        id: 'button',
        numeric: true,
        disablePadding: false,
        label: 'Action'
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
                    All Products
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
    { id: 1, name: 'Snow', price: 200, discount: 35, size: 'Normal', reviews: 35, stock_out: 35, time: 30 },
    { id: 2, name: 'Lannister', price: 200, discount: 42, size: 'Normal', reviews: 42, stock_out: 42, time: 30 },
    { id: 3, name: 'Lannister', price: 200, discount: 45, size: 'Normal', reviews: 45, stock_out: 45, time: 30 },
    { id: 4, name: 'Stark', price: 200, discount: 16, size: 'Normal', reviews: 16, stock_out: 16, time: 30 },
    { id: 5, name: 'Targaryen', price: 200, discount: null, reviews: null, stock_out: null, time: 30 },
    { id: 6, name: 'Melisandre', price: 200, discount: 150, size: 'Normal', reviews: 150, stock_out: 150, time: 30 },
    { id: 7, name: 'Clifford', price: 200, discount: 44, size: 'Normal', reviews: 44, stock_out: 44, time: 30 },
    { id: 8, name: 'Frances', price: 200, discount: 36, size: 'Normal', reviews: 36, stock_out: 36, time: 30 },
    { id: 9, name: 'Roxie', price: 200, discount: 65, size: 'Normal', reviews: 65, stock_out: 65, time: 30 },
    { id: 10, name: 'Snow', price: 200, discount: 35, size: 'Normal', reviews: 35, stock_out: 35, time: 30 },
    { id: 11, name: 'Lannister', price: 200, discount: 42, size: 'Normal', reviews: 42, stock_out: 42, time: 30 },
    { id: 12, name: 'Lannister', price: 200, discount: 45, size: 'Normal', reviews: 45, stock_out: 45, time: 30 },
    { id: 13, name: 'Stark', price: 200, discount: 16, size: 'Normal', reviews: 16, stock_out: 16, time: 30 },
    { id: 14, name: 'Targaryen', price: 200, discount: null, reviews: null, stock_out: null, time: 30 },
    { id: 15, name: 'Melisandre', price: 200, discount: 150, size: 'Normal', reviews: 150, stock_out: 150, time: 30 },
    { id: 16, name: 'Clifford', price: 200, discount: 44, size: 'Normal', reviews: 44, stock_out: 44, time: 30 },
    { id: 17, name: 'Frances', price: 200, discount: 36, size: 'Normal', reviews: 36, stock_out: 36, time: 30 },
    { id: 18, name: 'Frances', price: 200, discount: 36, size: 'Normal', reviews: 36, stock_out: 36, time: 30 },
    { id: 19, name: 'Roxie', price: 200, discount: 65, size: 'Normal', reviews: 65, stock_out: 65, time: 30 },
    { id: 20, name: 'Roxie', price: 200, discount: 65, size: 'Normal', reviews: 65, stock_out: 65, time: 30 }
];

const DProductPsize = () => {
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
                                            role="checkbox"
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
                                            <TableCell align="right">${row?.price}</TableCell>
                                            <TableCell align="right">{row?.discount}%</TableCell>
                                            <TableCell align="right">{row?.time} Min</TableCell>
                                            <TableCell align="right">{row?.stock_out}</TableCell>
                                            <TableCell align="right">{row?.reviews}</TableCell>
                                            <TableCell align="right">
                                                <Stack direction="row" spacing={1}>
                                                    <IconButton
                                                        aria-label="view"
                                                        // onClick={() => setViewProduct(row)}
                                                    >
                                                        see
                                                        {/* <VisibilityIcon onClick={handleOpen} /> */}
                                                    </IconButton>
                                                    <IconButton
                                                        aria-label="edit"
                                                        color="primary"
                                                        // onClick={() => handleEditProduct(row?._id)}
                                                    >
                                                        edi
                                                        {/* <EditIcon /> */}
                                                    </IconButton>

                                                    <IconButton
                                                        sx={{ color: 'red' }}
                                                        aria-label="delete"
                                                        // onClick={() => setDelectProduct(row)}
                                                    >
                                                        del
                                                        {/* <DeleteIcon onClick={handleOpenDelectModal} /> */}
                                                    </IconButton>
                                                </Stack>
                                            </TableCell>
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

export default DProductPsize;
