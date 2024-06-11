import { Button, Grid, Stack } from '@mui/material';
import React from 'react';
import { PageTitle, WithPadding } from '../../components/Styles';
import { useNavigate } from 'react-router-dom';
import SearchField from '../../components/common/SearchField';
import ViewPlcList from './ViewPlcList';

const ViewPlc: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <Stack direction="column" height="inherit">
        <WithPadding>
          <Grid container justifyContent={'space-between'}>
            <PageTitle>PLC Interface</PageTitle>
            <Button
              variant="contained"
              onClick={() => navigate('/dashboard/add-plc-config')}
            >
              Add PLC Device
            </Button>
          </Grid>
        </WithPadding>
        <WithPadding>
          <Grid container sx={{ marginBottom: 2 }}>
            <Grid item>
              <SearchField />
            </Grid>
            <Grid item></Grid>
          </Grid>
          <ViewPlcList />
        </WithPadding>
      </Stack>
    </>
  );
};

export default ViewPlc;
