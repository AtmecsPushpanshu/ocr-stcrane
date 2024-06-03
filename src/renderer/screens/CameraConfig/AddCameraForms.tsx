import {
  Box,
  Button,
  Grid,
  Divider,
  Stack,
  Typography,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { FormEvent } from 'react';
import TextField from '../../components/common/TextField';
import SelectField from '../../components/common/SelectField';
import { cameraDetails } from '../../data/mock';
import { useNavigate } from 'react-router-dom';

export const AddCameraFormAuto = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(data);
  };
  return (
    <>
      <Box
        component="form"
        noValidate
        onSubmit={handleSubmit}
        sx={{ mt: 1, flexDirection: 'row' }}
      >
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <SelectField label="Terminal" placeholder="IP Address" />
          </Grid>
          <Grid item xs={3}>
            <SelectField label="Choose crane" placeholder="IP Address" />
          </Grid>
          <Grid item xs={3}>
            <TextField label="IP Address" placeholder="IP Address" />
          </Grid>
          <Grid item xs={3} alignSelf={'self-end'}>
            <Button type="submit" variant="contained">
              Search
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Stack>
        <Divider sx={{ marginTop: 4 }} />
        <Typography variant={'h5'}>Details</Typography>
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        >
          {cameraDetails.map(({ name, value }) => (
            <ListItem
              key={value}
              disableGutters
              secondaryAction={
                <>
                  <Typography variant="h5">{value}</Typography>
                </>
              }
            >
              <ListItemText primary={name} />
            </ListItem>
          ))}
        </List>
      </Stack>
      <Button type="button" variant="contained">
        Continue
      </Button>
    </>
  );
};

export const AddCameraFormManual = () => {
  const navigate = useNavigate()
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(data);
  };
  return (
    <>
      <Box
        component="form"
        noValidate
        onSubmit={handleSubmit}
        sx={{ mt: 1, flexDirection: 'row' }}
      >
        <Grid container>
          <Grid item xs={12} md={6}>
            <Grid container spacing={3} columns={6}>
              <Grid item xs={3}>
                <SelectField label="Terminal" placeholder="IP Address" />
              </Grid>
              <Grid item xs={3}>
                <SelectField label="Choose crane" placeholder="IP Address" />
              </Grid>
              <Grid item xs={3}>
                <TextField label="Device Name" placeholder="Device Name" />
              </Grid>
              <Grid item xs={3}>
                <TextField label="Device Make" placeholder="Device Make" />
              </Grid>
              <Grid item xs={3}>
                <TextField label="Device Model" placeholder="Device Model" />
              </Grid>
              <Grid item xs={3}>
                <TextField label="IP Address" placeholder="IP Address" />
              </Grid>
              <Grid item xs={3}>
                <TextField label="Port Number" placeholder="Port Number" />
              </Grid>
              <Grid item xs={6} textAlign={'end'}>
                <Button type="submit" variant="contained">
                  Next
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Stack>
        <Divider sx={{ marginTop: 4 }} />
        <Typography variant={'h5'}>Details</Typography>
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        >
          {cameraDetails.map(({ name, value }) => (
            <ListItem
              key={value}
              disableGutters
              secondaryAction={
                <>
                  <p>{value}</p>
                </>
              }
            >
              <ListItemText primary={name} />
            </ListItem>
          ))}
        </List>
      </Stack>
      <Button type="button" variant="contained" onClick={()=>navigate("/dashboard/add-camera-preset")}>
        Continue
      </Button>
    </>
  );
};
