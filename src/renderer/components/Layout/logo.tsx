/* eslint-disable react/require-default-props */
import * as React from 'react';
import Box from '@mui/material/Box';
import lightLogo from '../../assets/img/smart-tecs.png';
import darkLogo from '../../assets/img/smart-tecs-dark.png';

const HEIGHT = 60;
const WIDTH = 60;

type Color = 'dark' | 'light';

export interface LogoProps {
  color?: Color;
  height?: number;
  width?: number;
}

export function Logo({
  color = 'light',
  height = HEIGHT,
  width = WIDTH,
}: LogoProps): React.JSX.Element {
  const url: string = color === 'light' ? lightLogo : darkLogo;

  return (
    <Box alt="logo" component="img" height={height} src={url} width={width} />
  );
}
