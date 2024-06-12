import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Stack, StackOwnProps } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput, { OutlinedInputProps } from '@mui/material/OutlinedInput';

const BootstrapInput = styled(OutlinedInput)(() => ({
  borderRadius: 1,
  fontSize: '14px',
  '& .MuiInputBase-input': {
    padding: '6.5px 6px',
    //border: '1px solid #E5E0EB',
  },
}));

const Label = styled(InputLabel)(() => ({
  fontSize: '14px',
  color: '#000000',
}));

interface TextFieldProps extends OutlinedInputProps {
  label: string;
  required?: boolean;
  testId?: string;
  direction?: StackOwnProps['direction']
}

const TextField: React.FC<TextFieldProps> = (props) => {
  const { label, required, name, direction='column', size = 'small', ...inputProps } = props;
  return (
    <>
      <Stack spacing={1} direction={direction}>
        <Label htmlFor={name}>{label}</Label>
        <BootstrapInput id={name} size={size} fullWidth {...inputProps} />
      </Stack>
    </>
  );
};

export default TextField;
