import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Stack } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput, { OutlinedInputProps } from '@mui/material/OutlinedInput';

const BootstrapInput = styled(OutlinedInput)(() => ({
  borderRadius: 1,
  border: '1px solid #E5E0EB',
  '& .MuiInputBase-input': {
    padding: '6.5px 6px',
  },
}));

const Label = styled(InputLabel)(() => ({
  fontSize: '14px',
}));

interface TextFieldProps extends OutlinedInputProps {
  label: string;
  required?: boolean;
  testId?: string;
}

const TextField: React.FC<TextFieldProps> = (props) => {
  const { label, required, name, size = 'small', ...inputProps } = props;
  return (
    <>
      <Stack spacing={1}>
        <Label htmlFor={name}>{label}</Label>
        <BootstrapInput id={name} size={size} fullWidth {...inputProps} />
      </Stack>
    </>
  );
};

export default TextField;
