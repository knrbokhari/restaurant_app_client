// assets
import { SettingOutlined, QuestionOutlined, CloudSyncOutlined, SafetyCertificateOutlined } from '@ant-design/icons';

// icons
const icons = {
    SettingOutlined,
    QuestionOutlined,
    SafetyCertificateOutlined,
    CloudSyncOutlined
};

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const support = {
    id: 'support',
    title: 'Support',
    type: 'group',
    children: [
        {
            id: 'api',
            title: 'API',
            type: 'item',
            url: '/dashboard/api',
            icon: icons.CloudSyncOutlined
        },
        {
            id: 'permission',
            title: 'Permission',
            type: 'item',
            url: '/dashboard/permission',
            icon: icons.SafetyCertificateOutlined
        },
        {
            id: 'setting',
            title: 'Setting',
            type: 'item',
            url: '/dashboard/setting',
            icon: icons.SettingOutlined
        }
        // {
        //     id: 'documentation',
        //     title: 'Documentation',
        //     type: 'item',
        //     url: 'https://codedthemes.gitbook.io/mantis-react/',
        //     icon: icons.QuestionOutlined,
        //     external: true,
        //     target: true
        // }
    ]
};

export default support;
