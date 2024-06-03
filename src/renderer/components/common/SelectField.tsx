import * as React from 'react';
import { styled } from '@mui/material/styles';
import {
  MenuItem,
  Select,
  OutlinedSelectProps,
  Stack,
  MenuProps,
} from '@mui/material';
import InputLabel from '@mui/material/InputLabel';

const BootstrapSelect = styled(Select)(() => ({
  borderRadius: 1,
  '& .MuiSelect-select': {
    padding: '6.5px 6px',
    border: '1px solid #E5E0EB',
  },
}));

const Label = styled(InputLabel)(() => ({
  fontSize: '14px',
}));

const MenuProps: Partial<MenuProps> = {
  PaperProps: {
    sx: {
      boxShadow: '0px 8px 16px 0px #3E134D12',
    },
  },
};

interface SelectFieldProps extends OutlinedSelectProps {
  label: string;
  required?: boolean;
  testId?: string;
}

const SelectField: React.FC<SelectFieldProps> = (props) => {
  const { label, required, name, size = 'small', ...selectProps } = props;
  return (
    <>
      <Stack spacing={1}>
        <Label htmlFor={name}>{label}</Label>
        <BootstrapSelect
          defaultValue={'select'}
          MenuProps={MenuProps}
          {...selectProps}
        >
          <MenuItem value="select">Select</MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </BootstrapSelect>
      </Stack>
    </>
  );
};

export default SelectField;
