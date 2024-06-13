import { Box, Button, Grid, Divider, Stack } from '@mui/material';
import { PageTitle, WithPadding, HeadText16 } from '../../components/Styles';
import SelectField from '../../components/common/SelectField';
import TextField from '../../components/common/TextField';
import { useNavigate } from 'react-router-dom';
import SuccessLoader from '../../components/messages/SuccessLoader';
import { useState } from 'react';

const AddPlcDevice = () => {
  const [loader, setLoader] = useState<boolean>(false)
  const navigate = useNavigate();
  const applyForm =() =>{
    setLoader(true)
    setTimeout(()=>{
      navigate(`../view-plc-config`);
    }, 1000)
  }
  return (
    <>
      <WithPadding>
      <SuccessLoader loader={loader} />
        <Grid container justifyContent={'space-between'}>
          <PageTitle>PLC Interface</PageTitle>
        </Grid>
      </WithPadding>

      <WithPadding>
        <Box
          component="form"
          noValidate
          onSubmit={() => null}
          sx={{ mt: 1, flexDirection: 'row' }}
        >
          <Grid container spacing={2} columns={12}>
            <Grid item xs={3}>
              <SelectField label="Terminal" placeholder="IP Address" />
            </Grid>
            <Grid item xs={3}>
              <SelectField label="Choose crane" placeholder="IP Address" />
            </Grid>
            <Grid item xs={3}>
              <TextField label="PLC Name" placeholder="PLC Name" />
            </Grid>

            <Grid item xs={3}>
              <TextField label="IP Address" placeholder="IP Address" />
            </Grid>
            <Grid item xs={3}>
              <TextField label="Port Number" placeholder="Port Number" />
            </Grid>
          </Grid>
          <Divider sx={{ marginTop: 3, marginBottom: 3 }} />
          <HeadText16 sx={{ marginTop: 3, marginBottom: 3 }}>
            Threshold Values
          </HeadText16>
          <Grid container>
            <Grid xs={9}>
              <Grid container spacing={3} columns={9}>
                <Grid item xs={3}>
                  <TextField
                    label="Hoist Position"
                    placeholder="Hoist Position"
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    label="Min Hoist Speed"
                    placeholder="Min Hoist Speed"
                    disabled
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    label="Max Hoist Speed"
                    placeholder="Max Hoist Speed"
                    disabled
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    label="Trolley Position"
                    placeholder="Trolley Position"
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    label="Spreader Landed"
                    placeholder="Spreader Landed"
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    label="Move Direction"
                    placeholder="Move Direction"
                  />
                </Grid>
                {/* <Grid item xs={3}>
              <TextField label="Trolley Width" placeholder="Trolley Width" />
            </Grid>
            <Grid item xs={3}>
              <TextField
                label="Trolley Parked"
                placeholder="Trolley Parked"
                disabled
              />
            </Grid> */}

                <Grid item xs={3}>
                  <TextField
                    label="Hoist Up Request"
                    placeholder="Hoist Up Request"
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    label="Hoist Down Request"
                    placeholder="Hoist Down Request"
                    disabled
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    label="Twist Lock"
                    placeholder="Twist Lock"
                    disabled
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Divider sx={{ marginTop: 3, marginBottom: 3 }} />
          <Grid item xs={6} textAlign={'start'}>
            <Button type="button" variant="contained" onClick={applyForm}>
              Save
            </Button>
          </Grid>
        </Box>
      </WithPadding>
    </>
  );
};

export default AddPlcDevice;
