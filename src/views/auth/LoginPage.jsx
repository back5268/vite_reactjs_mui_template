import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Box, Checkbox, FormControlLabel, IconButton, InputAdornment, Stack, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { Visibility, VisibilityOff } from '@mui/icons-material';

import FormAuth from './form-auth';
import { FormInput, AnimateButton } from '@components';
import { loginApi } from '@api';
import { useLoadDataState } from '@store';

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [checked, setChecked] = useState(true);
  const [loading, setLoading] = useState(false);
  const { setLoadData } = useLoadDataState();

  const onSubmit = async (data) => {
    setLoading(true);
    const response = await loginApi({ email: data.username, password: data.password });
    if (response.data.status) {
      setLoading(false);
      const token = response.data.data.token;
      localStorage.setItem('token', token);
      setLoadData(true);
    } else {
      setLoading(false);
    }
  };

  return (
    <FormAuth headerTitle="Đăng nhập" footerTitle="Bạn chưa có tài khoản, đăng ký" footerLink="/auth/register">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput id="username" label="Email Address / Username" register={register} errors={errors} required="email" />
        <FormInput
          id="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          register={register}
          errors={errors}
          required="password"
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowPassword(!showPassword)}
                onMouseDown={(e) => e.preventDefault()}
                edge="end"
                size="large"
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
        <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1}>
          <FormControlLabel
            control={<Checkbox checked={checked} onChange={() => setChecked(!checked)} name="checked" color="primary" />}
            label="Remember me"
          />
          <Typography
            component={Link}
            to={'/auth/forgot-password'}
            variant="subtitle1"
            color="secondary"
            sx={{ textDecoration: 'none', cursor: 'pointer' }}
          >
            Quên mật khẩu?
          </Typography>
        </Stack>
        <Box sx={{ mt: 2 }}>
          <AnimateButton>
            <LoadingButton loading={loading} fullWidth type="submit" variant="contained" color="secondary">
              Sign in
            </LoadingButton>
          </AnimateButton>
        </Box>
      </form>
    </FormAuth>
  );
};

export default LoginPage;
