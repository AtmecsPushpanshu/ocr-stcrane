import { Grid, Stack, Typography } from '@mui/material';
import {
  HeadText16,
  GridWithBorder,
  HeadTextCss,
  ImageFill,
  WithPadding,
} from '../../components/Styles';
import PTZbutton from '../../components/common/PTZbutton';
import containeImg from '../../assets/img/container.png';

const AddCameraPreset = () => {
  return (
    <WithPadding>
      <Typography variant="h5" {...HeadTextCss}>
        Device Preset
      </Typography>
      <Grid container columns={18} sx={{marginTop: '10px'}}>
        <Grid item xs={8}>
          <Stack>
            <GridWithBorder>
              <ImageFill src={containeImg} alt="img" />
            </GridWithBorder>
            <HeadText16 variant='h4' sx={{marginTop:2, marginBottom:'5px'}}>Captured Images</HeadText16>
            <GridWithBorder>
              <ImageFill src={containeImg} alt="img" />
            </GridWithBorder>
          </Stack>
        </Grid>
        <Grid item xs={10}>
          <WithPadding sx={{paddingTop:0}}>
          <Stack flexDirection={'row'} >
            <GridWithBorder>
              <WithPadding>
                <PTZbutton />
              </WithPadding>
            </GridWithBorder>
            <GridWithBorder>
              <WithPadding>
                <PTZbutton />
              </WithPadding>
            </GridWithBorder>
            <GridWithBorder>
              <WithPadding>
                <PTZbutton />
              </WithPadding>
            </GridWithBorder>
          </Stack>
          </WithPadding>
        </Grid>
      </Grid>
    </WithPadding>
  );
};

export default AddCameraPreset;
