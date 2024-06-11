import { SyntheticEvent, useState } from 'react';
import { Box, Tab, Tabs, Stack } from '@mui/material';
import {
  GridWithBorder,
  SubHeadText,
  TabPresetTextCss,
  WithPadding,
} from '../../components/Styles';
import TabPanel, { a11yProps } from '../../components/common/TabPanel';
import SliderField from '../../components/common/SliderField';

const AddCameraPresetForm = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            sx={{ minHeight: '42px' }}
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab
              label="Camera Setup"
              value={0}
              {...a11yProps(0)}
              sx={TabPresetTextCss}
            />
            <Tab
              label="Presets"
              value={1}
              {...a11yProps(1)}
              sx={TabPresetTextCss}
            />
          </Tabs>
        </Box>
        <TabPanel
          value={value}
          index={0}
          sxBox={{ p: '10px', border: '1px solid #c4c4c4' }}
        >
          <Stack spacing={1}>
            <GridWithBorder>
              <WithPadding sx={{ height: 'inherit', padding: '5px 15px' }}>
                <SubHeadText>Brightness</SubHeadText>
                <SliderField finalValue={'30%'} />
              </WithPadding>
            </GridWithBorder>
            <GridWithBorder>
              <WithPadding sx={{ height: 'inherit', padding: '5px 15px' }}>
                <SubHeadText>Contrast</SubHeadText>
                <SliderField finalValue={'30%'} />
              </WithPadding>
            </GridWithBorder>
            <GridWithBorder>
              <WithPadding sx={{ height: 'inherit', padding: '5px 15px' }}>
                <SubHeadText>Saturation</SubHeadText>
                <SliderField finalValue={'30%'} />
              </WithPadding>
            </GridWithBorder>
            <GridWithBorder>
              <WithPadding sx={{ height: 'inherit', padding: '5px 15px' }}>
                <SubHeadText>Temperature</SubHeadText>
                <SliderField finalValue={'30%'} />
              </WithPadding>
            </GridWithBorder>
          </Stack>
        </TabPanel>
        <TabPanel
          value={value}
          index={1}
          sxBox={{ p: '10px', border: '1px solid #c4c4c4' }}
        >
          <Stack spacing={1}>
            <GridWithBorder sx={{ height: 'inherit', width: '100%' }}>
              <WithPadding sx={{ height: 'inherit', padding: '5px 15px' }}>
                <SubHeadText>Zoom</SubHeadText>
                <SliderField initialValue={'T'} finalValue={'Z'} />
              </WithPadding>
            </GridWithBorder>
            <GridWithBorder sx={{ height: 'inherit', width: '100%' }}>
              <WithPadding sx={{ height: 'inherit', padding: '5px 15px' }}>
                <SubHeadText>Focus</SubHeadText>
                <SliderField initialValue={'Far'} finalValue={'Never'} />
              </WithPadding>
            </GridWithBorder>
          </Stack>
        </TabPanel>
      </Box>
    </>
  );
};

export default AddCameraPresetForm;
