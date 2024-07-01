import AddIcon from '@mui/icons-material/Add';
import { Button, Grid, Stack } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import PageHeader from '../../components/common/PageHeader';
import {
  CameraPresetGrid,
  GridWithBorder,
  ImageFill,
  WithPadding,
} from '../../components/Styles';
import PresetList from './PresetList';

const ViewCameraPreset = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <WithPadding sx={{ paddingTop: '10px' }}>
      <PageHeader
        title="Camera and Preset"
        rightSection={
          <Button
            variant="contained"
            onClick={() => navigate('../add-camera-preset')}
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
              {toggle ? (
                <ImageFill
                  src="http://20.20.20.76/axis-cgi/mjpg/video.cgi?camera=1&resolution=800x450"
                  alt="img"
                  style={{ maxHeight: '600px' }}
                />
              ) : (
                <ImageFill
                  src="http://20.20.20.77/axis-cgi/mjpg/video.cgi?camera=1&resolution=800x450"
                  alt="img"
                  style={{ maxHeight: '600px' }}
                />
              )}
              {/* <AxisCamera /> */}
            </GridWithBorder>
            <Button
              variant="contained"
              onClick={() => setToggle((prev) => !prev)}
            >
              Switch Camera
            </Button>
          </Stack>
        </Grid>
        <Grid sx={{ paddingBottom: '40px' }}>
          <PresetList />
        </Grid>
      </CameraPresetGrid>
    </WithPadding>
  );
};

export default ViewCameraPreset;
