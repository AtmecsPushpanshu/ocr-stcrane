import { Box, CircularProgress } from '@mui/material';
import React, { useRef, useState } from 'react';
import PTZCircular from './PTZCircular';

interface ImageWithLoaderProps {
  src: string;
  alt: string;
  width?: string | number;
  height?: string | number;
}

const ImageWithLoader: React.FC<ImageWithLoaderProps> = ({
  src,
  alt,
  width,
  height,
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
      sx={{zIndex: 99}}
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
        }}
      />
      <PTZCircular ref={imageRef} />
    </Box>
  );
};

export default ImageWithLoader;
