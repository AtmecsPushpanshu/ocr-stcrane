import React, { useEffect, useRef } from 'react';
import Peer from 'peerjs';

const WebRTCVideo = () => {
  const videoRef = useRef(null);
  const peerRef = useRef(null);

  useEffect(() => {
    const initWebRTC = async () => {
      // Initialize a new Peer instance
      const peer = new Peer({});

      // Open event listener for peer connection
      peer.on('open', (peerId) => {
        console.log('My peer ID is: ' + peerId);

        // Call the server with the generated peerId
        fetch('http://localhost:5000/offer', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ peerId }),
        })
        .then(response => response.json())
        .then(answer => {
          // Connect to the server's peerId and establish a WebRTC connection
          const remotePeer = peer.connect(answer.peerId);
          remotePeer.on('open', () => {
            console.log('Connected to remote peer');
            // Now you can start your video stream or other data exchange
          });

          // Handle any incoming stream from the remote peer
          remotePeer.on('stream', (stream) => {
            videoRef.current.srcObject = stream;
          });
        })
        .catch(error => {
          console.error('Error in fetch or signaling:', error);
        });
      });

      // Save the peer instance in the ref
      peerRef.current = peer;
    };

    // Initialize WebRTC on component mount
    initWebRTC();

    // Clean up function
    return () => {
      // Disconnect and destroy the peer connection when the component unmounts
      if (peerRef.current) {
        peerRef.current.disconnect();
        peerRef.current.destroy();
      }
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div>
      <video ref={videoRef} autoPlay playsInline controls></video>
    </div>
  );
};

export default WebRTCVideo;
