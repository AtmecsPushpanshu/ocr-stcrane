import React from 'react';
import { Button, Grid, Typography } from '@mui/material';
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
        <Typography variant="h5">Camera Configuration</Typography>
        <Button variant="contained">Add Device</Button>
      </Grid>
      <Empty
        title="No devices"
        description={<Description />}
      />
    </WithPadding>
  );
};

export default ViewCameraConfig;
