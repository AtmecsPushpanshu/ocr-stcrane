import { Button, Grid, Stack } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

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
  const { cameraId } = useParams();
  console.log(cameraId);

  const navigate = useNavigate();
  const [pan, setPan] = useState(0);
  const [tilt, setTilt] = useState(0);
  const [zoom, setZoom] = useState(0);
  const [imgSources, setImgSources] = useState([]);
  const handleCameraClick = async () => {
    try {
      const resp = await axios.get(
        `http://localhost:5050/${cameraId}/get_frame`,
      );
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
  const cbPantilt = (P, T) => {
    setTilt(T);
    setPan(P);
  };
  const cbZoom = (Z) => {
    setZoom(Z);
  };
  if (!cameraId) {
    navigate(-1);
  }
  return (
    <WithPadding sx={{ paddingTop: '10px' }}>
      <PageHeader title="Device Preset" showBackIcon />
      <CameraPresetGrid>
        <Grid sx={{ paddingRight: '10px' }}>
          <Stack>
            <GridWithBorder>
              <ImageFill
                src={`http://localhost:5050/${cameraId}/video_feed`}
                alt="img"
                style={{ maxHeight: '600px' }}
              />
              {/* <ImageFill
                src="http://20.20.20.76/axis-cgi/mjpg/video.cgi?camera=1&resolution=800x450"
                alt="img"
                style={{ maxHeight: '600px' }}
              /> */}
            </GridWithBorder>
            <HeadText16 variant="h4" sx={{ marginTop: 2, marginBottom: '5px' }}>
              Pan : {pan} &nbsp; Tilt : {tilt} &nbsp; Zoom: {zoom}
            </HeadText16>
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
            <CameraPresetControls
              cbZoom={cbZoom}
              handleCameraClick={handleCameraClick}
              cbPantilt={cbPantilt}
              cameraId={cameraId}
            />
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
