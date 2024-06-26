import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Stack, StackOwnProps } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput, { OutlinedInputProps } from '@mui/material/OutlinedInput';

const BootstrapInput = styled(OutlinedInput)(() => ({
  borderRadius: '4px',
  fontSize: '14px',
  '& .MuiInputBase-input': {
    padding: '6.5px 8px',
    //border: '1px solid #E5E0EB',
  },
}));

const Label = styled(InputLabel)(() => ({
  fontSize: '14px',
  color: '#000000',
}));

interface TextFieldProps extends OutlinedInputProps {
  label?: string;
  required?: boolean;
  testId?: string;
  direction?: StackOwnProps['direction'];
  helperText?: any;
}

const TextField: React.FC<TextFieldProps> = (props) => {
  const {
    label,
    required,
    name,
    direction = 'column',
    size = 'small',
    ...inputProps
  } = props;
  return (
    <>
      <Stack spacing={1} direction={direction}>
        <Label htmlFor={name}>{label}</Label>
        <BootstrapInput {...inputProps} id={name} size={size} fullWidth />
      </Stack>
    </>
  );
};

export default TextField;
