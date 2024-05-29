import React from 'react';
import { Box, Button, Grid, Tab, Tabs, Typography } from '@mui/material';
import { WithPadding } from '../../components/Styles';
import Empty from '../../components/common/Empty';

interface ViewCameraConfigProps {}
  const Description: React.FC = () => (
    <>
      Click on <span>Add Device</span> to configure
    </>
  );
const ViewCameraConfig: React.FC<ViewCameraConfigProps> = () => {

  return (
    <WithPadding>
      <Grid container justifyContent={'space-between'}>
        <Typography variant="h5">Add Camera</Typography>
        <Button variant="contained">Add Device</Button>
      </Grid>
      <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={1} aria-label="basic tabs example">
          <Tab label="Devices" value={1}  />
          <Tab label="Preset Setting" value={2} />
        </Tabs>
      </Box>
    </Box>
      <Empty
        title="No devices"
        description={<Description />}
      />
    </WithPadding>
  );
};

export default ViewCameraConfig;
