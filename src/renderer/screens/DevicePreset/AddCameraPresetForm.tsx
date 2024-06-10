import { Grid, Stack } from '@mui/material';
import SelectField from '../../components/common/SelectField';
import { WithPadding } from '../../components/Styles';

const AddCameraPresetForm = () => {
  return (
    <WithPadding>
      <Grid container justifyContent={'space-between'} >
        <Grid item >
          <Stack spacing={2} sx={{ width: '100%' }}>
            <SelectField label={'Image/ Video Location'} />
            <SelectField label={'Brightness Level'} />
            <SelectField label={'Max Shutter Speed'} />
            <SelectField label={'Frames Per Second'} />
            <SelectField label={'Choose Preset'} />
            <SelectField label={'Video Encoding/Decoding'} />
            <SelectField label={'Image Resolution'} />
            <SelectField label={'Max Shutter Speed'} />
          </Stack>
        </Grid>
      </Grid>
    </WithPadding>
  );
}

export default AddCameraPresetForm;
