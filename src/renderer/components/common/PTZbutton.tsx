import React from 'react';
import {
  ButtonGroupPtz,
  ButtonPtz,
  CameraBG,
  CameraButtonPtz,
} from '../Styles';
import { Box } from '@mui/material';
import {
  BottomLeftPtzIcon,
  BottomPtzIcon,
  BottomRightPtzIcon,
  CameraPtzIcon,
  LeftPtzIcon,
  RightPtzIcon,
  TopLeftPtzIcon,
  TopPtzIcon,
  TopRightPtzIcon,
} from '../../constants/systemIcons';

const PTZbutton: React.FC = () => {
  const getButton = (position: number) => {
    switch (position) {
      case 0: {
        return (
          <ButtonPtz sx={{ borderTopLeftRadius: 16 }}>
            <TopLeftPtzIcon />
          </ButtonPtz>
        );
      }
      case 1: {
        return (
          <ButtonPtz>
            <TopPtzIcon style={{ marginBottom: '15px' }} />
          </ButtonPtz>
        );
      }
      case 2: {
        return (
          <ButtonPtz sx={{ borderTopRightRadius: 16 }}>
            <TopRightPtzIcon />
          </ButtonPtz>
        );
      }
      case 3: {
        return (
          <ButtonPtz>
            <LeftPtzIcon style={{ marginRight: '15px' }} />
          </ButtonPtz>
        );
      }
      case 4: {
        return (
          <CameraButtonPtz>
            <CameraBG>
              <CameraPtzIcon />
            </CameraBG>
          </CameraButtonPtz>
        );
      }
      case 5: {
        return (
          <ButtonPtz>
            <RightPtzIcon style={{ marginLeft: '15px' }} />
          </ButtonPtz>
        );
      }
      case 6: {
        return (
          <ButtonPtz sx={{ borderBottomLeftRadius: 16 }}>
            <BottomRightPtzIcon />
          </ButtonPtz>
        );
      }
      case 7: {
        return (
          <ButtonPtz>
            <BottomPtzIcon style={{ marginTop: '20px' }} />
          </ButtonPtz>
        );
      }
      case 8: {
        return (
          <ButtonPtz sx={{ borderBottomRightRadius: 16 }}>
            <BottomLeftPtzIcon />
          </ButtonPtz>
        );
      }

      default: {
        return <ButtonPtz>{` ${position + 1}`}</ButtonPtz>;
      }
    }
  };
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        width: '156px',
        position: 'relative',
        borderRadius: '16px',
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
        gap: 0,
      }}
    >
      {Array.from({ length: 9 }).map((_, index) => (
        <ButtonGroupPtz key={index} variant="contained" orientation="vertical">
          {getButton(index)}
        </ButtonGroupPtz>
      ))}
    </Box>
  );
};

export default PTZbutton;
