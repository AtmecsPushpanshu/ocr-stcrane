import { Box } from '@mui/material';
import { PrettoSlider, SubHeadText } from '../Styles';
interface SliderFieldProps {
  initialValue?: string;
  finalValue?: string;
}

const SliderField = (props: SliderFieldProps) => {
  const { initialValue = '', finalValue = '' } = props;
  return (
    <Box>
      <PrettoSlider
        aria-label="slider"
        orientation="horizontal"
        defaultValue={100}
      />
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <SubHeadText sx={{ cursor: 'pointer' }}>{initialValue}</SubHeadText>
        <SubHeadText sx={{ cursor: 'pointer' }}>{finalValue}</SubHeadText>
      </Box>
    </Box>
  );
};

export default SliderField;
