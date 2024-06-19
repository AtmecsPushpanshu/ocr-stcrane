import Box from '@mui/material/Box';
import { GridColDef } from '@mui/x-data-grid';
import { CameraList } from '../../data/mock';
import { StyledDataGrid } from '../../components/Styles/DataGridStyles';
import { useGetData } from '../../data/apiHooks';
import { useNavigate } from 'react-router-dom';


export default function ViewCameraList() {
  const navigate = useNavigate()
  const { data: getData, isLoading } = useGetData('/cameraconfig');

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
    sortable: false,
    width: 160,
  },
  {
    field: 'ipAddress',
    headerName: 'IP Address',
    sortable: false,
    width: 150,
  },
  {
    field: 'port',
    headerName: 'PORT',
    sortable: false,
    width: 150,
  },
  {
    field: 'status',
    headerName: 'Status',
    sortable: false,
    width: 160,
    valueGetter: (value, _) => (value ? 'Active' : 'Inactive'),
  },
  {
    field: 'preset',
    headerName: 'Preset',
    sortable: false,
    width: 160,
    renderCell: (params) => <a onClick={() => navigate('../view-camera-preset')}>4 preset</a>
  },
];

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
