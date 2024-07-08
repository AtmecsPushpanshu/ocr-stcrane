import { MoreVert as MoreVertIcon } from '@mui/icons-material';
import {
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Menu,
  MenuItem,
  Paper,
} from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';

import { HeadText16 } from '../../components/Styles';

const PresetList: React.FC = ({ options = [] }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
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

  const setPreset = async (data) => {
    try {
      await axios.post('http://localhost:5050/1/set_preset_zoom', data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSwitchChange = (index: number) => {
    setPreset(options[index]);
    setSwitchIndex(index === switchIndex ? null : index);
  };

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
            <ListItemText primary={option?.preset_name} />
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
      {switchIndex !== null ? (
        <Paper sx={{ mt: 3 }}>
          <List>
            <ListItem>
              <ListItemText
                primary="Preset Name"
                secondary={options[switchIndex]?.preset_name}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Pan"
                secondary={options[switchIndex]?.pan}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Tilt"
                secondary={options[switchIndex]?.tilt}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Zoom"
                secondary={options[switchIndex]?.zoom}
              />
            </ListItem>
          </List>

          <Divider />
        </Paper>
      ) : (
        <Box>Please select preset</Box>
      )}
    </Box>
  );
};

export default PresetList;
