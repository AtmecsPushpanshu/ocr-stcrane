import { Slider, Box, Typography } from '@mui/material';
import { PrettoSlider, SubHeadText } from '../Styles';
interface SliderFieldProps {
  topText?: string;
  bottomText?: string;
}

const SliderField = (props: SliderFieldProps) => {
  const { topText, bottomText } = props;
  return (
    <Box>
      <PrettoSlider
        aria-label="Temperature"
        orientation="horizontal"
        defaultValue={100}
      />
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
       {topText && <SubHeadText sx={{ cursor: 'pointer' }}>
          {topText}
        </SubHeadText>}
        {bottomText && <SubHeadText sx={{ cursor: 'pointer' }}>
          {bottomText}
        </SubHeadText>}
      </Box>
    </Box>
  );
};

export default SliderField;
