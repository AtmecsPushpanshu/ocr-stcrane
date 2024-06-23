import AddIcon from '@mui/icons-material/Add';
import { Button, Grid, Stack } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import Empty from '../../components/common/Empty';
import SearchField from '../../components/common/SearchField';
import { PageTitle, WithPadding } from '../../components/Styles';
import { useGetData } from '../../data/apiHooks';
import ViewCranesList from './ViewCranesList';

const Description: React.FC = () => (
  <>
    Click on <span className="bold-600">Add Cranes</span> to configure
  </>
);
const ViewCranes: React.FC = () => {
  const { data, isLoading } = useGetData('/craneconfig');
  const navigate = useNavigate();

  return (
    <Stack direction="column" height="inherit">
      <WithPadding>
        <Grid container justifyContent="space-between">
          <PageTitle>Cranes</PageTitle>
          <Button
            variant="contained"
            onClick={() => navigate('../add-cranes')}
            startIcon={<AddIcon />}
          >
            Add Crane
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
        {!isLoading && <ViewCranesList data={data} />}
      </WithPadding>
      {isLoading && (
        <WithPadding flexGrow={1}>
          <Empty title="No devices" description={<Description />} />
        </WithPadding>
      )}
    </Stack>
  );
};

export default ViewCranes;
