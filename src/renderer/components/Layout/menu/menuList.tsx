import List from '@mui/material/List';
import MenuItem from './menuItemComponent';
import {SideMenuPaths} from '../../../constants/paths'
export default function MenuList() {

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, padding:'40px 0' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      {SideMenuPaths.map((menu, index) => (
        <MenuItem {...menu} key={index} />
      ))}
    </List>
  );
}
