import { Box, Stack } from '@mui/material';
import { SyntheticEvent, useState } from 'react';

import SliderField from '../../components/common/SliderField';
import {
  GridWithBorder,
  SubHeadText,
  WithPadding,
} from '../../components/Styles';

const AddCameraPresetForm = () => {

  return (
    <Box sx={{ width: '100%' }}>
      <Stack spacing={1}>
        <GridWithBorder sx={{ height: 'inherit', width: '100%' }}>
          <WithPadding sx={{ height: 'inherit', padding: '5px 15px' }}>
            <SubHeadText>Zoom</SubHeadText>
            <SliderField initialValue="T" finalValue="Z" />
          </WithPadding>
        </GridWithBorder>
        <GridWithBorder sx={{ height: 'inherit', width: '100%' }}>
          <WithPadding sx={{ height: 'inherit', padding: '5px 15px' }}>
            <SubHeadText>Focus</SubHeadText>
            <SliderField initialValue="Far" finalValue="Never" />
          </WithPadding>
        </GridWithBorder>
      </Stack>
    </Box>
  );
};

export default AddCameraPresetForm;
