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
import { SmallCameraIcon } from '../../constants/systemIcons';
import { HeadText16 } from '../../components/Styles';

const cameras = {
  'Upper Sil Beam': ['Camera 1', 'Camera 2'],
  'Lower Sil Beam': ['Camera 3', 'Camera 4', 'Camera 5'],
  'Back Reach': ['Camera 6', 'Camera 7', 'Camera 8'],
};

interface CameraItemProps {
  name: string;
  selected?: boolean;
}

const CameraItem: React.FC<CameraItemProps> = ({ name, selected }) => (
  <ListItem disablePadding>
    <ListItemButton selected={selected}>
      <ListItemIcon>
        <SmallCameraIcon />
      </ListItemIcon>
      <ListItemText primary={name} />
    </ListItemButton>
  </ListItem>
);

const SideCameraList: React.FC = () => {
  return (
    <Box
      sx={{
        width: 340,
        bgcolor: 'background.paper',
        borderLeft: '1px solid rgba(0, 0, 0, 0.12)',
      }}
    >
      <Box sx={{ bgcolor: '#24558D', color: 'primary.contrastText', p: 1 }}>
        <HeadText16 textAlign={'center'}>Preview</HeadText16>
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
