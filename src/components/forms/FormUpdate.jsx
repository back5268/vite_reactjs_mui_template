import { MainCard } from '@components';
import { LoadingButton } from '@mui/lab';
import { Button, Stack } from '@mui/material';
import { useToastState } from '@store';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FormUpdate = (props) => {
  const {
    checked,
    title,
    route,
    handleSubmit = () => {},
    handleData,
    actions = {},
    handleSuccess = () => {},
    handleFail = () => {},
    setVisibleDialog
  } = props;
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setToast } = useToastState();

  const onSubmit = async (data) => {
    setLoading(true);
    let info = handleData ? handleData(data) : { ...data };
    if (!info) {
      setLoading(false);
      return;
    }
    if (typeof info === 'string') {
      setLoading(false);
    } else {
      if (checked) {
        const response = await actions.update(info);
        if (response) setLoading(false);
        if (response.status) {
          setToast({ serevity: 'success', message: 'Cập nhật dữ liệu thành công!' });
          handleSuccess(checked);
          if (setVisibleDialog) setVisibleDialog(false);
        } else {
          setToast({ serevity: 'error', message: response.mess });
          handleFail(checked);
        }
      } else {
        const response = await actions.add(info);
        if (response) setLoading(false);
        if (response.status) {
          setToast({ serevity: 'success', message: 'Thêm dữ liệu thành công!' });
          handleSuccess(checked);
        } else {
          setToast({ serevity: 'error', message: response.mess });
          handleFail(checked);
        }
      }
    }
  };

  return (
    <MainCard title={(checked ? 'Chi tiết ' : 'Thêm mới ') + (title && title.toLowerCase())}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {props.children}
        <Stack direction="row" spacing={2} alignItems="center" justifyContent="flex-end" mt={2}>
          <Button type="button" variant="outlined" onClick={setVisibleDialog ? () => setVisibleDialog(false) : () => navigate(route)}>
            {setVisibleDialog ? 'Hủy' : 'Trở lại'}
          </Button>
          <LoadingButton type="submit" loading={loading} variant="contained" style={{ minWidth: '96px' }}>
            {checked ? 'Cập nhật' : 'Xác nhận'}
          </LoadingButton>
        </Stack>
      </form>
    </MainCard>
  );
};

export default FormUpdate;
