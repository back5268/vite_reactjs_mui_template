import SpaceDashboardOutlinedIcon from '@mui/icons-material/SpaceDashboardOutlined';

// constant
const icons = { SpaceDashboardOutlinedIcon };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
  id: 'dashboard',
  title: 'Dashboard',
  type: 'group',
  children: [
    {
      id: 'default',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard',
      icon: icons.SpaceDashboardOutlinedIcon,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
