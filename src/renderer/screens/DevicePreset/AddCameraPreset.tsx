import { Grid, Typography } from '@mui/material';
import {  HeadTextCss, WithPadding } from '../../components/Styles';
import PTZbutton from '../../components/common/PTZbutton';

const AddCameraPreset = () => {

  return (
    <WithPadding>
      <Typography variant="h5" {...HeadTextCss}>
        Device Preset
      </Typography>
      <Grid container columns={18}>
        <Grid item xs={8}>
         <PTZbutton />
        </Grid>
        <Grid item xs={10}>

        </Grid>
      </Grid>
    </WithPadding>
  );
};

export default AddCameraPreset;
