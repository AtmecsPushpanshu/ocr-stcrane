import { Button, Stack } from '@mui/material';
import {
  GridWithBorder,
  HeadText16,
  WithPadding,
} from '../../components/Styles';
import PTZbutton from '../../components/common/PTZbutton';
import ResponsiveDialog from '../../components/common/Popup';

const CameraPresetControls = () => {
  return (
    <>
      <GridWithBorder>
        <WithPadding sx={{ padding: '10px' }}>
          <HeadText16 sx={{ marginBottom: '4px' }}>Pan / Tilt</HeadText16>
          <Stack spacing={2} sx={{ width: '100%', alignItems: 'center' }}>
            <PTZbutton />
            <ResponsiveDialog />
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
        </WithPadding>
      </GridWithBorder>
    </>
  );
};

export default CameraPresetControls;
