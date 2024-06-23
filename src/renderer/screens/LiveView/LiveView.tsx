import ReactPlayer from 'react-player';
import PageHeader from '../../components/common/PageHeader';
import { WithPadding } from '../../components/Styles';
import LiveViewForm from './LiveViewForm';
import { useEffect } from 'react';
import axios from 'axios';
import VideoStream from './test';

function LiveView() {
  useEffect(() => {
    const fetchStreamUrl = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/onvif/stream`);
        console.log(response);
      } catch (error) {
        console.error('Error fetching stream URL:', error);
      }
    };

    fetchStreamUrl();
  }, []);

  return (
    <WithPadding sx={{ paddingRight: 0 }}>
      {/* <ReactPlayer
        url="https://www.youtube.com/watch?v=XfX2Ap30pwU&ab_channel=CodeRadiance"
        width="640"
        height="360"
        controls
        playing
      /> */}
      <PageHeader title="Live View" />
      <VideoStream />
      {/* <LiveViewForm /> */}
    </WithPadding>
  );
}

export default LiveView;
