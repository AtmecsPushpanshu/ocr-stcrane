import React from 'react';
import { Box, Button, Grid, Stack, Tab, Tabs, Typography } from '@mui/material';
import { WithPadding, HeadTextCss, TabTextCss, PageTitle } from '../../components/Styles';
import Empty from '../../components/common/Empty';
import { useNavigate } from 'react-router-dom';
import ViewCameraList from './ViewCameraList';
import SearchField from '../../components/common/SearchField';

const Description: React.FC = () => (
  <>
    Click on <span>Add Device</span> to configure
  </>
);
const ViewCameraConfig: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Stack direction="column" height="inherit">
      <WithPadding>
        <Grid container justifyContent={'space-between'}>
          <PageTitle>
            Add Camera
          </PageTitle>
          <Button
            variant="contained"
            onClick={() => navigate('/dashboard/add-camera')}
          >
            Add Device
          </Button>
        </Grid>
      </WithPadding>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={1} aria-label="basic tabs example">
            <Tab label="Devices" value={1} sx={TabTextCss} />
            <Tab
              label="Preset Setting"
              value={2}
              sx={TabTextCss}
            />
          </Tabs>
        </Box>
      </Box>
      <WithPadding>
        <Grid container sx={{marginBottom: 2}}>
          <Grid item>
            <SearchField />
          </Grid>
          <Grid item></Grid>
        </Grid>
        <ViewCameraList />
      </WithPadding>
      <WithPadding flexGrow={1}>
        <Empty title="No devices" description={<Description />} />
      </WithPadding>
    </Stack>
  );
};

export default ViewCameraConfig;
