import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Box, Button, Checkbox, FormControlLabel, Grid, Stack, Typography } from '@mui/material';

import FormAuth from './form-auth';
import { FormInput, AnimateButton } from '@components';

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const [checked, setChecked] = useState(true);
  const onSubmit = (data) => {};

  return (
    <FormAuth headerTitle="Quên mật khẩu" footerTitle="Quay trở về đăng nhập" footerLink="/auth/login">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2} >
          <FormInput lg={12} id="email" label="Email Address / Username" register={register} errors={errors} required="email" />
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <FormControlLabel
                control={<Checkbox checked={checked} onChange={() => setChecked(!checked)} name="checked" color="primary" />}
                label={
                  <Typography variant="subtitle1">
                    Đồng ý với &nbsp;
                    <Typography variant="subtitle1" component={Link} to="#">
                      Điều khoản & Dịch vụ.
                    </Typography>
                  </Typography>
                }
              />
            </Grid>
          </Grid>
        </Stack>
        <Box sx={{ mt: 2 }}>
          <AnimateButton>
            <Button disableElevation fullWidth size="large" type="submit" variant="contained" color="secondary">
              Quên mật khẩu
            </Button>
          </AnimateButton>
        </Box>
      </form>
    </FormAuth>
  );
};

export default ForgotPassword;
