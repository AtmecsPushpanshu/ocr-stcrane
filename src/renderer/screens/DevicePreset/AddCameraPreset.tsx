import { Button, Grid, Stack } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import PageHeader from '../../components/common/PageHeader';
import Popup from '../../components/common/Popup';
import {
  CameraPresetGrid,
  GridWithBorder,
  HeadText16,
  ImageFill,
  WithPadding,
} from '../../components/Styles';
import AddCameraPresetForm from './AddCameraPresetForm';
import AdvancePresetConfig from './AdvancePresetConfig';
import CameraPresetControls from './CameraPresetControls';

const AddCameraPreset = () => {
  const navigate = useNavigate();
  const [imgSources, setImgSources] = useState([]);
  const handleCameraClick = async () => {
    try {
      const resp = await axios.get('http://localhost:5050/get-frame');
      setImgSources((prev) => [
        ...prev,
        `data:image/jpeg;base64,${resp?.data}`,
      ]);
    } catch (error) {
      console.log('error');
    }
  };
  const [loader, setLoader] = useState<boolean>(false);
  const applyForm = () => {
    setLoader(true);
    setTimeout(() => {
      navigate(-1);
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
                src="https://20.20.20.77/axis-cgi/mjpg/video.cgi?camera=1&h264profile=high&resolution=800x450"
                alt="img"
                style={{ maxHeight: '600px' }}
              />
            </GridWithBorder>
            <HeadText16 variant="h4" sx={{ marginTop: 2, marginBottom: '5px' }}>
              Captured Images
            </HeadText16>
            <Grid container columns={8} columnSpacing={2}>
              {imgSources.map((imgItem) => (
                <Grid item xs={4}>
                  <ImageFill src={imgItem} alt="img" />
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Grid>
        <Grid sx={{ paddingBottom: '40px' }}>
          <Stack direction="row" spacing={1}>
            <CameraPresetControls handleCameraClick={handleCameraClick} />
            <AddCameraPresetForm />
          </Stack>
          <Stack direction="row" spacing={1} sx={{ marginTop: '10px' }}>
            <Button variant="outlined" sx={{ width: '100%' }}>
              Reconnect
            </Button>
            <Button variant="outlined" sx={{ width: '100%' }}>
              Disconnect
            </Button>
            <Button variant="outlined" sx={{ width: '100%' }}>
              Power Recycle
            </Button>
          </Stack>
          <Stack spacing={1} sx={{ marginTop: '10px' }}>
            <Popup dialogTitle="Advance Setting" btnText="Advance Setting">
              <AdvancePresetConfig />
            </Popup>
            <Button variant="contained" onClick={applyForm}>
              Save Preset
            </Button>
          </Stack>
        </Grid>
      </CameraPresetGrid>
    </WithPadding>
  );
};

export default AddCameraPreset;
