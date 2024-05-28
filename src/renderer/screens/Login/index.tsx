import { FormEvent } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import stcrane from '../../assets/img/smart-tecs.png';
import mainimage from '../../assets/img/ship.png';
import {PATHS} from '../../constants/paths';
export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('userId'),
      password: data.get('password'),
    });
    navigate(PATHS.DASHBOARD.viewcameraconfig);
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
          <CssBaseline />

          <Grid item xs={4} sm={3}>
            <Box
              sx={{
                backgroundColor: '#FFF',
                padding: 2,
                borderRadius: 4,
              }}
            >
              <Typography variant="h6" fontSize="32px" fontWeight="600">
                Sign In
              </Typography>
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
