import MarkEmailReadOutlinedIcon from '@mui/icons-material/MarkEmailReadOutlined';
import MobileFriendlyOutlinedIcon from '@mui/icons-material/MobileFriendlyOutlined';

const icons = {
  MarkEmailReadOutlinedIcon,
  MobileFriendlyOutlinedIcon
};

const tests = {
  id: 'tests',
  title: 'Test',
  type: 'group',
  children: [
    {
      id: 'mail',
      title: 'Gửi mail',
      icon: icons.MarkEmailReadOutlinedIcon,
      type: 'item',
      url: '/mail'
    },
    {
      id: 'sms',
      title: 'Gửi sms',
      icon: icons.MobileFriendlyOutlinedIcon,
      type: 'item',
      url: '/sms'
    }
  ]
};

export default tests;
