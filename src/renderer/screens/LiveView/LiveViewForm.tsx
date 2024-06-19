import React from 'react';
import { Box, Button, Grid, Stack } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import SelectField from '../../components/common/SelectField';
import containeImg from '../../assets/img/container.png';
import { mockData } from '../../data/mock';
import { CameraPresetGrid, ImageFill } from '../../components/Styles';
import SideCameraList from './SideCameraList';

const LiveViewForm = () => {

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({});

  return (
    <Stack direction={'row'} spacing={3}>
      <Grid container>
        <Grid item xs={12} md={12}>
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
            <Grid item xs={3} alignContent={'end'}>
              <Button type="submit" variant="contained">
                Submit
              </Button>
            </Grid>
          </Grid>
          <Grid container columns={8} columnSpacing={1} sx={{ marginTop: '15px' }}>
            <Grid item xs={4}>
              <ImageFill src={containeImg} alt="img" />
            </Grid>
            <Grid item xs={4}>
              <ImageFill src={containeImg} alt="img" />
            </Grid>
            <Grid item xs={4}>
              <ImageFill src={containeImg} alt="img" />
            </Grid>
            <Grid item xs={4}>
              <ImageFill src={containeImg} alt="img" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <SideCameraList />
    </Stack>

  );
};

export default LiveViewForm;
