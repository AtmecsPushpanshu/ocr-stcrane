import { Stack } from '@mui/material';
import axios from 'axios';
import { useDeferredValue } from 'react';

import PTZbutton from '../../components/common/PTZbutton';
import SliderField from '../../components/common/SliderField';
import {
  GridWithBorder,
  HeadText16,
  SubHeadText,
  WithPadding,
} from '../../components/Styles';
import useWebSocket from '../../hooks/useWebSocket';

const CameraPresetControls = ({
  handleCameraClick,
  cbPantilt,
  cbZoom,
  cameraId,
}) => {
  const deferredValue = useDeferredValue(0);
  const { sendMessage } = useWebSocket({ url: 'http://localhost:5050' });
  const setZoom = async (data) => {
    sendMessage('set_zoom', data);
  };

  const setFocus = async (data) => {
    try {
      await axios.post(`http://localhost:5050/${cameraId}/set_focus`, data);
    } catch (error) {
      console.log('error');
    }
  };

  const getZoomConfig = async (data) => {
    try {
      const resp = await axios.get(
        `http://localhost:5050/${cameraId}/camera-info`,
      );
      console.log(resp);
    } catch (error) {
      console.log('error');
    }
  };

  // useEffect(() => {
  //   getZoomConfig();
  // }, []);

  const handleChange = (event: any) => {
    const zoomval = event?.target?.value as number;
    cbZoom(Number(zoomval / 10));
    if (!isNaN(parseInt(zoomval))) {
      const zoom = zoomval / 100;
      setZoom({ zoom, cameraId });
    } else {
      setZoom({ zoom: 0, cameraId });
    }
  };
  const handleFocusChange = (event: any) => {
    const focusVal = event?.target?.value as number;

    if (!isNaN(parseInt(focusVal))) {
      const focus = focusVal / 100;
      setFocus({ focus });
    } else {
      setFocus({ focus: 0 });
    }
  };

  return (
    <GridWithBorder sx={{ width: '100%' }}>
      <WithPadding sx={{ padding: '10px' }}>
        <HeadText16 sx={{ marginBottom: '4px' }}>Pan / Tilt</HeadText16>
        <Stack spacing={2} sx={{ width: '100%', alignItems: 'center' }}>
          <PTZbutton
            handleCameraClick={handleCameraClick}
            cbPantilt={cbPantilt}
            cameraId={cameraId}
          />
          <Stack spacing={1} sx={{ width: '100%' }}>
            <GridWithBorder sx={{ height: 'inherit', width: '100%' }}>
              <WithPadding sx={{ height: 'inherit', padding: '5px 15px' }}>
                <SubHeadText>Zoom</SubHeadText>
                <SliderField
                  initialValue="T"
                  finalValue="Z"
                  onChange={handleChange}
                  defaultValue={0}
                  step={0.1}
                  marks
                  min={0}
                  max={10}
                />
              </WithPadding>
            </GridWithBorder>
            <GridWithBorder sx={{ height: 'inherit', width: '100%' }}>
              <WithPadding sx={{ height: 'inherit', padding: '5px 15px' }}>
                <SubHeadText>Focus</SubHeadText>
                <SliderField
                  initialValue="Far"
                  finalValue="Never"
                  onChange={handleFocusChange}
                  defaultValue={0}
                  step={0.1}
                  marks
                  min={0}
                  max={10}
                />
              </WithPadding>
            </GridWithBorder>
          </Stack>
        </Stack>
      </WithPadding>
    </GridWithBorder>
  );
};

export default CameraPresetControls;
