// assets
import { DashboardOutlined, FileProtectOutlined, ShopOutlined, TeamOutlined, CoffeeOutlined } from '@ant-design/icons';

// icons
const icons = {
    DashboardOutlined,
    FileProtectOutlined,
    ShopOutlined,
    TeamOutlined,
    CoffeeOutlined
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
            url: '/dashboard',
            icon: icons.DashboardOutlined,
            breadcrumbs: false
        },
        {
            id: 'products',
            title: 'Products',
            type: 'item',
            url: '/dashboard/products',
            icon: icons.ShopOutlined,
            breadcrumbs: false
        },
        {
            id: 'orders',
            title: 'Orders',
            type: 'item',
            url: '/dashboard/orders',
            icon: icons.CoffeeOutlined,
            breadcrumbs: false
        },
        {
            id: 'users',
            title: 'Users',
            type: 'item',
            url: '/dashboard/users',
            icon: icons.TeamOutlined,
            breadcrumbs: false
        },
        {
            id: 'sales',
            title: 'Sales',
            type: 'item',
            url: '/dashboard/sales',
            icon: icons.FileProtectOutlined,
            breadcrumbs: false
        }
    ]
};

export default dashboard;
