import { MainCard } from '@components';
import { LoadingButton } from '@mui/lab';
import { Button, Stack } from '@mui/material';
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

  const onSubmit = async (data) => {
    setLoading(true);
    let info = handleData ? handleData(data) : { ...data };
    if (typeof info === 'string') {
      setLoading(false);
    } else {
      if (checked) {
        const response = await actions.update(info);
        if (response) setLoading(false);
        if (response.status) {
          handleSuccess(checked);
        } else {
          handleFail(checked);
        }
      } else {
        const response = await actions.add(info);
        if (response) setLoading(false);
        if (response.status) {
          handleSuccess(checked);
          if (setVisibleDialog) setVisibleDialog(false);
        } else {
          handleFail(checked);
        }
      }
    }
  };

  return (
    <MainCard title={setVisibleDialog ? '' : (checked ? 'Chi tiết' : 'Thêm mới') + title}>
      <form onSubmit={handleSubmit(onSubmit)}>{props.children}</form>
      <Stack direction="row" spacing={2} alignItems="center" justifyContent="flex-end" mt={2}>
        <Button type="button" variant="outlined" onClick={setVisibleDialog ? () => setVisibleDialog(false) : () => navigate(route)}>
          Trở lại
        </Button>
        <LoadingButton type="submit" loading={loading} variant="contained" style={{ minWidth: '96px' }}>
          {checked ? 'Cập nhật' : 'Xác nhận'}
        </LoadingButton>
      </Stack>
    </MainCard>
  );
};

export default FormUpdate;
