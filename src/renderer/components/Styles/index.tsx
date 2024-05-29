import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';

// Creating a styled button component
export const WithPadding = styled(Grid)(() => ({
  display:'flex',
  flexDirection:'column',
  height: 'inherit',
  padding: 20,
}));

export const WithFlexGrow = styled(Grid)(() => ({
  flexGrow: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '20px 0',
  border: '1px solid #E5E0EB',
}));
