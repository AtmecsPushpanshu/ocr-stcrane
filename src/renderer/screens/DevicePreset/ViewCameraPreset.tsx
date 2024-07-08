import AddIcon from '@mui/icons-material/Add';
import { Button, Grid, Stack } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import DisplayInfo from '../../components/common/DisplayInfo';
import ImageWithLoader from '../../components/common/ImageWithLoader';
import PageHeader from '../../components/common/PageHeader';
import {
  CameraPresetGrid,
  GridWithBorder,
  WithPadding,
} from '../../components/Styles';
import PresetList from './PresetList';

const ViewCameraPreset = () => {
  const [options, setOptions] = useState([]);
  const [info, setInfo] = useState({});
  const { cameraId } = useParams();
  const navigate = useNavigate();
  const getPresets = async () => {
    try {
      const resp = await axios
        .get(`http://localhost:5050/${cameraId}/get_presets`)
        .then((resp) => resp?.data)
        .then((data) => data);
      if (Array.isArray(resp?.presets)) {
        setOptions(resp?.presets);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getCamerInfo = async () => {
    try {
      const resp = await axios
        .get(`http://localhost:5050/${cameraId}/camera-info`)
        .then((resp) => resp?.data);
      if (Object.keys(resp).length) {
        setInfo(resp);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPresets();
    getCamerInfo();
  }, []);
  return (
    <WithPadding sx={{ paddingTop: '10px' }}>
      <PageHeader
        title="Camera and Preset"
        rightSection={
          <Button
            variant="contained"
            onClick={() => navigate(`../add-camera-preset/${cameraId}`)}
            startIcon={<AddIcon />}
          >
            Add Preset
          </Button>
        }
      />
      <CameraPresetGrid>
        <Grid sx={{ paddingRight: '10px' }}>
          <Stack>
            <GridWithBorder>
              {/* <ImageFill
                src={`http://localhost:5050/${cameraId}/video_feed`}
                alt="img"
                style={{ maxHeight: '600px' }}
              /> */}
              <ImageWithLoader
                src={`http://localhost:5050/${cameraId}/video_feed`}
                width="780px"
                height="430px"
                alt="default"
              />
            </GridWithBorder>
            <DisplayInfo data={info} />
          </Stack>
        </Grid>
        <Grid sx={{ paddingBottom: '40px' }}>
          <PresetList options={options} />
        </Grid>
      </CameraPresetGrid>
    </WithPadding>
  );
};

export default ViewCameraPreset;
