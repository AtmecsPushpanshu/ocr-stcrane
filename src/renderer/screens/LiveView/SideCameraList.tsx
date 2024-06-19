import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import React from 'react';

const cameras = {
  'Upper Sil Beam': ['Camera 1', 'Camera 2'],
  'Lower Sil Beam': ['Camera 3', 'Camera 4', 'Camera 5'],
};

interface CameraItemProps {
  name: string;
  selected?: boolean;
}

const CameraItem: React.FC<CameraItemProps> = ({ name, selected }) => (
  <ListItem disablePadding>
    <ListItemButton selected={selected}>
      {selected && (
        <ListItemIcon>
          <VideoCameraFrontIcon />
        </ListItemIcon>
      )}
      <ListItemText primary={name} />
    </ListItemButton>
  </ListItem>
);

const SideCameraList: React.FC = () => {
  return (
    <Box sx={{ width: 240, bgcolor: 'background.paper' }}>
      <Box
        sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', p: 1 }}
      >
        <Typography variant="h6" align="center">
          Preview
        </Typography>
      </Box>
      <Divider />
      {Object.entries(cameras).map(([section, items], index) => (
        <Box key={section}>
          <Typography sx={{ pl: 2, pt: 1, pb: 1, color: 'text.secondary' }}>
            {section}
          </Typography>
          <List>
            {items.map((item, idx) => (
              <CameraItem
                key={item}
                name={item}
                selected={index === 1 && idx === 0}
              />
            ))}
          </List>
          <Divider />
        </Box>
      ))}
    </Box>
  );
};

export default SideCameraList;
