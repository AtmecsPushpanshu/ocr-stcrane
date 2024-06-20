import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, Divider, Grid } from '@mui/material';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';

import SelectField from '../../components/common/SelectField';
import TextField from '../../components/common/TextField';
import SuccessLoader from '../../components/messages/SuccessLoader';
import { PageTitle, WithPadding } from '../../components/Styles';
import { usePostData } from '../../data/apiHooks';
import { mockData } from '../../data/mock';

function AddPlcDevice() {
  const [loader, setLoader] = useState<boolean>(false);
  const navigate = useNavigate();
  const mutation = usePostData('/plcconfig', {
    mutationKey: ['PLC', { endpoint: '/plcconfig' }], // Example mutationKey
    onSuccess: () => {
      setLoader(true);
      navigate('../view-plc-config');
    },
  });

  const schema = yup.object().shape({
    crane: yup.string().required('Select Crane'),
    ipAddress: yup.string().required('IP Address is required'),
    plcName: yup.string().required('PLC Name is required'),
    port: yup.string().required('Port Number is required'),
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
        <Grid container justifyContent="space-between">
          <PageTitle>PLC Interface</PageTitle>
        </Grid>
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
                name="crane"
                defaultValue="select"
                control={control}
                render={({ field }) => (
                  <SelectField
                    {...field}
                    items={mockData.crane}
                    label="Choose crane"
                    placeholder="Choose crane"
                    error={!!errors.crane}
                    helperText={errors.crane?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={3}>
              <Controller
                name="plcName"
                defaultValue=""
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="PLC Name"
                    placeholder="PLC Name"
                    error={!!errors.plcName}
                    helperText={errors.plcName?.message}
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

export default AddPlcDevice;
