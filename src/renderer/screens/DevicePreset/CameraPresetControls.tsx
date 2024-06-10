import { Button, Stack } from '@mui/material';
import { GridWithBorder, HeadText16, WithPadding } from '../../components/Styles';
import PTZbutton from '../../components/common/PTZbutton';
import SelectField from '../../components/common/SelectField';
import SliderField from '../../components/common/SliderField';

const CameraPresetControls = () => {
  return (
    <>
      <WithPadding sx={{ paddingTop: 0}}>
        <Stack flexDirection={'column'}>
          <GridWithBorder>
            <WithPadding sx={{padding:'10px'}}>
              <HeadText16 sx={{ marginBottom: '4px' }}>Pan / Tilt</HeadText16>
              <Stack spacing={2}>
                <PTZbutton />
              </Stack>
            </WithPadding>
          </GridWithBorder>
          <GridWithBorder sx={{ height: 'inherit' }}>
            <WithPadding sx={{ height: 'inherit', padding: '10px' }}>
              <HeadText16 sx={{ marginBottom: '4px' }}>Zoom</HeadText16>
              <SliderField topText={'T'} bottomText={'Z'} />
            </WithPadding>
          </GridWithBorder>
          <GridWithBorder sx={{ height: 'inherit', marginLeft: '15px' }}>
            <WithPadding sx={{ height: 'inherit', padding: '10px' }}>
              <HeadText16 sx={{ marginBottom: '4px' }}>Focus</HeadText16>
              <SliderField topText={'Far'} bottomText={'Never'} />
            </WithPadding>
          </GridWithBorder>
        </Stack>
          <Stack spacing={2}>
        <Button variant="contained">Reconnect</Button>
        <Button variant="contained">Disconnect</Button>
        <Button variant="contained">Power Recycle</Button>
      </Stack>
      </WithPadding>
    </>
  );
}

export default CameraPresetControls;
