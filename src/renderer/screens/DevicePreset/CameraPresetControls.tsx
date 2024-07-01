import { Stack } from '@mui/material';
import axios from 'axios';

import PTZbutton from '../../components/common/PTZbutton';
import SliderField from '../../components/common/SliderField';
import {
  GridWithBorder,
  HeadText16,
  SubHeadText,
  WithPadding,
} from '../../components/Styles';
import { useDeferredValue, useEffect } from 'react';

const CameraPresetControls = () => {
  const deferredValue = useDeferredValue(0);
  const setZoom = async (data) => {
    try {
      const resp = await axios.post('http://localhost:5000/set_zoom', data);
      console.log(resp);
    } catch (error) {
      console.log('error');
    }
  };

  const getZoomConfig = async (data) => {
    try {
      const resp = await axios.get('http://localhost:5000/zoom_range');
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

    if (!isNaN(parseInt(zoomval))) {
      const zoom = zoomval / 100;
      setZoom({ zoom });
    } else {
      setZoom({ zoom: 0 });
    }
  };

  const handleCameraClick = async () => {
    try {
      const resp = await axios.get('http://localhost:5000/get-frame');
      console.log(resp?.data);
    } catch (error) {
      console.log('error');
    }
  };

  return (
    <GridWithBorder sx={{ width: '100%' }}>
      <WithPadding sx={{ padding: '10px' }}>
        <HeadText16 sx={{ marginBottom: '4px' }}>Pan / Tilt</HeadText16>
        <Stack spacing={2} sx={{ width: '100%', alignItems: 'center' }}>
          <PTZbutton handleCameraClick={handleCameraClick} />
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
