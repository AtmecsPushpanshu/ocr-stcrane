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
            onClick={() => navigate('../add-camera-preset/1')}
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
              {!toggle ? (
                <ImageFill
                  src="http://localhost:5050/1/video_feed"
                  alt="img"
                  style={{ maxHeight: '600px' }}
                />
              ) : (
                <ImageFill
                  src="http://localhost:5050/2/video_feed"
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
