import {  Grid, Stack } from '@mui/material';
import {
  HeadText16,
  GridWithBorder,
  ImageFill,
  WithPadding,
  PageTitle,
  CameraPresetGrid
} from '../../components/Styles';
import containeImg from '../../assets/img/container.png';
import CameraPresetControls from './CameraPresetControls';
import AddCameraPresetForm from './AddCameraPresetForm';

const AddCameraPreset = () => {
  return (
    <WithPadding>
      <PageTitle>Device Preset</PageTitle>
      <CameraPresetGrid>
        <Grid>
          <Stack>
            <GridWithBorder>
              <ImageFill src={containeImg} alt="img" style={{maxHeight: '600px'}} />
            </GridWithBorder>
            <HeadText16 variant="h4" sx={{ marginTop: 2, marginBottom: '5px' }}>
              Captured Images
            </HeadText16>
            <GridWithBorder>
              <ImageFill src={containeImg} alt="img" />
            </GridWithBorder>
          </Stack>
        </Grid>
        <Grid>
          <CameraPresetControls />
          <AddCameraPresetForm />
        </Grid>
      </CameraPresetGrid>
    </WithPadding>
  );
};

export default AddCameraPreset;
