import React, { useEffect, useRef } from 'react';

interface CameraProps {
  wsUrl?: string;
}
const AxisCamera = ({ wsUrl='wss://20.20.20.19/rtsp-over-websocket' }: CameraProps) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const ws = new WebSocket(wsUrl);

    ws.binaryType = 'arraybuffer';

    ws.onopen = () => {
      console.log('WebSocket connection established');
    };

    ws.onmessage = (event) => {
      if (event.data instanceof ArrayBuffer) {
        const videoElement = videoRef.current;
        const blob = new Blob([event.data], { type: 'video/mp4' });
        const url = URL.createObjectURL(blob);

        videoElement.src = url;
        videoElement.play();
      }
    };

    ws.onclose = () => {
      console.log('WebSocket connection closed');
    };

    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    return () => {
      ws.close();
    };
  }, [wsUrl]);

  return (
    <div>
      <h1>Axis Camera Live Stream</h1>
      <video ref={videoRef} controls />
    </div>
  );
};

export default AxisCamera;
