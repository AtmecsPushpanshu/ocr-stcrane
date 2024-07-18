import React, { useEffect, useRef } from 'react';

import useWebSocket from '../../hooks/useWebSocket';

const CanvasPlayer = () => {
  const videoRef = useRef(null);
  const { getMessage } = useWebSocket({ url: 'http://localhost:5050' });

  useEffect(() => {
    // Connect to the Flask server

    getMessage('frame', (data) => {
      console.log(data);
      const byteCharacters = atob(data);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: 'video/mp4' });
      videoRef.current.src = URL.createObjectURL(blob);
    });
  }, []);

  return (
    <div className="video-container">
      <video ref={videoRef} width="640" height="480" controls autoPlay />
    </div>
  );
};

export default CanvasPlayer;
