import { MoreVert as MoreVertIcon } from '@mui/icons-material';
import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Menu,
  MenuItem,
  Switch,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { HeadText16 } from '../../components/Styles';

const PresetList: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [switchIndex, setSwitchIndex] = useState<number | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>, index: number) => {
    setAnchorEl(event.currentTarget);
    setSelectedIndex(index);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedIndex(null);
  };

  const handleDelete = () => {
    if (selectedIndex !== null) {
      console.log(`Deleting item at index ${selectedIndex}`);
      handleClose();
    }
  };

  const handleEdit = () => {
    if (selectedIndex !== null) {
      console.log(`Editing item at index ${selectedIndex}`);
      handleClose();
    }
  };

  const handleView = () => {
    if (selectedIndex !== null) {
      console.log(`Viewing item at index ${selectedIndex}`);
      handleClose();
    }
  };

  const handleListItemClick = (index: number) => {
    setActiveIndex(index);
  };

  const handleSwitchChange = (index: number) => {
    setSwitchIndex(index === switchIndex ? null : index);
  };

  const options = ['Preset 1', 'Preset 2', 'Preset 3', 'Preset 4', 'Preset 5'];

  return (
    <Box sx={{ width: '100%', maxWidth: 360, mx: 'auto' }}>
      <Box sx={{ bgcolor: '#24558D', color: 'primary.contrastText', p: 1 }}>
        <HeadText16 textAlign={'center'}>Available Presets</HeadText16>
      </Box>
      <List sx={{ width: '100%' }}>
        {options.map((option, index) => (
          <ListItem
            key={index}
            sx={{
              borderBottom: '1px solid #ccc',
            }}
            onClick={() => handleListItemClick(index)}
          >
            <ListItemText primary={option} />
            <ListItemSecondaryAction>
              <Switch
                edge="end"
                checked={switchIndex === index}
                onChange={() => handleSwitchChange(index)}
              />
              <IconButton
                edge="end"
                aria-label="more"
                aria-controls={`menu-${index}`}
                aria-haspopup="true"
                onClick={(event) => handleClick(event, index)}
              >
                <MoreVertIcon />
              </IconButton>
              <Menu
                id={`menu-${index}`}
                anchorEl={anchorEl}
                open={selectedIndex === index}
                onClose={handleClose}
              >
                <MenuItem onClick={handleView}>View</MenuItem>
                <MenuItem onClick={handleEdit}>Edit</MenuItem>
                <MenuItem onClick={handleDelete}>Delete</MenuItem>
              </Menu>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default PresetList;
