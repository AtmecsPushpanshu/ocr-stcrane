import { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';

interface WebSocketProps {
  url: string;
}

const useWebSocket = ({ url }: WebSocketProps) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    const newSocket = io(url);

    newSocket.on('connect', () => {
      console.log('Connected to WebSocket server');
    });

    newSocket.on('disconnect', () => {
      console.log('Disconnected from WebSocket server');
    });

    setSocket(newSocket);

    // Clean up function to disconnect the socket
    return () => {
      newSocket.disconnect();
    };
  }, [url]); // Only re-run effect if URL changes

  const sendMessage = (handler: string, message: object) => {
    if (socket) {
      socket.emit(handler, message);
    }
  };

  const getMessage = (handler: string, callback: (message: any) => void) => {
    if (socket) {
      console.log(handler);

      socket.on(handler, (message: any) => {
        console.log(message);

        setMessages((prevMessages) => [...prevMessages, message]);
        callback(message);
      });
    }
  };

  return { sendMessage, getMessage, messages };
};

export default useWebSocket;
