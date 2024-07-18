import React, { useEffect } from 'react';
import JSMpeg from '@cycjimmy/jsmpeg-player';
import axios from 'axios';

const StreamPlayer = () => {
  useEffect(() => {
    const url = 'ws://localhost:8765';
    let canvas = document.getElementById('video-canvas');
    new JSMpeg.Player(url, { canvas: canvas});
  }, []);


  return (
    <div>
      <div>
        <canvas id="video-canvas" width="500" height="500"></canvas>
      </div>

    </div>
  );
};

export default StreamPlayer;
