import * as React from 'react';
import { styled } from '@mui/material/styles';
import {
  MenuItem,
  Select,
  OutlinedSelectProps,
  MenuProps,
  GridOwnProps,
  Grid,
} from '@mui/material';
import InputLabel from '@mui/material/InputLabel';

const BootstrapSelect = styled(Select)(() => ({
  borderRadius: 1,
  width: '100%',
  '& .MuiSelect-select': {
    padding: '6.5px 6px',
    fontSize: '14px',
  },
}));

const Label = styled(InputLabel)(() => ({
  fontSize: '14px',
  color: '#000000',
}));

const MenuProps: Partial<MenuProps> = {
  PaperProps: {
    sx: {
      boxShadow: '0px 8px 16px 0px #3E134D12',
      '& .MuiList-root .MuiMenuItem-root': { fontSize: '14px' },
    },
  },
};

interface SelectFieldProps extends OutlinedSelectProps {
  label: string;
  required?: boolean;
  testId?: string;
  direction?: GridOwnProps['direction'];
  items?: any;
  selectedValue?: string;
  selectedName?: string;
}

const SelectField: React.FC<SelectFieldProps> = (props) => {
  const {
    label,
    required,
    name,
    direction = 'column',
    size = 'small',
    items = [],
    selectedName = 'name',
    selectedValue = 'value',
    ...selectProps
  } = props;
  const labelXs = direction === 'column' ? 12 : 5;
  const InputXs = direction === 'column' ? 12 : 7;
  const mainProps = {
    ...(direction !== 'column' ? { alignItems: 'center' } : {}),
  };
  return (
    <>
      <Grid container spacing={1} flexDirection={direction} {...mainProps}>
        <Grid item xs={labelXs}>
          <Label htmlFor={name}>{label}</Label>
        </Grid>
        <Grid item xs={InputXs}>
          <BootstrapSelect
            defaultValue={'select'}
            MenuProps={MenuProps}
            {...selectProps}
          >
            <MenuItem value="select">Select</MenuItem>
            {items.map((item: any) => (
              <MenuItem value={item[selectedValue]}>
                {item[selectedName]}
              </MenuItem>
            ))}
          </BootstrapSelect>
        </Grid>
      </Grid>
    </>
  );
};

export default SelectField;
