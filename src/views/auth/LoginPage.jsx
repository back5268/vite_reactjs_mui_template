import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { Box, Button, Checkbox, FormControlLabel, IconButton, InputAdornment, Stack, Typography } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

import FormAuth from './form-auth';
import AnimateButton from '@components/extended/AnimateButton';
import { FormInput } from '@components/forms';
import { getData } from '@lib/request';
import { getUserState } from '@store/userState';

const LoginPage = () => {
  const {
    register, reset,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [checked, setChecked] = useState(true);
  const { data } = useQuery('users', () => getData('/users'));
  const { setUserInfo } = getUserState()
  const navigate = useNavigate()

  const onSubmit = (form) => {
    const user = data.find(d => d.email === form.email && d.website === form.password);
    if (user) {
      reset();
      setUserInfo({ userInfo: user, token: user.username })
      localStorage.setItem('token', user.username)
      navigate('/')
    }
  };

  return (
    <FormAuth headerTitle="Đăng nhập" footerTitle="Bạn chưa có tài khoản, đăng ký" footerLink="/auth/register">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          id="email"
          type="email"
          label="Email Address / Username"
          register={register}
          errors={errors}
          required="email"
        />
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
            Forgot Password?
          </Typography>
        </Stack>
        <Box sx={{ mt: 2 }}>
          <AnimateButton>
            <Button disableElevation fullWidth size="large" type="submit" variant="contained" color="secondary">
              Sign in
            </Button>
          </AnimateButton>
        </Box>
      </form>
    </FormAuth>
  );
}

export default LoginPage;
