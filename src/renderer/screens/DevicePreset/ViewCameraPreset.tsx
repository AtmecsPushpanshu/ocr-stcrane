import AddIcon from '@mui/icons-material/Add';
import { Button, Grid, Stack } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import containeImg from '../../assets/img/container.png';
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
  const [loader, setLoader] = useState<boolean>(false);

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
              <ImageFill
                src={containeImg}
                alt="img"
                style={{ maxHeight: '600px' }}
              />
              {/* <AxisCamera /> */}
            </GridWithBorder>
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
