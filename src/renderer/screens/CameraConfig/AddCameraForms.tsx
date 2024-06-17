import {
  Box,
  Button,
  Grid,
  Divider,
  Stack,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { FormEvent } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import TextField from '../../components/common/TextField';
import SelectField from '../../components/common/SelectField';
import { cameraDetails, mockData } from '../../data/mock';
import {
  CameraDetailHeadText,
  HeadText16,
  HeadText,
} from '../../components/Styles';

export const AddCameraFormAuto = () => {
  const navigate = useNavigate();
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
        <Divider sx={{ marginTop: 4, marginBottom: 4 }} />
        <HeadText variant={'h4'}>Details</HeadText>
        <List sx={{ width: '100%', maxWidth: 360 }}>
          {cameraDetails.map(({ name, value }) => (
            <ListItem
              key={value}
              disableGutters
              sx={{ paddingBottom: 0 }}
              secondaryAction={
                <>
                  <HeadText16 variant="h5">{value}</HeadText16>
                </>
              }
            >
              <ListItemText
                primary={
                  <CameraDetailHeadText variant="h5">
                    {name}
                  </CameraDetailHeadText>
                }
              />
            </ListItem>
          ))}
        </List>
      </Stack>
      <Button
        type="button"
        variant="contained"
        onClick={() => navigate('/dashboard/add-camera-preset')}
      >
        Continue
      </Button>
    </>
  );
};

export const AddCameraFormManual = () => {
  const schema = yup.object().shape({
    terminal: yup.string().required('Select Terminal'),
    crane: yup.string().required('Select Crane'),
    location: yup.string().required('Select Location'),
    deviceName: yup.string().required('Device name is required'),
    deviceMake: yup.string().required('Device Make is required'),
    deviceModel: yup.string().required('Device Model is required'),
    ipAddress: yup.string().required('IP Address is required'),
    port: yup.string().required('Port Number is required'),
  });
  const {
    getValues,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  console.log(getValues())
  console.log(errors)
  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <Box
        component="form"
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        sx={{ mt: 1, flexDirection: 'row' }}
      >
        <Grid container>
          <Grid item xs={12} md={9}>
            <Grid container spacing={3} columns={9}>
              <Grid item xs={3}>
                <SelectField
                  label="Terminal"
                  items={mockData.terminal}
                  {...register('terminal')}
                  error={!!errors.terminal}
                  helperText={errors.terminal?.message}
                />
              </Grid>
              <Grid item xs={3}>
                <SelectField
                  label="Choose crane"
                  placeholder="Choose crane"
                  items={mockData.crane}
                  {...register('crane')}
                  error={!!errors.crane}
                  helperText={errors.crane?.message}
                />
              </Grid>
              <Grid item xs={3}>
                <SelectField
                  label="Choose Location"
                  placeholder="Choose Location"
                  items={mockData.location}
                  {...register('location')}
                  error={!!errors.location}
                  helperText={errors.location?.message}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  label="Device Name"
                  placeholder="Device Name"
                  {...register('deviceName')}
                  error={!!errors.deviceName}
                  helperText={errors.deviceName?.message}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  label="Device Make"
                  placeholder="Device Make"
                  {...register('deviceMake')}
                  error={!!errors.deviceMake}
                  helperText={errors.deviceMake?.message}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  label="Device Model"
                  placeholder="Device Model"
                  {...register('deviceModel')}
                  error={!!errors.deviceModel}
                  helperText={errors.deviceModel?.message}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  label="IP Address"
                  placeholder="IP Address"
                  {...register('ipAddress')}
                  error={!!errors.ipAddress}
                  helperText={errors.ipAddress?.message}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  label="Port Number"
                  placeholder="Port Number"
                  {...register('port')}
                  error={!!errors.port}
                  helperText={errors.port?.message}
                />
              </Grid>
              <Grid item xs={6} textAlign={'start'}>
                <Button
                  type="submit"
                  variant="contained"
                  //onClick={() => navigate('/dashboard/add-camera-preset')}
                >
                  Save
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
