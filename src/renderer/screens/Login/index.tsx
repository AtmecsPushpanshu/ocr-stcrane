import { yupResolver } from '@hookform/resolvers/yup';
import { Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';

import mainimage from '../../assets/img/ship.png';
import stcrane from '../../assets/img/smart-tecs.png';
import TextField from '../../components/common/TextField';

export default function Login() {
  const navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup.string().required('Enter Email'),
    password: yup.string().required('Password is required'),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (resp) => {
    navigate('/dashboard/view-cranes');
    if (resp.email === 'admin' && resp.password === 'admin') {
      navigate('/dashboard/view-cranes');
    }
  };

  return (
    <div className="grid-container">
      <div className="grid-header">
        <Grid container justifyContent="space-between">
          <Grid item>
            <img src={stcrane} alt="logo" className="header-logo" />
          </Grid>
          <Grid item alignSelf="center">
            <Typography
              variant="h5"
              color="white"
              align="center"
              fontSize="40px"
              fontWeight="600"
            >
              Configuration manager
            </Typography>
          </Grid>
        </Grid>
      </div>
      <div className="grid-content">
        <Grid
          container
          sx={{
            height: 'calc(100vh - 99px)',
            backgroundImage: `url(${mainimage})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            alignItems: 'center',
          }}
          justifyContent="center"
        >
          <Grid item xs={4} sm={3}>
            <Box
              sx={{
                backgroundColor: '#FFF',
                padding: 2,
                borderRadius: 4,
                minWidth: '350px',
              }}
            >
              <Typography variant="h6" fontSize="32px" fontWeight="600">
                Sign In
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit(onSubmit)}
                sx={{ mt: 1 }}
              >
                <Stack spacing={2}>
                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Email"
                        placeholder="EMail"
                        error={!!errors.email}
                        helperText={errors.email?.message}
                      />
                    )}
                  />
                  <Controller
                    name="password"
                    defaultValue=""
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Password"
                        placeholder="Password"
                        error={!!errors.password}
                        helperText={errors.password?.message}
                      />
                    )}
                  />
                </Stack>

                <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
                  Sign In
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
