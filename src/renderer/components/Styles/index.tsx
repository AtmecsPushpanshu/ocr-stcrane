import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';

// Creating a styled button component
export const WithPadding = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
  padding: 20,
}));

export const WithFlexGrow = styled(Grid)(() => ({
  flexGrow: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '1px solid #E5E0EB',
}));

export const HeadTextCss = {
  fontSize: '24px',
  fontWeight: 600,
};
