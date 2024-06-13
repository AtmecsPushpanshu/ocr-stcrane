import { styled } from '@mui/material/styles';
import {
  Box,
  Button,
  ButtonGroup,
  ButtonProps,
  Grid,
  IconButton,
  Slider,
  TabOwnProps,
  Typography,
} from '@mui/material';
import { green, orange, red } from '@mui/material/colors';

export const GridWithBorder = styled(Grid)(() => ({
  border: '1px solid #C5C5C5',
  borderRadius: '2px',
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
  gridTemplateColumns: '1fr 450px',
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
  background: '#6B6F80',
}));
export const CameraButtonPtz = styled(Button)(() => ({
  padding: 0,
  background: '#6B6F80',
  position: 'absolute',
  width: '72px',
  height: '72px',
  top: 44,
  left: 44,
  zIndex: 1,
  borderRadius: '16px',
  boxShadow: '0px 0px 8px 0px #000000B8 !important',
}));
export const SuccessButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(green[500]),
  backgroundColor: green[500],
  '&:hover': {
    backgroundColor: green[700],
  },
}));
export const DangerButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(red[500]),
  backgroundColor: red[500],
  '&:hover': {
    backgroundColor: red[700],
  },
}));
export const WarningButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(orange[500]),
  backgroundColor: orange[500],
  '&:hover': {
    backgroundColor: orange[700],
  },
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
export const SubHeadText = styled(Typography)(() => ({
  fontSize: '10px',
  fontWeight: 600,
  lineHeight: '13.2px',
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

export const TabTextCss: TabOwnProps['sx'] = {
  fontSize: '18px',
  fontWeight: '400',
  lineHeight: '24px',
  textAlign: 'center',
  textDecoration: 'none',
  textTransform: 'none',
};

export const TabPresetTextCss:  TabOwnProps['sx'] = {
  fontSize: '14px',
  fontWeight: '600',
  lineHeight: '24px',
  textAlign: 'center',
  minHeight:'42px',
  padding: '8px 10px',
  border: '1px solid #c4c4c4',
  borderBottom: 'none',
  textDecoration: 'none',
  textTransform: 'none',
  width: '50%',
  '&.Mui-selected':{
    color: '#FFFFFF',
    backgroundColor:'#24558D'
  }
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

export const PrettoSlider = styled(Slider)({
  color: '#24558D',
  padding: 0,
  height: 8,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#24558D',
    border: '4px solid #FFF',
    boxShadow: '0px 0px 20px 0px #13384D33',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&::before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#24558D',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&::before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
});
