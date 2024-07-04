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
} from '@mui/material';
import React, { useState } from 'react';

import { HeadText16 } from '../../components/Styles';
import axios from 'axios';

const PresetList: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [switchIndex, setSwitchIndex] = useState<number | null>(null);
  const ptzoom = {
    0: {
      preset_name: 'NNAM',
      pan: 0.75,
      tilt: 0.9,
      zoom: 0.3,
    },
    1: {
      preset_name: 'NNAM',
      pan: 0.7,
      tilt: 0.9,
      zoom: 0.3,
    },
  };

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
  const setPreset = async (data) => {
    try {
      await axios.post('http://localhost:5050/set_preset_zoom', data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSwitchChange = (index: number) => {
    setPreset(ptzoom[index]);
    setSwitchIndex(index === switchIndex ? null : index);
  };

  const options = ['Preset 1', 'Preset 2'];

  return (
    <Box sx={{ width: '100%', maxWidth: 360, mx: 'auto' }}>
      <Box sx={{ bgcolor: '#24558D', color: 'primary.contrastText', p: 1 }}>
        <HeadText16 textAlign="center">Available Presets</HeadText16>
      </Box>
      <List sx={{ width: '100%' }}>
        {options.map((option, index) => (
          <ListItem
            key={index}
            sx={{
              backgroundColor: switchIndex === index ? '#DDD' : '#FFF',
              borderBottom: '1px solid #ccc',
            }}
            onClick={() => handleSwitchChange(index)}
          >
            <ListItemText primary={option} />
            <ListItemSecondaryAction>
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
                <MenuItem onClick={handleView}>View Preset</MenuItem>
                <MenuItem onClick={handleEdit}>Edit Preset</MenuItem>
                <MenuItem onClick={handleDelete}>Delete Preset</MenuItem>
              </Menu>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default PresetList;
