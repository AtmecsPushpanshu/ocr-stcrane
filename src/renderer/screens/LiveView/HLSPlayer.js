import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';

function HLSPlayer() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource('http://localhost:8080/stream.m3u8');
      hls.attachMedia(videoRef.current);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        videoRef.current.play();
      });
    } else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
      // For Safari
      videoRef.current.src = 'http://localhost:8080/stream.m3u8';
      videoRef.current.addEventListener('loadedmetadata', () => {
        videoRef.current.play();
      });
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <video ref={videoRef} controls style={{ width: '600px' }} />
      </header>
    </div>
  );
}

export default HLSPlayer;
