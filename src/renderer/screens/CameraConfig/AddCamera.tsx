import { Grid } from '@mui/material';
import { FC } from 'react';

import PageHeader from '../../components/common/PageHeader';
import { WithPadding } from '../../components/Styles';
import { AddCameraFormManual } from './AddCameraForms';

interface AddCameraProps {}

const AddCamera: FC<AddCameraProps> = () => {
  return (
    <>
      <WithPadding>
        <Grid container justifyContent="space-between">
          <PageHeader title="Add Camera" />
        </Grid>
        <AddCameraFormManual />
      </WithPadding>
      {/* <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Automatic" value={0} {...a11yProps(0)} sx={TabTextCss}/>
            <Tab label="Manual" value={1} {...a11yProps(1)} sx={TabTextCss}/>
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <AddCameraFormAuto />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <AddCameraFormManual />
        </TabPanel>
      </Box> */}
    </>
  );
};

export default AddCamera;
