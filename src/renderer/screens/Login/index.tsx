import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { useNavigate } from 'react-router-dom'
import stcrane from '../../assets/img/stcrane.png'
import mainimage from '../../assets/img/ship.png'
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
  )
}

export default function Login() {
  const navigate = useNavigate()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    console.log({
      email: data.get('userId'),
      password: data.get('password'),
    })
    navigate('anotherScreen')
  }

  return (
    <Grid container component="main"
        sx={{ height: '100vh',
          backgroundImage: `url(${mainimage})`,
          backgroundRepeat: 'no-repeat',
          backgroundColor: 'rgba(24, 40, 94, 0.69)',
          backgroundSize: 'strech',
          backgroundPosition: 'center',
          backgroundBlendMode: 'lighten',
        }}>
      <CssBaseline />
<Container component="main" maxWidth="xs">
<Box
          sx={{
            my: 8,
            mx: 4,
            backgroundColor:'#FFF',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img src={stcrane} alt="logo" width={200} />
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <TextField
              variant={'standard'}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant={'standard'}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
            <Copyright sx={{ mt: 5 }} />
          </Box>
        </Box>
      </Container>

    </Grid>
  )
}
