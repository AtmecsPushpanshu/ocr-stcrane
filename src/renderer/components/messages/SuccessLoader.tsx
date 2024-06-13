import { useEffect } from 'react';
import NProgress from 'nprogress';
import { Box, Stack } from '@mui/material';
import { SuccessIcon } from '../../constants/systemIcons';

interface SuccessLoaderProps {
  loader?: boolean;
}

function SuccessLoader(props: SuccessLoaderProps) {
  const { loader = false } = props;

  return (
    <Box
      sx={{
        position: 'fixed',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        background: '#000',
        opacity: 0.75,
        display: loader ? 'flex' : 'none',
        zIndex: 99,
      }}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Stack
        alignItems={'center'}
        sx={{
          background: '#FFF',
          height: '200px',
          width: '200px',
          padding: '10px',
        }}
      >
        <SuccessIcon />
        <p>Device</p>
        <span>added Successfully</span>
      </Stack>
    </Box>
  );
}

export default SuccessLoader;
