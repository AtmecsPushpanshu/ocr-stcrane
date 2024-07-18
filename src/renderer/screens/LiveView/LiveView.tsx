import ReactHlsPlayer from 'react-hls-player';
import RxPlayer from 'rx-player';
import PageHeader from '../../components/common/PageHeader';
import { WithPadding } from '../../components/Styles';
import VideoPlayer from './VideoPlayer';
import WebRTCComponent from './SocketPlayer';
import WebRTCVideo from './WebRTCVideo';
import HLSPlayer from './HLSPlayer';
import WebSocketVideo from './SocketPlayer';
import StreamPlayer from './JpmegPlayer';
import { useRef } from 'react';
import LiveViewForm from './LiveViewForm';
import CanvasPlayer from './CanvasPlayer';
import VideoSockIm from './socketim';
function LiveView() {
  const videoUrl = 'http://localhost:8083/play/dash/H264_AAC/manifest.mpd'; // Provided URL
  var videoSrc = 'http://localhost:5050/stream/index.m3u8';
  const playerRef = useRef(null);

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: videoSrc,
        type: 'application/x-mpegURL',
      },
    ],
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on('waiting', () => {
      console.log('player is waiting');
    });

    player.on('dispose', () => {
      console.log('player will dispose');
    });
  };

  return (
    <WithPadding sx={{ paddingRight: 0, height: '1500px' }}>
      <PageHeader title="Live View" />
      {/* <LiveViewForm /> */}
      {/* <HLSPlayer /> */}
      {/* <WebRTCVideo /> */}
      {/* <CanvasPlayer /> */}
      <VideoSockIm />
      {/* <StreamPlayer /> */}
      {/* <WebSocketVideo /> */}
      {/* <WebRTCComponent /> */}
      {/* <VideoPlayer options={videoJsOptions} onReady={handlePlayerReady} /> */}

      {/* <ReactHlsPlayer
        src="http://localhost:8080/stream.m3u8"
        autoplay
        controls
        style={{ width: '600px', height: 'auto' }}
        hlsConfig={{
          maxLoadingDelay: 5,
          minAutoBitrate: 0,
          lowLatencyMode: false,
        }}
      /> */}
    </WithPadding>
  );
}

export default LiveView;
