import { Box, Stack, Typography, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
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
        top: 0,
      }}
    >
      <Stack spacing={2} sx={{ p: 3 }}>
        <Box
          component={Link}
          to={paths.dashboard.overview}
          sx={{ display: 'inline-flex' }}
        >
          <Logo color="dark" height={32} width={122} />
        </Box>
      </Stack>
      <Divider />
      <Box component="nav" sx={{ flex: '1 1 auto', p: '12px' }}>
        <MenuList />
      </Box>
      <Divider />
    </Box>
  );
}

export default SideNav;
