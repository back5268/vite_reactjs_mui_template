import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Box, Button, Checkbox, FormControlLabel, Grid, Typography } from '@mui/material';

import AnimateButton from '@components/extended/AnimateButton';
import FormAuth from './form-auth';
import { FormInput } from '@components/forms';

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const [checked, setChecked] = useState(true);
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <FormAuth headerTitle="Quên mật khẩu" footerTitle="Quay trở về đăng nhập" footerLink="/auth/login">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput id="email" label="Email Address / Username" register={register} errors={errors} required="email" />
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <FormControlLabel
              control={<Checkbox checked={checked} onChange={() => setChecked(!checked)} name="checked" color="primary" />}
              label={
                <Typography variant="subtitle1">
                  Agree with &nbsp;
                  <Typography variant="subtitle1" component={Link} to="#">
                    Terms & Condition.
                  </Typography>
                </Typography>
              }
            />
          </Grid>
        </Grid>
        <Box sx={{ mt: 2 }}>
          <AnimateButton>
            <Button disableElevation fullWidth size="large" type="submit" variant="contained" color="secondary">
              Forgot password
            </Button>
          </AnimateButton>
        </Box>
      </form>
    </FormAuth>
  );
};

export default ForgotPassword;
