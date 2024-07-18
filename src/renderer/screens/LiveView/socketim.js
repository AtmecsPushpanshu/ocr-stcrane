/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */
import React, { useEffect, useRef } from 'react';

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const mimeCodec = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"';
  let mediaSource;

  useEffect(() => {
    const videoElement = videoRef.current;

    const setupMediaSource = () => {
      mediaSource = new MediaSource();
      videoElement.src = URL.createObjectURL(mediaSource);

      mediaSource.addEventListener('sourceopen', handleSourceOpen);
      mediaSource.addEventListener('sourceended', () => {
        console.log('MediaSource ended');
      });
      mediaSource.addEventListener('sourceclose', () => {
        console.log('MediaSource closed');
      });
    };

    const handleSourceOpen = () => {
      console.log('MediaSource readyState:', mediaSource.readyState); // Should log 'open'
      const sourceBuffer = mediaSource.addSourceBuffer(mimeCodec);

      const websocket = new WebSocket('ws://localhost:8765');
      websocket.binaryType = 'arraybuffer';

      websocket.onopen = () => {
        console.log('WebSocket connection opened');
      };
      console.log(mediaSource?.readyState);
      websocket.onmessage = (event) => {
        console.log("=>",mediaSource?.readyState);
        if (event.data instanceof ArrayBuffer) {
          if (mediaSource.readyState === 'open') {
            console.log(typeof event.data);
            sourceBuffer.appendBuffer(event.data);
          } else {
            console.warn('Cannot append buffer: MediaSource not ready');
          }
        } else {
          console.log('Text message received:', event.data);
        }
      };

      websocket.onerror = (event) => {
        console.error('WebSocket error observed:', event);
      };

      websocket.onclose = (event) => {
        console.log('WebSocket connection closed:', event);
      };

      return () => {
        websocket.close();
        mediaSource.removeEventListener('sourceopen', handleSourceOpen);
      };
    };

    if ('MediaSource' in window && MediaSource.isTypeSupported(mimeCodec)) {
      setupMediaSource();
    } else {
      console.error('Unsupported MIME type or codec: ', mimeCodec);
    }

    return () => {
      if (mediaSource && mediaSource.readyState === 'open') {
        mediaSource.endOfStream();
      }
    };
  }, []);

  return (
    <div>
      <video ref={videoRef} controls autoPlay style={{ width: '100%' }} />
      <h1>Hello</h1>
    </div>
  );
};

export default VideoPlayer;
