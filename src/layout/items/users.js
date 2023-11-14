import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';

const icons = {
  PeopleAltOutlinedIcon
};

const users = {
  id: 'users',
  title: 'Người dùng',
  type: 'group',
  children: [
    {
      id: 'user',
      title: 'Danh sách người dùng',
      icon: icons.PeopleAltOutlinedIcon,
      type: 'item',
      url: '/user'
    }
  ]
};

export default users;
