import Box from '@mui/material/Box';
import { GridColDef } from '@mui/x-data-grid';

import { StyledDataGrid } from '../../components/Styles/DataGridStyles';
import { CameraList } from '../../data/mock';

const columns: GridColDef<(typeof CameraList)[number]>[] = [
  {
    field: 'crane',
    headerName: 'Crane',
    width: 150,
  },
  {
    field: 'plcName',
    headerName: 'PLC Name',
    width: 150,
  },

  {
    field: 'ipAddress',
    headerName: 'IP Address',
    width: 150,
  },
  {
    field: 'port',
    headerName: 'PORT',
    width: 150,
  },
];

interface ViewPlcListProps {
  data: any;
}

export default function ViewPlcList({ data = [] }: ViewPlcListProps) {
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
