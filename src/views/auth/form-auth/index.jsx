import { Link } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Divider, Grid, Stack, Typography, useMediaQuery } from '@mui/material';

// assets
import Google from '@assets/images/icons/social-google.svg';

// project imports
import AuthWrapper from './AuthWrapper';
import AuthCardWrapper from './AuthCardWrapper';
import { Logo, AnimateButton, AuthFooter } from '@components';
import { useConfigState } from '@store';

const FormAuth = (props) => {
  const { headerTitle, footerTitle, footerLink } = props;
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
  const { borderRadius } = useConfigState();

  const googleHandler = async () => {};

  return (
    <AuthWrapper>
      <Grid container direction="column" justifyContent="flex-end" sx={{ minHeight: '100vh' }}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: '100vh' }}>
            <Grid item sx={{ m: 2 }}>
              <AuthCardWrapper>
                <Grid container spacing={2} alignItems="center" justifyContent="center">
                  <Grid item sx={{ mb: 3, mt: 3 }}>
                    <Logo />
                  </Grid>
                  <Grid item xs={12} sx={{ mb: 2 }}>
                    <Grid container direction={matchDownSM ? 'column-reverse' : 'row'} alignItems="center" justifyContent="center">
                      <Grid item>
                        <Stack alignItems="center" justifyContent="center" spacing={1}>
                          <Typography color={theme.palette.secondary.main} gutterBottom variant='h2'>
                            {headerTitle}
                          </Typography>
                          <Typography variant="caption" fontSize="14px" textAlign={matchDownSM ? 'center' : 'inherit'}>
                            Nhập thông tin xác thực của bạn để tiếp tục
                          </Typography>
                        </Stack>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    {/* <Grid container direction="column" justifyContent="center" spacing={2}>
                      <Grid item xs={12}>
                        <AnimateButton>
                          <Button
                            disableElevation
                            fullWidth
                            onClick={googleHandler}
                            size="large"
                            variant="outlined"
                            sx={{
                              color: 'grey.700',
                              backgroundColor: theme.palette.grey[50],
                              borderColor: theme.palette.grey[100]
                            }}
                          >
                            <Box sx={{ mr: { xs: 1, sm: 2, width: 20 } }}>
                              <img src={Google} alt="google" width={16} height={16} style={{ marginRight: matchDownSM ? 8 : 16 }} />
                            </Box>
                            Sign in with Google
                          </Button>
                        </AnimateButton>
                      </Grid>
                      <Grid item xs={12}>
                        <Box
                          sx={{
                            alignItems: 'center',
                            display: 'flex'
                          }}
                        >
                          <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />

                          <Button
                            variant="outlined"
                            sx={{
                              cursor: 'unset',
                              m: 2,
                              py: 0.5,
                              px: 7,
                              borderColor: `${theme.palette.grey[100]} !important`,
                              color: `${theme.palette.grey[900]}!important`,
                              fontWeight: 500,
                              borderRadius: `${borderRadius}px`
                            }}
                            disableRipple
                            disabled
                          >
                            OR
                          </Button>

                          <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
                        </Box>
                      </Grid>
                      <Grid item xs={12} container alignItems="center" justifyContent="center">
                        <Box sx={{ mb: 2 }}>
                          <Typography variant="subtitle1">Sign in with Email address</Typography>
                        </Box>
                      </Grid>
                    </Grid> */}
                    {props.children}
                  </Grid>
                  <Grid item xs={12}>
                    <Divider />
                  </Grid>
                  <Grid item xs={12}>
                    <Grid item container direction="column" alignItems="center" xs={12}>
                      <Typography component={Link} to={footerLink} variant="subtitle1" sx={{ textDecoration: 'none' }}>
                        {footerTitle}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </AuthCardWrapper>
            </Grid>
          </Grid>
        </Grid>
        {/* <Grid item xs={12} sx={{ m: 3, mt: 1 }}>
          <AuthFooter />
        </Grid> */}
      </Grid>
    </AuthWrapper>
  );
};

export default FormAuth;
