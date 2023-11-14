import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';

const icons = {
  SettingsSuggestOutlinedIcon,
  NotificationsActiveOutlinedIcon
};

const configs = {
  id: 'configs',
  title: 'Cấu hình',
  type: 'group',
  children: [
    {
      id: 'config',
      title: 'Cấu hình',
      type: 'collapse',
      icon: icons.SettingsSuggestOutlinedIcon,
      children: [
        {
          id: 'category',
          title: 'Loại thông báo',
          type: 'item',
          url: '/category-template'
        },
        {
          id: 'template',
          title: 'Mẫu thông báo',
          type: 'item',
          url: '/template'
        }
      ]
    },
    {
      id: 'log',
      title: 'Thông báo',
      type: 'collapse',
      icon: icons.NotificationsActiveOutlinedIcon,
      children: [
        {
          id: 'log',
          title: 'Lịch sử thông báo',
          type: 'item',
          url: '/log'
        },
        {
          id: 'black-list',
          title: 'Danh sách chặn',
          type: 'item',
          url: '/black-list'
        }
      ]
    }
  ]
};

export default configs;
