import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Grid, Stack } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import * as yup from 'yup';

import PageHeader from '../../components/common/PageHeader';
import Popup from '../../components/common/Popup';
import TextField from '../../components/common/TextField';
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
  const schema = yup.object().shape({
    presetName: yup.string().required('Enter Preset Name'),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

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
  const savepreset = async (data) => {
    try {
      const resp = await axios
        .post(`http://localhost:5050/${cameraId}/save_preset`, data)
        .then(() => navigate(`../view-camera-preset/${cameraId}`));
      return resp;
    } catch (error) {
      console.log(error);
    }
  };
  const [loader, setLoader] = useState<boolean>(false);
  const applyForm = ({ presetName }: any) => {
    const final = { pan, tilt, zoom, preset_name: presetName };
    console.log(final);

    const resp = savepreset(final);
    console.log(resp);
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
            {/* <HeadText16 variant="h4" sx={{ marginTop: 2, marginBottom: '5px' }}>
              Pan : {pan} &nbsp; Tilt : {tilt} &nbsp; Zoom: {zoom}
            </HeadText16> */}
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
            <Popup
              variant="contained"
              onSubmit={handleSubmit(applyForm)}
              dialogTitle="Preset"
              btnText="Save Preset"
            >
              <Controller
                name="presetName"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Preset Name"
                    placeholder="Preset Name"
                    error={!!errors.presetName}
                    helperText={errors.presetName?.message}
                  />
                )}
              />
            </Popup>
          </Stack>
        </Grid>
      </CameraPresetGrid>
    </WithPadding>
  );
};

export default AddCameraPreset;
