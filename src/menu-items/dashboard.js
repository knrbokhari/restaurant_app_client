// assets
import { DashboardOutlined } from '@ant-design/icons';

// icons
const icons = {
    DashboardOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
    id: 'group-dashboard',
    title: 'Navigation',
    type: 'group',
    children: [
        {
            id: 'dashboard',
            title: 'Dashboard',
            type: 'item',
            url: '/dashboard/default',
            icon: icons.DashboardOutlined,
            breadcrumbs: false
        },
        {
            id: 'products',
            title: 'Products',
            type: 'item',
            url: '/dashboard/products',
            icon: icons.DashboardOutlined,
            breadcrumbs: false
        },
        {
            id: 'orders',
            title: 'Total Orders',
            type: 'item',
            url: '/dashboard/orders',
            icon: icons.DashboardOutlined,
            breadcrumbs: false
        },
        {
            id: 'users',
            title: 'Total Users',
            type: 'item',
            url: '/dashboard/users',
            icon: icons.DashboardOutlined,
            breadcrumbs: false
        },
        {
            id: 'sales',
            title: 'Total Sales',
            type: 'item',
            url: '/dashboard/sales',
            icon: icons.DashboardOutlined,
            breadcrumbs: false
        }
    ]
};

export default dashboard;
