import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, Divider, Grid } from '@mui/material';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';

import PageHeader from '../../components/common/PageHeader';
import TextField from '../../components/common/TextField';
import SuccessLoader from '../../components/messages/SuccessLoader';
import { WithPadding } from '../../components/Styles';
import { usePostData } from '../../data/apiHooks';

function AddCraneForm() {
  const [loader, setLoader] = useState<boolean>(false);
  const navigate = useNavigate();
  const mutation = usePostData('/craneconfig', {
    mutationKey: ['CRANE', { endpoint: '/craneconfig' }], // Example mutationKey
    onSuccess: () => {
      setLoader(true);
      navigate('../view-cranes');
    },
  });

  const schema = yup.object().shape({
    craneName: yup.string().required('Select Crane'),
    craneId: yup.string().required('Crane Id is required'),
    laneCount: yup.string().required('Crane Id is required'),
    craneType: yup.string().required('Crane Id is required'),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    mutation.mutate(data);
  };

  return (
    <>
      <WithPadding>
        <SuccessLoader loader={loader} />
        <PageHeader title="Add Crane" />
      </WithPadding>

      <WithPadding>
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          sx={{ mt: 1, flexDirection: 'row' }}
        >
          <Grid container spacing={2} columns={12}>
            <Grid item xs={3}>
              <Controller
                name="craneName"
                defaultValue=""
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Crane Name"
                    placeholder="Crane Name"
                    error={!!errors.craneName}
                    helperText={errors.craneName?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={3}>
              <Controller
                name="craneId"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Crane Id"
                    placeholder="Crane Id"
                    error={!!errors.craneId}
                    helperText={errors.craneId?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={3}>
              <Controller
                name="craneType"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Crane Type"
                    placeholder="Crane Type"
                    error={!!errors.craneType}
                    helperText={errors.craneType?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={3}>
              <Controller
                name="laneCount"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="No of Lanes"
                    placeholder="No of Lanes"
                    error={!!errors.laneCount}
                    helperText={errors.laneCount?.message}
                  />
                )}
              />
            </Grid>
          </Grid>

          <Divider sx={{ marginTop: 3, marginBottom: 3 }} />
          <Grid item xs={6} textAlign="start">
            <Button type="submit" variant="contained">
              Save
            </Button>
          </Grid>
        </Box>
      </WithPadding>
    </>
  );
}

export default AddCraneForm;
