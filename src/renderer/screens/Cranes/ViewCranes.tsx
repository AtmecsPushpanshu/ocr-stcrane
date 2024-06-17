import React, { useState } from 'react';
import { Button, Grid, Stack } from '@mui/material';
import { WithPadding, PageTitle } from '../../components/Styles';
import Empty from '../../components/common/Empty';
import { useNavigate } from 'react-router-dom';
import SearchField from '../../components/common/SearchField';
import AddIcon from '@mui/icons-material/Add';
const Description: React.FC = () => (
  <>
    Click on <span className="bold-600">Add Cranes</span> to configure
  </>
);
const ViewCranes: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const navigate = useNavigate();

  return (
    <Stack direction="column" height="inherit">
      <WithPadding>
        <Grid container justifyContent={'space-between'}>
          <PageTitle>Cranes</PageTitle>
          <Button
            variant="contained"
            onClick={() => navigate('/dashboard/add-camera')}
            startIcon={<AddIcon />}
          >
            Add Device
          </Button>
        </Grid>
      </WithPadding>

      <WithPadding sx={{ py: 0 }}>
        <Grid container>
          <Grid item>
            <SearchField />
          </Grid>
          <Grid item></Grid>
        </Grid>
        {toggle && 'List cranes component'}
      </WithPadding>
      {!toggle && (
        <WithPadding flexGrow={1}>
          <Empty title="No Cranes" description={<Description />} />
        </WithPadding>
      )}
    </Stack>
  );
};

export default ViewCranes;
