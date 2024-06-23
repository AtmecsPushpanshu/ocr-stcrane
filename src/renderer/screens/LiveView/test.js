import React, { useEffect, useRef } from 'react';
import io from 'socket.io-client';

const VideoStream = () => {
  const videoRef = useRef(null);
  const socketRef = useRef(null);

  useEffect(() => {
    // Connect to the WebSocket server
    socketRef.current = io('http://localhost:5000');

    // On connection, start streaming
    socketRef.current.on('connect', () => {
      console.log('Connected to server');
      socketRef.current.emit('start_stream');
    });

    // Listen for video frames
    socketRef.current.on('video_frame', (frame) => {
      if (typeof frame === 'object' && frame.hasOwnProperty('error')) {
        console.error('Error:', frame.error);
        return;
      }

      // Create a Blob URL from the frame data
      const blob = new Blob([frame], { type: 'image/jpeg' });
      const url = URL.createObjectURL(blob);
      // Set the src of the image to the Blob URL
      videoRef.current.src = url;
    });

    // Clean up the WebSocket connection on component unmount
    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  return (
    <div>
      <h2>Live Camera Feed</h2>
      <img ref={videoRef} alt="Live Camera Feed" />
    </div>
  );
};

export default VideoStream;
