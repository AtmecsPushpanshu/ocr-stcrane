import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { CameraList } from '../../data/mock';

const columns: GridColDef<(typeof CameraList)[number]>[] = [
  {
    field: 'terminal',
    headerName: 'Terminal',
    width: 150,
  },
  {
    field: 'crane',
    headerName: 'Crane',
    width: 150,
  },
  {
    field: 'deviceName',
    headerName: 'Device Name',
    width: 150,
  },

  {
    field: 'deviceMake',
    headerName: 'Device Make',
    description: 'This column has a value getter and is not sortable.',
    width: 160,
  },
  {
    field: 'ipAddress',
    headerName: 'IP Address',
    description: 'This column has a value getter and is not sortable.',
    width: 150,
  },
  {
    field: 'port',
    headerName: 'PORT',
    description: 'This column has a value getter and is not sortable.',
    width: 150,
  }
];


export default function ViewPlcList() {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={CameraList}
        columns={columns}
        disableColumnResize
        disableColumnSorting
        disableColumnSelector
        disableEval
        disableColumnMenu
density='standard'
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
      />
    </Box>
  );
}
