import React, {  } from 'react';
import { Button, Grid, Stack } from '@mui/material';
import {
  WithPadding,
  PageTitle,
} from '../../components/Styles';
import Empty from '../../components/common/Empty';
import { useNavigate } from 'react-router-dom';
import ViewCameraList from './ViewCameraList';
import SearchField from '../../components/common/SearchField';
import AddIcon from '@mui/icons-material/Add';
import { useGetData } from '../../data/apiHooks';
const Description: React.FC = () => (
  <>
    Click on <span>Add Device</span> to configure
  </>
);
const ViewCameraConfig: React.FC = () => {

  const navigate = useNavigate();

  const { data, isLoading } = useGetData('/cameraconfig');

  return (
    <Stack direction="column" height="inherit">
      <WithPadding>
        <Grid container justifyContent={'space-between'}>
          <PageTitle>Camera Configuration</PageTitle>
          <Button
            variant="contained"
            onClick={() => navigate('/dashboard/add-camera')}
            startIcon={<AddIcon />}
          >
            Add Device
          </Button>
        </Grid>
      </WithPadding>

      <WithPadding sx={{ paddingBottom: 0 }}>
        <Grid container sx={{ marginBottom: 2 }}>
          <Grid item>
            <SearchField />
          </Grid>
          <Grid item></Grid>
        </Grid>
        {!isLoading && <ViewCameraList data={data} />}
      </WithPadding>
      {isLoading && (
        <WithPadding flexGrow={1}>
          <Empty title="No devices" description={<Description />} />
        </WithPadding>
      )}
    </Stack>
  );
};

export default ViewCameraConfig;
