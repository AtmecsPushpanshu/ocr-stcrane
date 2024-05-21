import { Box, Stack, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import { Logo } from './logo';
import { paths } from '../../constants/paths';
import MenuList from './menu/menuList';

function SideNav() {
  return (
    <Box
      sx={{
        display: { xs: 'none', lg: 'flex' },
        flexDirection: 'column',
        height: '100%',
        left: 0,
        maxWidth: '100%',
        position: 'fixed',
        scrollbarWidth: 'none',
        width: 'inherit',
        top: 0,
      }}
    >
      <Stack
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{ height: '64px', background: '#24558D' }}
      >
        <Box component={Link} to={paths.login} sx={{ display: 'inline-flex' }}>
          <Logo color="light" height={38} width={130} />
        </Box>
      </Stack>
      <Divider />
      <Box component="nav">
        <MenuList />
      </Box>
      <Divider />
    </Box>
  );
}

export default SideNav;
