import React, { useEffect, useRef } from 'react';

const WebRTCVideo = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const initWebRTC = async () => {
      const pc = new RTCPeerConnection();

      // Handle incoming tracks
      pc.ontrack = (event) => {
        if (videoRef.current) {
          videoRef.current.srcObject = event.streams[0];
        }
      };

      // Create an SDP offer
      const offer = await pc.createOffer();
      await pc.setLocalDescription(offer);
      console.log('====================================');
      console.log(offer);
      console.log('====================================');
      // Send the offer to the signaling server
      const response = await fetch('http://localhost:8080/offer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(offer),
      });

      // Receive the SDP answer from the signaling server
      const answer = await response.json();
      console.log("Received SDP Answer: ", answer);

      const remoteDesc = new RTCSessionDescription(answer);
      await pc.setRemoteDescription(remoteDesc);
    };

    initWebRTC();
  }, []);

  return <video ref={videoRef} autoPlay playsInline controls width={'500px'}></video>;
};

export default WebRTCVideo;
