import { SyntheticEvent, useState } from 'react';
import { Box, Tab, Tabs } from '@mui/material';
import { TabPresetTextCss, TabTextCss, WithPadding } from '../../components/Styles';
import TabPanel, { a11yProps } from '../../components/common/TabPanel';

const AddCameraPresetForm = () => {
  const [value, setValue] = useState(0);

const handleChange = (event: SyntheticEvent, newValue: number) => {
  setValue(newValue);
};
  return (
    <WithPadding>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Automatic" value={0} {...a11yProps(0)} sx={TabPresetTextCss}/>
            <Tab label="Manual" value={1} {...a11yProps(1)} sx={TabPresetTextCss}/>
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          hj
        </TabPanel>
        <TabPanel value={value} index={1}>
          hj
        </TabPanel>
      </Box>
    </WithPadding>
  );
}

export default AddCameraPresetForm;
