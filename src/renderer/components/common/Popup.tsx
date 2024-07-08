/* eslint-disable no-unused-expressions */
import { Box, DialogActions } from '@mui/material';
import Button, { ButtonProps } from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import * as React from 'react';

interface PopupProps {
  open: boolean;
  btnText: string;
  dialogTitle: string;
  children?: React.ReactNode;
  onClose: () => void;
  onSubmit: () => void;
  variant?: ButtonProps['variant'];
}

export default function Popup(props: PopupProps) {
  const {
    btnText = 'Open',
    open: iOpen = false,
    onClose,
    onSubmit,
    dialogTitle = '',
    children,
    variant,
  } = props;
  const [open, setOpen] = React.useState(iOpen);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('lg'));

  const handleClose = () => {
    typeof onClose === 'function' ? onClose() : setOpen(false);
  };

  return (
    <>
      <Button variant={variant || 'outlined'} onClick={() => setOpen(true)}>
        {btnText}
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        PaperProps={{ sx: { minWidth: '40%', minHeight: '20%' } }}
      >
        <DialogTitle id="responsive-dialog-title">{dialogTitle}</DialogTitle>
        <DialogContent>
          <Box
            component="form"
            noValidate
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit();
              handleClose();
            }}
            sx={{ mt: 1 }}
          >
            {children}

            <DialogActions>
              <Button variant="outlined" onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </DialogActions>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
}
