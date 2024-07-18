import { Box, CircularProgress } from '@mui/material';
import React, { useRef, useState } from 'react';

import PTZCircular from './PTZCircular';
import useWebSocket from '../../hooks/useWebSocket';

interface ImageWithLoaderProps {
  src: string;
  alt: string;
  width?: string | number;
  height?: string | number;
  handlePanTiltChange: (pan: number, tilt: number) => void;
  cbStop: () => void;
}

const ImageWithLoader: React.FC<ImageWithLoaderProps> = ({
  src,
  alt,
  width,
  height,
  handlePanTiltChange,
  cbStop,
}) => {
  const [loading, setLoading] = useState(true);
  const imageRef = useRef<HTMLDivElement>(null);

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <Box
      position="relative"
      display="inline-block"
      width={width}
      height={height}
      ref={imageRef}
      sx={{ zIndex: 99 }}
    >
      {loading && (
        <Box
          position="absolute"
          top="50%"
          left="50%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          style={{ transform: 'translate(-50%, -50%)' }}
        >
          <CircularProgress />
        </Box>
      )}
      <img
        src={src}
        alt={alt}
        onLoad={handleImageLoad}
        style={{
          display: loading ? 'none' : 'block',
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{ position: 'absolute', top: 0, width: '100%', height: '100%' }}
      >
        <PTZCircular onPanTiltChange={handlePanTiltChange} cbStop={cbStop} />
      </div>
    </Box>
  );
};

export default ImageWithLoader;
