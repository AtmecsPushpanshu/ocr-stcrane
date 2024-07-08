import Box from '@mui/material/Box';
import { GridColDef } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';

import { StyledDataGrid } from '../../components/Styles/DataGridStyles';
import { CameraList } from '../../data/mock';

interface ViewCameraListProps {
  data: any;
}
export default function ViewCameraList({ data = [] }: ViewCameraListProps) {
  const navigate = useNavigate();

  const columns: GridColDef<(typeof CameraList)[number]>[] = [
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
      renderCell: (params) => (
        <a onClick={() => navigate(`../view-camera-preset/${params?.id}`)}>4 preset</a>
      ),
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
        rows={data}
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
