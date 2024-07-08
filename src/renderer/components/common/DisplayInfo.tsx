import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

interface KeyValueDisplayProps {
  data: { [key: string]: string };
}

const DisplayInfo: React.FC<KeyValueDisplayProps> = ({ data }) => {
  return (
    <Box padding={2}>
      <Grid container spacing={2}>
        {Object.entries(data).map(([key, value]) => (
          <React.Fragment key={key}>
            <Grid item xs={4}>
              <Typography variant="body1" fontWeight="bold">
                {key}
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography variant="body2">{value}</Typography>
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    </Box>
  );
};

export default DisplayInfo;
