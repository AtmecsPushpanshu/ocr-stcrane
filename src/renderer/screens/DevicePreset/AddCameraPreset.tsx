import { Grid, Typography } from "@mui/material";
import { HeadTextCss, WithPadding } from "../../components/Styles";
import { PTZIcon } from "../../constants/systemIcons";

const AddCameraPreset = () => {
  return (
    <WithPadding>
      <Typography variant="h5" {...HeadTextCss}>Device Preset</Typography>
      <Grid container columns={18}>
        <Grid item xs={8}>sds</Grid>
        <Grid item xs={10}><PTZIcon /></Grid>
      </Grid>
    </WithPadding>
  );
}

export default AddCameraPreset;
