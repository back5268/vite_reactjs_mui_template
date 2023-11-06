import { Backdrop, CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { useUserState } from '@store/userState';
import { useQuery } from 'react-query';
import { getData } from '@lib/request';

const LoadData = () => {
  const theme = useTheme();
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem('token');
  const { data } = useQuery('users', async () => await getData('/users'));
  const { setUserInfo } = useUserState();

  const fetchData = async () => {
    if (data && data[0]) {
      const user = data.find((d) => d.username === token);
      if (user) {
        setUserInfo({ userInfo: user, token: user.username });
      } else {
        localStorage.removeItem('token');
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    if (!token) {
      setLoading(false);
    } else fetchData();
  }, []);

  if (loading)
    return (
      <Backdrop open={true} style={{ zIndex: 2000 }}>
        <CircularProgress size={50} thickness={5} style={{ color: theme.palette.secondary.main }} />
      </Backdrop>
    );
};

export default LoadData;
