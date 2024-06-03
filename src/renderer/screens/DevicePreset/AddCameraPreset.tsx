import { Box, Button, ButtonGroup, Grid, Typography } from '@mui/material';
import { ButtonGroupPtz, ButtonPtz, HeadTextCss, WithPadding } from '../../components/Styles';
import { PtzIcon } from '../../constants/systemIcons';

const AddCameraPreset = () => {
  return (
    <WithPadding>
      <Typography variant="h5" {...HeadTextCss}>
        Device Preset
      </Typography>
      <Grid container columns={18}>
        <Grid item xs={8}>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              width: '120px',
              gap: 0, // Adjust the gap between buttons
              whiteSpace:'none',
            }}


          >
            {Array.from({ length: 9 }).map((_, index) => (
              <ButtonGroupPtz
                key={index}
                variant="contained"
                orientation="vertical"
              >
                <ButtonPtz>{` ${index + 1}`}</ButtonPtz>
              </ButtonGroupPtz>
            ))}
          </Box>
        </Grid>
        <Grid item xs={10}>
          <PtzIcon />
        </Grid>
      </Grid>
    </WithPadding>
  );
};

export default AddCameraPreset;
