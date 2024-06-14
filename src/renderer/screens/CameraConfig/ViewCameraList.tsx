import Box from '@mui/material/Box';
import { GridColDef } from '@mui/x-data-grid';
import { CameraList } from '../../data/mock';
import { StyledDataGrid } from '../../components/Styles/DataGridStyles';

const columns: GridColDef<(typeof CameraList)[number]>[] = [
  {
    field: 'terminal',
    headerName: 'Terminal',
    width: 150,
    editable: false,
  },
  {
    field: 'crane',
    headerName: 'Crane',
    width: 150,
    editable: false,
  },
  {
    field: 'deviceName',
    headerName: 'Device Name',
    width: 150,
    editable: false,
  },

  {
    field: 'deviceMake',
    headerName: 'Device Make',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
  },
  {
    field: 'ipAddress',
    headerName: 'IP Address',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 150,
  },
  {
    field: 'port',
    headerName: 'PORT',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 150,
  },
  {
    field: 'status',
    headerName: 'Status',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (value, _) => value?"Active":"Inactive",
  },
];


export default function ViewCameraList() {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <StyledDataGrid
        disableColumnResize
        disableColumnSorting
        disableColumnSelector
        disableEval
        disableColumnMenu
        rows={CameraList}
        columns={columns}
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
