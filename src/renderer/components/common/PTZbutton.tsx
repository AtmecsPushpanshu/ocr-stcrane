/* eslint-disable react-hooks/exhaustive-deps */
import { Box } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

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
import {
  ButtonGroupPtz,
  ButtonPtz,
  CameraBG,
  CameraButtonPtz,
} from '../Styles';

const handlePT = (value: number, currentValue: number): number => {
  const sum = value + currentValue;
  if (sum > 1) {
    return 1;
  }
  if (sum < -1) {
    return -1;
  }

  return Number(parseFloat(sum).toFixed(3));
};

interface PTZbuttonProps {
  handleCameraClick?: () => void;
}

const PTZbutton: React.FC = ({ handleCameraClick, cbPantilt, cameraId }: PTZbuttonProps) => {
  const [pan, setPan] = useState(0.12);
  const [tilt, setTilt] = useState(-0.88);
  const handleClick = async (p: number, t: number) => {
    // Function to handle PTZ commands
    setPan((prev) => handlePT(prev, p));
    setTilt((prev) => handlePT(prev, t));
    // You can replace the console.log with the actual PTZ command logic
    // Example:
    // sendPtzCommand(pan, tilt);
  };
  const updatePreset = async () => {
    const presets = {
      preset_name: 'camera77',
      pan,
      tilt,
    };
    try {
      const resp = await axios.post(
        `http://localhost:5050/${cameraId}/set_preset`,
        presets,
      );

    } catch (error) {
      console.log("error");
    }
  };
  useEffect(() => {
    updatePreset();
    cbPantilt(pan, tilt);
  }, [pan, tilt]);

  const getButton = (position: number) => {
    switch (position) {
      case 0:
        return (
          <ButtonPtz
            sx={{ borderTopLeftRadius: 16 }}
            onClick={() => handleClick(-0.01, 0.01)}
          >
            <TopLeftPtzIcon />
          </ButtonPtz>
        );
      case 1:
        return (
          <ButtonPtz onClick={() => handleClick(0, -0.01)}>
            <TopPtzIcon style={{ marginBottom: '15px' }} />
          </ButtonPtz>
        );
      case 2:
        return (
          <ButtonPtz
            sx={{ borderTopRightRadius: 16 }}
            onClick={() => handleClick(0.01, 0.01)}
          >
            <TopRightPtzIcon />
          </ButtonPtz>
        );
      case 3:
        return (
          <ButtonPtz onClick={() => handleClick(-0.01, 0)}>
            <LeftPtzIcon style={{ marginRight: '15px' }} />
          </ButtonPtz>
        );
      case 4:
        return (
          <CameraButtonPtz onClick={() => handleCameraClick()}>
            <CameraBG>
              <CameraPtzIcon />
            </CameraBG>
          </CameraButtonPtz>
        );
      case 5:
        return (
          <ButtonPtz onClick={() => handleClick(0.01, 0)}>
            <RightPtzIcon style={{ marginLeft: '15px' }} />
          </ButtonPtz>
        );
      case 6:
        return (
          <ButtonPtz
            sx={{ borderBottomLeftRadius: 16 }}
            onClick={() => handleClick(-0.01, -0.01)}
          >
            <BottomLeftPtzIcon />
          </ButtonPtz>
        );
      case 7:
        return (
          <ButtonPtz onClick={() => handleClick(0, 0.01)}>
            <BottomPtzIcon style={{ marginTop: '20px' }} />
          </ButtonPtz>
        );
      case 8:
        return (
          <ButtonPtz
            sx={{ borderBottomRightRadius: 16 }}
            onClick={() => handleClick(0.01, -0.01)}
          >
            <BottomRightPtzIcon />
          </ButtonPtz>
        );
      default:
        return <ButtonPtz>{` ${position + 1}`}</ButtonPtz>;
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
