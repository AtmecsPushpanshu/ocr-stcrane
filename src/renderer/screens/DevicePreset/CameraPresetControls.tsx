import { Button, Stack, Typography } from '@mui/material';
import {
  GridWithBorder,
  HeadText16,
  SubHeadText,
  WithPadding,
} from '../../components/Styles';
import PTZbutton from '../../components/common/PTZbutton';
import SelectField from '../../components/common/SelectField';
import SliderField from '../../components/common/SliderField';

const CameraPresetControls = () => {
  return (
    <>
      <WithPadding sx={{ paddingTop: 0 }}>
        <GridWithBorder>
          <WithPadding sx={{ padding: '10px' }}>
            <HeadText16 sx={{ marginBottom: '4px' }}>Pan / Tilt</HeadText16>
            <Stack spacing={2} sx={{ width: '100%', alignItems: 'center' }}>
              <PTZbutton />
              <GridWithBorder sx={{ height: 'inherit', width: '100%' }}>
                <WithPadding sx={{ height: 'inherit', padding: '5px 15px' }}>
                  <SubHeadText>Zoom</SubHeadText>
                  <SliderField topText={'T'} bottomText={'Z'} />
                </WithPadding>
              </GridWithBorder>
              <GridWithBorder sx={{ height: 'inherit', width: '100%' }}>
                <WithPadding sx={{ height: 'inherit', padding: '5px 15px' }}>
                  <SubHeadText>Focus</SubHeadText>
                  <SliderField topText={'Far'} bottomText={'Never'} />
                </WithPadding>
              </GridWithBorder>
            </Stack>
          </WithPadding>
        </GridWithBorder>
        <GridWithBorder sx={{ padding: '10px' }}>
          <Stack direction={'row'} spacing={1}>
            <Button size="small" variant="outlined">
              <SubHeadText>Reconnect</SubHeadText>
            </Button>
            <Button size="small" variant="outlined">
              <SubHeadText>Disconnect</SubHeadText>
            </Button>
            <Button size="small" variant="outlined">
              <SubHeadText>Power Recycle</SubHeadText>
            </Button>
          </Stack>
        </GridWithBorder>
      </WithPadding>
    </>
  );
};

export default CameraPresetControls;
