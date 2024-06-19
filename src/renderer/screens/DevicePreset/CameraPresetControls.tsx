import { Button, Stack } from '@mui/material';

import PTZbutton from '../../components/common/PTZbutton';
import {
  GridWithBorder,
  HeadText16,
  SubHeadText,
  WithPadding,
} from '../../components/Styles';
import AddCameraPresetForm from './AddCameraPresetForm';
import SliderField from '../../components/common/SliderField';

const CameraPresetControls = () => {
  return (
    <GridWithBorder sx={{width:'100%'}}>
      <WithPadding sx={{ padding: '10px' }}>
        <HeadText16 sx={{ marginBottom: '4px' }}>Pan / Tilt</HeadText16>
        <Stack spacing={2} sx={{ width: '100%', alignItems: 'center' }}>
          <PTZbutton />
          <Stack spacing={1} sx={{ width: '100%' }}>
            <GridWithBorder sx={{ height: 'inherit', width: '100%' }}>
              <WithPadding sx={{ height: 'inherit', padding: '5px 15px' }}>
                <SubHeadText>Zoom</SubHeadText>
                <SliderField initialValue="T" finalValue="Z" />
              </WithPadding>
            </GridWithBorder>
            <GridWithBorder sx={{ height: 'inherit', width: '100%' }}>
              <WithPadding sx={{ height: 'inherit', padding: '5px 15px' }}>
                <SubHeadText>Focus</SubHeadText>
                <SliderField initialValue="Far" finalValue="Never" />
              </WithPadding>
            </GridWithBorder>
          </Stack>

        </Stack>
      </WithPadding>
    </GridWithBorder>
  );
};

export default CameraPresetControls;
