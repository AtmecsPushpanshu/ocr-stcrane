import React, { FormEvent, Fragment } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import { Stack } from '@mui/material';
import stcrane from '../../assets/img/smart-tecs.png';
import mainimage from '../../assets/img/ship.png';

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://stcrane.com/">
        smart-tech System
      </Link>{' '}
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('userId'),
      password: data.get('password'),
    });
    navigate('anotherScreen');
  };

  return (
    <div className="grid-container">
      <div className="grid-header">
        <Grid container justifyContent="space-between">
          <Grid item>
            <img src={stcrane} alt="logo" className="header-logo" />
          </Grid>
          <Grid item alignSelf="center">
            <Typography variant="h5" color="white" align="center">
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
          <CssBaseline />

          <Grid item xs={3}>
            <Box
              sx={{
                backgroundColor: '#FFF',
                padding: 2,
                borderRadius: 4,
              }}
            >
              <Typography variant="h6">Sign In</Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}
              >
                <TextField
                  variant="standard"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email ID"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  variant="standard"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />

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
