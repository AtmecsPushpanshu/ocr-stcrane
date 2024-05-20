import { Outlet } from 'react-router-dom';
import {Container, Box } from '@mui/material';
import SideNav from './sideNav';

const MainLayout = (props) => {
  return (
    <>
      <Box
        sx={{
          bgcolor: 'var(--mui-palette-background-default)',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          minHeight: '100%',
        }}
      >
        <SideNav />
        <Box
          sx={{
            display: 'flex',
            flex: '1 1 auto',
            flexDirection: 'column',
            pl: { lg: 'var(--SideNav-width)' },
          }}
        >
          <main>
            <Container maxWidth="xl" sx={{ py: '64px' }}>
              <Outlet />
            </Container>
          </main>
        </Box>
      </Box>
    </>
  );
};

export default MainLayout;
