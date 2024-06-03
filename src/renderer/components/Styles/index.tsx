import { styled } from '@mui/material/styles';
import { Button, ButtonGroup, Grid, IconButton, Typography } from '@mui/material';

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

export const IconButtonPtz = styled(IconButton)(() => ({
  padding: 0,
}));
export const ButtonPtz = styled(Button)(() => ({
  padding: 0,
  borderRadius: 0,
  height: '39px',
  width: '39px',
}));

export const ButtonGroupPtz = styled(ButtonGroup)(() => ({
  padding: 0,
  borderRadius: 0,
  height: '39px',
  width: '39px',
}));
export const CameraDetailText = styled(Typography)(() => ({
  fontSize: '16px',
  fontWeight: 600,
  lineHeight: '22.4px',
  textAlign: 'center',
}));
export const CameraDetailHeadText = styled(Typography)(() => ({
  fontSize: '18px',
  fontWeight: 400,
  lineHeight: '23.76px',
}));
export const HeadText = styled(Typography)(() => ({
  fontSize: '18px',
  fontWeight: 600,
  lineHeight: '23.76px',
}));
export const HeadTextCss = {
  fontSize: '24px',
  fontWeight: 600,
};
