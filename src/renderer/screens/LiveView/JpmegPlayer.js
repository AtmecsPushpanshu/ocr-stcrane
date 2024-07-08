import React, { useEffect } from 'react';
import JSMpeg from '@cycjimmy/jsmpeg-player';
import axios from 'axios';
import { io } from 'socket.io-client';

const StreamPlayer = () => {
  useEffect(() => {
    const socket = io('http://localhost:8080/video');

    socket.on('connect', () => {
      console.log('Connected to WebSocket server');
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from WebSocket server');
    });

    const url = 'ws://localhost:8080/video';
    let canvas = document.getElementById('video-canvas');
    socket.on('video_frame',     new JSMpeg.Player(socket, { canvas: canvas}));

  }, []);

  const rtspurl = ''; //enter the rtsp url here

  const httpRequest = (url) => {
    axios.get(`http://127.0.0.1:3002/video`).then(x => {
      console.log(x);
    });
  };

  const startRTSPFeed = () => {
    httpRequest(rtspurl);
  };

  const stopRTSPFeed = () => {
    httpRequest('stop');
  };

  return (
    <div>
      <div>
        <canvas id="video-canvas" width="500" height="500"></canvas>
      </div>
      <div id="videoWrapper"></div>
      <div>
        <button onClick={startRTSPFeed}>Start RTSP Feed</button>
        {/* <button onClick={stopRTSPFeed}> Stop RTSP Feed</button> */}
      </div>
    </div>
  );
};

export default StreamPlayer;
