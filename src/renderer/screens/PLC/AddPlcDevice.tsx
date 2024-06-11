import { Box, Button, Grid, Stack, TextField } from '@mui/material';
import { PageTitle, WithPadding } from '../../components/Styles';
import SelectField from '../../components/common/SelectField';

const AddPlcDevice = () => {
  return (
    <>
    <Stack direction="column" height="inherit">
      <WithPadding>
        <Grid container justifyContent={'space-between'}>
          <PageTitle>PLC Interface</PageTitle>
        </Grid>
      </WithPadding>
    </Stack>
    <Box
        component="form"
        noValidate
        onSubmit={() => null}
        sx={{ mt: 1, flexDirection: 'row' }}
      >
        <Grid container>
          <Grid item xs={12} md={6}>
            <Grid container spacing={3} columns={6}>
              <Grid item xs={3}>
                <SelectField label="Terminal" placeholder="IP Address" />
              </Grid>
              <Grid item xs={3}>
                <SelectField label="Choose crane" placeholder="IP Address" />
              </Grid>
              <Grid item xs={3}>
                <TextField label="Device Name" placeholder="Device Name" />
              </Grid>
              <Grid item xs={3}>
                <TextField label="Device Make" placeholder="Device Make" />
              </Grid>
              <Grid item xs={3}>
                <TextField label="Device Model" placeholder="Device Model" />
              </Grid>
              <Grid item xs={3}>
                <TextField label="IP Address" placeholder="IP Address" />
              </Grid>
              <Grid item xs={3}>
                <TextField label="Port Number" placeholder="Port Number" />
              </Grid>
              <Grid item xs={6} textAlign={'end'}>
                <Button type="submit" variant="contained">
                  Next
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default AddPlcDevice;
