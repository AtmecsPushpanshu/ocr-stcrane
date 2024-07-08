import { Grid, Stack } from '@mui/material';
import { useForm } from 'react-hook-form';

import containeImg from '../../assets/img/container.png';
import { ImageFill } from '../../components/Styles';
import SideCameraList from './SideCameraList';

const LiveViewForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  return (
    <Stack direction="row" spacing={3}>
      <Grid container>
        <Grid item xs={12} md={12}>
          <Grid container columns={8} columnSpacing={1}>


            <Grid item xs={4}>
              <ImageFill
                src="http://localhost:5050/1/video_feed"
                alt="img"
                style={{ height: '291px' }}
              />
            </Grid>
            {/* <Grid item xs={4}>
              <ImageFill
                src="https://20.20.20.76/axis-cgi/mjpg/video.cgi?camera=1&resolution=800x450"
                alt="img"
                style={{ height: '291px' }}
              />
            </Grid> */}
            <Grid item xs={4}>
              <ImageFill
                src="http://localhost:5050/2/video_feed"
                alt="img"
                style={{ height: '291px' }}
              />
            </Grid>
            {/* <Grid item xs={4}>
              <ImageFill
                src="https://20.20.20.77/axis-cgi/mjpg/video.cgi?camera=1&resolution=800x450"
                alt="img"
                style={{ height: '291px' }}
              />
            </Grid> */}
            <Grid item xs={4}>
              <ImageFill
                src="http://localhost:5050/3/video_feed"
                alt="img"
                style={{ height: '291px' }}
              />
            </Grid>
            {/* <Grid item xs={4}>
              <ImageFill
                src="https://guest:guest@20.20.20.78/stw-cgi/video.cgi?msubmenu=stream&action=view&CodecType=MJPEG&FrameRate=15&CompressionLevel=10"
                alt="img"
                style={{ height: '291px' }}
              />
            </Grid> */}
            {/* <Grid item xs={4}>
              <ImageFill
                src={containeImg}
                alt="img"
                style={{ height: '291px' }}
              />
            </Grid> */}
          </Grid>
        </Grid>
      </Grid>
      <SideCameraList />
    </Stack>
  );
};

export default LiveViewForm;
