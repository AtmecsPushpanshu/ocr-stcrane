import { Box, CircularProgress } from '@mui/material';
import React, { useState } from 'react';

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

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <Box
      position="relative"
      display="inline-block"
      width={width}
      height={height}
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
    </Box>
  );
};

export default ImageWithLoader;
