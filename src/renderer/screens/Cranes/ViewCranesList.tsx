import Box from '@mui/material/Box';
import { GridColDef } from '@mui/x-data-grid';

import { StyledDataGrid } from '../../components/Styles/DataGridStyles';
import { CameraList } from '../../data/mock';

const columns: GridColDef<(typeof CameraList)[number]>[] = [
  {
    field: 'craneName',
    headerName: 'Crane Name',
    width: 150,
  },
  {
    field: 'craneId',
    headerName: 'Crane ID',
    width: 150,
  },
  {
    field: 'craneType',
    headerName: 'Crane Type',
    width: 150,
  },
  {
    field: 'laneCount',
    headerName: 'No of lanes',
    width: 150,
  },
];

interface ViewCranesListProps {
  data: any;
}

export default function ViewCranesList({ data = [] }: ViewCranesListProps) {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <StyledDataGrid
        rows={data}
        columns={columns}
        disableColumnResize
        disableColumnSorting
        disableColumnSelector
        disableEval
        disableColumnMenu
        disableAutosize
        density="standard"
        getRowId={(row) => row?._id}
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
