import React from 'react';
import { Grid } from '@mui/material';
import { WithPadding } from '../../components/Styles';

interface ViewCameraConfigProps {

}

const ViewCameraConfig: React.FC<ViewCameraConfigProps> = () => {
  return (
    <WithPadding>
      <h1>Camera Configuration</h1>
      <Grid container sx={{border:'1px solid #ddd', height: '20px'}}></Grid>
    </WithPadding>
  );
};

export default ViewCameraConfig;
