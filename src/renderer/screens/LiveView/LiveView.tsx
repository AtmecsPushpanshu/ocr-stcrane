import ReactHlsPlayer from 'react-hls-player';
import RxPlayer from "rx-player";
import PageHeader from '../../components/common/PageHeader';
import { WithPadding } from '../../components/Styles';
import VideoPlayer from './VideoPlayer';
import WebRTCComponent from "./SocketPlayer";
import WebRTCVideo from './WebRTCVideo';
import HLSPlayer from './HLSPlayer'
function LiveView() {
  const videoUrl = 'http://localhost:8083/play/dash/H264_AAC/manifest.mpd'; // Provided URL

  return (
    <WithPadding sx={{ paddingRight: 0 }}>
      <PageHeader title="Live View" />
      {/* <HLSPlayer /> */}
      {/*<WebRTCVideo />*/}
      {/* <WebRTCComponent /> */}
      {/* <VideoPlayer url={videoUrl} /> */}
     <ReactHlsPlayer
        src="http://localhost:8080/stream.m3u8"
        autoplay
        controls
        style={{ width: '600px', height: 'auto' }}
        hlsConfig={{
          maxLoadingDelay: 1,
          minAutoBitrate: 0,
          lowLatencyMode: true,
        }}
      />
    </WithPadding>
  );
}

export default LiveView;
