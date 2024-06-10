import { styled } from '@mui/material/styles';
import {
  Box,
  Button,
  ButtonGroup,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';

export const GridWithBorder = styled(Grid)(() => ({
  border: '1px solid #C5C5C5',
}));

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

export const CameraPresetGrid = styled('div')(() => ({
  display: 'grid',
  gridTemplateAreas: `'camera' 'setting'`,
  gridTemplateColumns: '1fr 280px',
  height: '100vh',
}));

export const IconButtonPtz = styled(IconButton)(() => ({
  padding: 0,
}));

export const ButtonPtz = styled(Button)(() => ({
  padding: 0,
  borderRadius: 0,
  height: '52px',
  width: '52px',
  background: '#8E8E8E',
}));
export const CameraButtonPtz = styled(Button)(() => ({
  padding: 0,
  background: '#8E8E8E',
  position: 'absolute',
  width: '72px',
  height: '72px',
  top: 44,
  left: 44,
  zIndex: 1,
  borderRadius: '16px',
  boxShadow: '0px 0px 8px 0px #000000B8 !important',
}));

export const CameraBG = styled('div')(() => ({
  width: '50px',
  height: '50px',
  background: 'rgb(159 159 159 / 42%)',
  borderRadius: '50px',
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
}));

export const ButtonGroupPtz = styled(ButtonGroup)(() => ({
  padding: 0,
  borderRadius: 0,
  height: '52px',
  width: '52px',
  background: 'transparent',
  boxShadow: 'none',
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

export const HeadText16 = styled(Typography)(() => ({
  fontSize: '16px',
  fontWeight: 600,
  lineHeight: '22.4px',
}));
export const PageTitle = styled(Typography)(() => ({
  fontSize: '24px',
  fontWeight: 600,
  lineHeight: '31.68px',
}));

export const HeadTextCss: React.CSSProperties = {
  fontSize: '24px',
  fontWeight: 600,
};

export const TabTextCss: React.CSSProperties = {
  fontSize: '18px',
  fontWeight: '400',
  lineHeight: '24px',
  textAlign: 'center',
  textDecoration: 'none',
  textTransform: 'none',
};

export const GreyBox = styled(Box)(() => ({
  width: '69px',
  height: '33px',
  background: '#E7E7E7',
  fontSize: '18px',
  fontWeight: 600,
  lineHeight: '23.76px',
  textAlign: 'center',
}));

export const ImageFill = styled('img')(() => ({
  width: '100%',
  height: 'auto',
}));
