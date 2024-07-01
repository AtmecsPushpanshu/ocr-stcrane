/* eslint-disable react/jsx-props-no-spreading */
import { Box, SliderProps } from '@mui/material';
import { PrettoSlider, SubHeadText } from '../Styles';
interface SliderFieldProps extends SliderProps {
  initialValue?: string;
  finalValue?: string;
}

const SliderField = (props: SliderFieldProps) => {
  const { initialValue = '', finalValue = '', ...remainingProps } = props;

  return (
    <Box>
      <PrettoSlider
        aria-label="slider"
        orientation="horizontal"
        {...remainingProps}
      />
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <SubHeadText sx={{ cursor: 'pointer' }}>{initialValue}</SubHeadText>
        <SubHeadText sx={{ cursor: 'pointer' }}>{finalValue}</SubHeadText>
      </Box>
    </Box>
  );
};

export default SliderField;
