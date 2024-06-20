import { Button, Grid, Stack } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import Empty from '../../components/common/Empty';
import SearchField from '../../components/common/SearchField';
import { PageTitle, WithPadding } from '../../components/Styles';
import { useGetData } from '../../data/apiHooks';
import ViewPlcList from './ViewPlcList';

const Description: React.FC = () => (
  <>
    Click on <span>Add Device</span> to configure
  </>
);
const ViewPlc: React.FC = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useGetData('/plcconfig');
  return (
    <Stack direction="column" height="inherit">
      <WithPadding>
        <Grid container justifyContent="space-between">
          <PageTitle>PLC Interface</PageTitle>
          <Button
            variant="contained"
            onClick={() => navigate('/dashboard/add-plc-config')}
          >
            Add PLC Device
          </Button>
        </Grid>
      </WithPadding>
      <WithPadding sx={{ py: 0 }}>
        <Grid container sx={{ marginBottom: 2 }}>
          <Grid item>
            <SearchField />
          </Grid>
          <Grid item />
        </Grid>
        {!isLoading && <ViewPlcList data={data} />}
      </WithPadding>
      {isLoading && (
        <WithPadding flexGrow={1}>
          <Empty title="No devices" description={<Description />} />
        </WithPadding>
      )}
    </Stack>
  );
};

export default ViewPlc;
