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
import { Controller, useForm } from 'react-hook-form';
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
    control,
    getValues,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();
  const onSubmit = (data: any) => {
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
                <Controller
                  name="terminal"
                  defaultValue="select"
                  control={control}
                  render={({ field }) => (
                    <SelectField
                      {...field}
                      label="Terminal"
                      items={mockData.terminal}
                      error={!!errors.terminal}
                      helperText={errors.terminal?.message}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={3}>
                <Controller
                  name="crane"
                  defaultValue="select"
                  control={control}
                  render={({ field }) => (
                    <SelectField
                      {...field}
                      label="Choose crane"
                      placeholder="Choose crane"
                      items={mockData.crane}
                      error={!!errors.crane}
                      helperText={errors.crane?.message}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={3}>
                <Controller
                  name="location"
                  defaultValue="select"
                  control={control}
                  render={({ field }) => (
                    <SelectField
                      {...field}
                      label="Choose Location"
                      placeholder="Choose Location"
                      items={mockData.location}
                      {...register('location')}
                      error={!!errors.location}
                      helperText={errors.location?.message}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={3}>
                <Controller
                  name="deviceName"
                  defaultValue=""
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Device Name"
                      placeholder="Device Name"
                      error={!!errors.deviceName}
                      helperText={errors.deviceName?.message}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={3}>
                <Controller
                  name="deviceMake"
                  defaultValue=""
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Device Make"
                      placeholder="Device Make"
                      error={!!errors.deviceMake}
                      helperText={errors.deviceMake?.message}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={3}>
                <Controller
                  name="deviceModel"
                  defaultValue=""
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Device Model"
                      placeholder="Device Model"
                      error={!!errors.deviceModel}
                      helperText={errors.deviceModel?.message}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={3}>
                <Controller
                  name="ipAddress"
                  defaultValue=""
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="IP Address"
                      placeholder="IP Address"
                      error={!!errors.ipAddress}
                      helperText={errors.ipAddress?.message}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={3}>
                <Controller
                  name="port"
                  defaultValue=""
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Port Number"
                      placeholder="Port Number"
                      error={!!errors.port}
                      helperText={errors.port?.message}
                    />
                  )}
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
