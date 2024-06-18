import { FC, SyntheticEvent, useState } from 'react';
import { Grid } from '@mui/material';
import { WithPadding, PageTitle } from '../../components/Styles';
import { AddCameraFormManual } from './AddCameraForms';

interface AddCameraProps {}

const AddCamera: FC<AddCameraProps> = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      <WithPadding>
        <Grid container justifyContent={'space-between'}>
          <PageTitle>Add Camera</PageTitle>
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
