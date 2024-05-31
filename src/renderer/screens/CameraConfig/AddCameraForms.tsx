import { Box, Button, Grid, Divider, Stack, Typography, List, ListItem, ListItemText } from '@mui/material';
import { FormEvent } from 'react';
import TextField from '../../components/common/TextField';
import SelectField from '../../components/common/SelectField';
import { cameraDetails } from '../../data/mock';

const AddCameraForm = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(data);
  };
  return (
    <>
      <Box
        component="form"
        noValidate
        onSubmit={handleSubmit}
        sx={{ mt: 1, flexDirection: 'row' }}
      >
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <SelectField label="Terminal" placeholder="IP Address" />
          </Grid>
          <Grid item xs={3}>
            <SelectField label="Choose crane" placeholder="IP Address" />
          </Grid>
          <Grid item xs={3}>
            <TextField label="IP Address" placeholder="IP Address" />
          </Grid>
          <Grid item xs={3} alignSelf={'self-end'}>
            <Button type="submit" variant="contained">
              Search
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Stack>
        <Divider />
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        >
          {cameraDetails.map(({name, value}) => (
            <ListItem
              key={value}
              disableGutters
              secondaryAction={
                <>
                  <Typography variant="h5">{value}</Typography>
                </>
              }
            >
              <ListItemText primary={name} />
            </ListItem>
          ))}
        </List>
      </Stack>
    </>
  );
};

export default AddCameraForm;
