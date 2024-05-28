import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { ListItemIcon } from '@mui/material';
import { CameraIcon } from '../../../constants/systemIcons';

export default function MenuList() {
  const [open, setOpen] = React.useState(true);

  return (
    <List
      sx={{ width: '100%', maxWidth: 360 }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton>
        <ListItemIcon>
          <CameraIcon />
        </ListItemIcon>
        <ListItemText primary="Camera Configuration" />
      </ListItemButton>
      <ListItemButton>
        <ListItemText primary="Central Server" />
      </ListItemButton>
      <ListItemButton>
        <ListItemText primary="OCR Engine" />
      </ListItemButton>
      <ListItemButton>
        <ListItemText primary="Sample App" />
      </ListItemButton>
    </List>
  );
}
