import React from 'react';
import { Stack, Slider } from '@mui/material';
import { GreyBox } from '../Styles';
interface SliderFieldProps {
  topText?: string;
  bottomText?: string;
}
const SliderField = (props: SliderFieldProps) => {
  const { topText, bottomText } = props;
  return (
    <Stack sx={{ height: 'inherit' }} alignItems={'center'} spacing={2}>
      {topText && <GreyBox>{topText}</GreyBox>}
      <Slider
        aria-label="Temperature"
        orientation="horizontal"
        valueLabelDisplay="auto"
        defaultValue={30}
      />
      {bottomText && <GreyBox>{bottomText}</GreyBox>}
    </Stack>
  );
};

export default SliderField;
