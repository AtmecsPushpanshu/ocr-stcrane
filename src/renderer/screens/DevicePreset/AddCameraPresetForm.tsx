import { List, ListItem, ListItemText } from '@mui/material';
import {
  GridWithBorder,
  HeadText16,
  WithPadding,
} from '../../components/Styles';
import TextField from '../../components/common/TextField';

const AddCameraPresetForm = () => {
  return (
    <GridWithBorder sx={{ height: 'inherit', width: '100%' }}>
      <WithPadding sx={{ padding: '10px' }}>
        <HeadText16 sx={{ marginBottom: '4px' }}>Threshold</HeadText16>
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        >
          <ListItem sx={{padding: '10px'}}>
            <TextField label='Start Hoist Position' value={'10000'} />
          </ListItem>
          <ListItem sx={{padding: '10px'}}>
            <TextField label='End Hoist Position' value={'10000'} />
          </ListItem>
          <ListItem sx={{padding: '10px'}}>
            <TextField label='Start Trolley Position' value={'10000'} />
          </ListItem>
          <ListItem sx={{padding: '10px'}}>
            <TextField label='End Trolley Position' value={'10000'} />
          </ListItem>

        </List>
      </WithPadding>
    </GridWithBorder>
  );
};

export default AddCameraPresetForm;
