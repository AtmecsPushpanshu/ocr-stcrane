import React, { useEffect, useRef } from 'react';
import io from 'socket.io-client';

const WebSocketVideo = () => {
  const imgRef = useRef(null);
  const socketRef = useRef(null);
  const imageUrlRef = useRef('');

  useEffect(() => {
    const socket = io('http://localhost:8080/video');
    socketRef.current = socket;

    socket.on('connect', () => {
      console.log('Connected to WebSocket server');
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from WebSocket server');
    });

    socket.on('connect_error', (error) => {
      console.error('Connection error:', error);
    });

    const renderFrame = (data) => {
      const frameBytes = new Uint8Array(data.frame);

      // Create Blob from received frame bytes
      const blob = new Blob([frameBytes], { type: 'image/jpeg' });
      const newImageUrl = URL.createObjectURL(blob);

      imgRef.current.src = newImageUrl;
    };

    socket.on('video_frame', renderFrame);

    return () => {
      socket.disconnect();
      console.log('WebSocket disconnected');
    };
  }, []);

  return (
    <div>
      <img ref={imgRef} alt="Video Stream" width="640" height="480" />
    </div>
  );
};

export default WebSocketVideo;
