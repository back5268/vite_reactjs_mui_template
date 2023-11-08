import { Backdrop, CircularProgress } from '@mui/material';
import { useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import { getAuthApi } from '@api';
import { useLoadDataState, useUserState } from '@store';

const LoadData = () => {
  const theme = useTheme();
  const token = localStorage.getItem('token');
  const clientId = localStorage.getItem('clientId');
  const { setUserInfo } = useUserState();
  const { setLoadData } = useLoadDataState();

  async function fetchData() {
    const getAuth = await getAuthApi();
    if (getAuth && getAuth.status) {
      const userInfo = getAuth.data;
      setUserInfo({ userInfo });
    } else localStorage.removeItem('token');
    setLoadData(false);
  }

  useEffect(() => {
    if (!token || !clientId) {
      setLoadData(false);
    } else fetchData();
  }, []);

  return (
    <Backdrop open={true} style={{ zIndex: 2000 }}>
      <CircularProgress size={50} thickness={5} style={{ color: theme.palette.secondary.main }} />
    </Backdrop>
  );
};

export default LoadData;
