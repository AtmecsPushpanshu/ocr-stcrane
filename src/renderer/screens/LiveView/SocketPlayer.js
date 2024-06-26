import React, { useEffect, useRef } from 'react';
import io from 'socket.io-client';

const WebSocketVideo = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const socket = io('http://localhost:8080/video');

    socket.on('connect', () => {
      console.log('Connected to WebSocket server');
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from WebSocket server');
    });

    const renderFrame = (data) => {
      const frameBytes = new Uint8Array(data.frame);

      // Create Blob from received frame bytes
      const blob = new Blob([frameBytes], { type: 'image/jpeg' });
      const imageUrl = URL.createObjectURL(blob);

      // Render frame on canvas
      const img = new Image();
      img.onload = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        URL.revokeObjectURL(imageUrl);
      };
      img.src = imageUrl;
    };

    socket.on('video_frame', renderFrame);

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      <canvas ref={canvasRef} width="640" height="480"></canvas>
    </div>
  );
};

export default WebSocketVideo;
