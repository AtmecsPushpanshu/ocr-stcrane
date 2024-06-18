import Box from '@mui/material/Box';
import { GridColDef } from '@mui/x-data-grid';
import { CameraList } from '../../data/mock';
import { StyledDataGrid } from '../../components/Styles/DataGridStyles';
import { useGetData } from '../../data/apiHooks';


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
    valueGetter: (value, _) => (value ? 'Active' : 'Inactive'),
  },
];

export default function ViewCameraList() {
  const { data: getData, isLoading } = useGetData('/cameraconfig');
  console.log(getData);

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <StyledDataGrid
        disableColumnResize
        disableColumnSorting
        disableColumnSelector
        disableEval
        disableColumnMenu
        loading={isLoading}
        rows={isLoading ? [] : getData}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        getRowId={(row) => row?._id}
        pageSizeOptions={[5]}
      />
    </Box>
  );
}
