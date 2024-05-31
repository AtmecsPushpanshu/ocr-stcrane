import { Box, Button, FormControl, FormHelperText, InputAdornment, OutlinedInput, Select, TextField } from '@mui/material';
import { FormEvent } from 'react';
import Input from '../../components/common/Input';

const AddCameraForm = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(data);
  };
  return (
    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
<Input />
      <TextField
        variant="standard"
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email ID"
        name="email"
        autoComplete="email"
        autoFocus
      />
      <TextField
        variant="standard"
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
      />

      <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
        Sign In
      </Button>
    </Box>
  );
};

export default AddCameraForm;
