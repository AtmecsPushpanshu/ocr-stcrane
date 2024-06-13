import {  Button, Grid, Stack } from '@mui/material';
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
import Popup from '../../components/common/Popup';
import AdvancePresetConfig from './AdvancePresetConfig';

const AddCameraPreset = () => {
  return (
    <WithPadding sx={{ paddingTop: '10px' }}>
      <PageTitle sx={{ paddingBottom: '10px' }}>Device Preset</PageTitle>
      <CameraPresetGrid>
        <Grid sx={{ paddingRight: '10px' }}>
          <Stack>
            <GridWithBorder>
              <ImageFill
                src={containeImg}
                alt="img"
                style={{ maxHeight: '600px' }}
              />
            </GridWithBorder>
            <HeadText16 variant="h4" sx={{ marginTop: 2, marginBottom: '5px' }}>
              Captured Images
            </HeadText16>
            <Grid container columns={8} columnSpacing={2}>
              <Grid item xs={4}>
                <ImageFill src={containeImg} alt="img" />
              </Grid>
              <Grid item xs={4}>
                <ImageFill src={containeImg} alt="img" />
              </Grid>

            </Grid>
          </Stack>
        </Grid>
        <Grid sx={{ paddingBottom: '40px' }}>
          <Stack direction={'row'} spacing={1}>
            <CameraPresetControls />
            <AddCameraPresetForm />
          </Stack>
          <Stack spacing={1} sx={{ marginTop: '10px' }}>
            <Popup dialogTitle='Advance Setting' btnText='Advance Setting'>
              <AdvancePresetConfig />
            </Popup>
            <Button variant="contained">Apply</Button>
          </Stack>
        </Grid>
      </CameraPresetGrid>
    </WithPadding>
  );
};

export default AddCameraPreset;
