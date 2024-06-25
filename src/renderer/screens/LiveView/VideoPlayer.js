// src/components/VideoPlayer.js
import React, { useEffect, useRef } from 'react';
import RxPlayer from "rx-player";

const VideoPlayer = ({ url }) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      playerRef.current = new RxPlayer({
        videoElement: videoRef.current,
      });

      playerRef.current.loadVideo({
        url: url,
        transport: 'dash', // or 'hls' depending on your stream
        autoPlay: true,
      });

      // Event listeners for player events
      playerRef.current.addEventListener('playerStateChange', (state) => {
        console.log('Player state changed:', state);
      });

      playerRef.current.addEventListener('error', (error) => {
        console.error('Player error:', error);
      });

      return () => {
        if (playerRef.current) {
          playerRef.current.dispose();
        }
      };
    }
  }, [url]);

  return (
    <div className="video-player" style={{width:'500px'}}>
      <video ref={videoRef} controls style={{ width: '100%' }} />
    </div>
  );
};

export default VideoPlayer;
