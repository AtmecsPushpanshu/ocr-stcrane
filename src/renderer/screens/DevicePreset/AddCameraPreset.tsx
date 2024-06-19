import { Button, Grid, Stack } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import containeImg from '../../assets/img/container.png';
import PageHeader from '../../components/common/PageHeader';
import Popup from '../../components/common/Popup';
import {
  CameraPresetGrid,
  GridWithBorder,
  HeadText16,
  ImageFill,
  WithPadding,
} from '../../components/Styles';
import { PATHS } from '../../constants/paths';
import AddCameraPresetForm from './AddCameraPresetForm';
import AdvancePresetConfig from './AdvancePresetConfig';
import CameraPresetControls from './CameraPresetControls';

const AddCameraPreset = () => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState<boolean>(false);
  const applyForm = () => {
    setLoader(true);
    setTimeout(() => {
      navigate(`../../${PATHS.DASHBOARD.viewcameraconfig}`, { state: 'added' });
    }, 1000);
  };
  return (
    <WithPadding sx={{ paddingTop: '10px' }}>
      <PageHeader title="Device Preset" showBackIcon />
      <CameraPresetGrid>
        <Grid sx={{ paddingRight: '10px' }}>
          <Stack>
            <GridWithBorder>
              <ImageFill
                src={containeImg}
                alt="img"
                style={{ maxHeight: '600px' }}
              />
              {/* <AxisCamera /> */}
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
          <Stack direction="row" spacing={1}>
            <CameraPresetControls />

          </Stack>
          <Stack spacing={1} sx={{ marginTop: '10px' }}>
            <Popup dialogTitle="Advance Setting" btnText="Advance Setting">
              <AdvancePresetConfig />
            </Popup>
            <Button variant="contained" onClick={applyForm}>
              Apply
            </Button>
          </Stack>
        </Grid>
      </CameraPresetGrid>
    </WithPadding>
  );
};

export default AddCameraPreset;
