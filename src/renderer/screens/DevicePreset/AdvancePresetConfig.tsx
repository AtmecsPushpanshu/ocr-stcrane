import { Button, Grid, Stack } from '@mui/material';
import SelectField from '../../components/common/SelectField';
import TextField from '../../components/common/TextField';

const AdvancePresetConfig = () => {
  return (
    <>
      <Grid container spacing={2} columns={6}>
        <Grid item xs={3}>
          <SelectField label="Offset X" placeholder="Offset X" />
        </Grid>
        <Grid item xs={3}>
          <SelectField label="Offset Y" placeholder="Offset Y" />
        </Grid>
        <Grid item xs={3}>
          <SelectField label="X-resized Width" placeholder="X-resized Width" />
        </Grid>
        <Grid item xs={3}>
          <SelectField
            label="X-resized Height"
            placeholder="X-resized Height"
          />
        </Grid>
        <Grid item xs={3}>
          <TextField label="Scale X" placeholder="Scale X" />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="Separation Of Color Lines UM"
            placeholder="Separation Of Color Lines UM"
          />
        </Grid>
        <Grid item xs={3}>
          <TextField label="Trigger" placeholder="Trigger" />
        </Grid>
        <Grid item xs={3}>
          <TextField label="Trigger End" placeholder="Trigger End" />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="Max Line Scan Rate"
            placeholder="Max Line Scan Rate"
          />
        </Grid>
        <Grid item xs={3}>
          <SelectField
            label="Frames Per Second"
            placeholder="Frames Per Second"
          />
        </Grid>
        <Grid item xs={3}>
          <SelectField
            label="Max Shutter Speed"
            placeholder="Max Shutter Speed"
          />
        </Grid>
        <Grid item xs={3}>
          <SelectField
            label="Min Shutter Speed"
            placeholder="Min Shutter Speed"
          />
        </Grid>
        <Grid item xs={3}>
          <SelectField
            label="Video Decoding/Encoding"
            placeholder="Video Decoding/Encoding"
          />
        </Grid>
        <Grid item xs={3}>
          <SelectField label="Imge Resolution" placeholder="Imge Resolution" />
        </Grid>
      </Grid>
      <Stack direction={'row'} spacing={1} justifyContent={'flex-end'} mt={'10px'}>
        <Button variant='outlined'>Cancel</Button>
        <Button variant='contained'>Save</Button>
      </Stack>
    </>
  );
}

export default AdvancePresetConfig;
