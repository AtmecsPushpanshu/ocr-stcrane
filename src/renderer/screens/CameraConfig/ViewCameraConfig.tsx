import React, { useEffect, useState } from 'react';
import { Box, Button, Grid, Stack, Tab, Tabs, Typography } from '@mui/material';
import {
  WithPadding,
  HeadTextCss,
  TabTextCss,
  PageTitle,
} from '../../components/Styles';
import Empty from '../../components/common/Empty';
import { useLocation, useNavigate } from 'react-router-dom';
import ViewCameraList from './ViewCameraList';
import SearchField from '../../components/common/SearchField';
import AddIcon from '@mui/icons-material/Add';
const Description: React.FC = () => (
  <>
    Click on <span>Add Device</span> to configure
  </>
);
const ViewCameraConfig: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(true);
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state;
  useEffect(() => {
    if (state === 'added') {
      setToggle(true);
    }
  }, [state]);

  return (
    <Stack direction="column" height="inherit">
      <WithPadding>
        <Grid container justifyContent={'space-between'}>
          <PageTitle>Camera Configuration</PageTitle>
          <Button
            variant="contained"
            onClick={() => navigate('/dashboard/add-camera')}
            startIcon={<AddIcon />}
          >
            Add Device
          </Button>
        </Grid>
      </WithPadding>

      <WithPadding sx={{ paddingBottom: 0 }}>
        <Grid container sx={{ marginBottom: 2 }}>
          <Grid item>
            <SearchField />
          </Grid>
          <Grid item></Grid>
        </Grid>
        {toggle && <ViewCameraList />}
      </WithPadding>
      {!toggle && (
        <WithPadding flexGrow={1}>
          <Empty title="No devices" description={<Description />} />
        </WithPadding>
      )}
    </Stack>
  );
};

export default ViewCameraConfig;
