import { styled } from '@mui/material/styles';
import { DataGrid } from '@mui/x-data-grid';

export const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  height: 'auto',
  // border: 'none',
  // '.MuiDataGrid-columnHeaders>div':{
  //   borderRadius:'8px',
  //   border: 'none'
  // },
  '.MuiDataGrid-columnHeaders:hover .MuiDataGrid-columnSeparator': {
    visibility: 'hidden',
  },
  '.MuiDataGrid-columnHeader:focus-within': {
    outline: 'none', // Change header background color
  },
  '.MuiDataGrid-cell:focus-within': {
    outline: 'none', // Change header background color
  },
}));
