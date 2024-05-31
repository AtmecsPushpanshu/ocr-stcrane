import { FormControl, FormLabel, OutlinedInput } from '@mui/material';

export default function Input() {
  return (
    <FormControl variant="outlined">
      <FormLabel >Weight</FormLabel>
      <OutlinedInput
        id="outlined-adornment-weight"
        aria-describedby="outlined-weight-helper-text"
      />
    </FormControl>
  );
}
