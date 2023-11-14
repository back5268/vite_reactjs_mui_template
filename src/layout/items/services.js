import LanOutlinedIcon from '@mui/icons-material/LanOutlined';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';

const icons = {
  LanOutlinedIcon,
  HandshakeOutlinedIcon
};

const services = {
  id: 'services',
  title: 'Dịch vụ',
  type: 'group',
  children: [
    {
      id: 'service',
      title: 'Dịch vụ',
      type: 'collapse',
      icon: icons.LanOutlinedIcon,
      children: [
        {
          id: 'service',
          title: 'Nhà cung cấp',
          type: 'item',
          url: '/service'
        },
        {
          id: 'service-detail',
          title: 'Dịch vụ',
          type: 'item',
          url: '/service-detail'
        },
        {
          id: 'service-use',
          title: 'Thiết lập dịch vụ',
          type: 'item',
          url: '/service-use'
        }
      ]
    },
    {
      id: 'my-service',
      title: 'Đối tác',
      type: 'collapse',
      icon: icons.HandshakeOutlinedIcon,
      children: [
        {
          id: 'my-service',
          title: 'Ứng dụng',
          type: 'item',
          url: '/my-service'
        },
        {
          id: 'company',
          title: 'Công ty',
          type: 'item',
          url: '/company'
        },
        {
          id: 'project',
          title: 'Dự án',
          type: 'item',
          url: '/project'
        }
      ]
    }
  ]
};

export default services;
