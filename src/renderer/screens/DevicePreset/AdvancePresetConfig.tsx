import { Grid } from '@mui/material';

import SelectField from '../../components/common/SelectField';

const AdvancePresetConfig = () => {
  return (
    <Grid container spacing={2} columns={6}>
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
  );
};

export default AdvancePresetConfig;
