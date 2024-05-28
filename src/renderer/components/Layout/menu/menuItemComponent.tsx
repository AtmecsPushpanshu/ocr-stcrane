import React from 'react';
import PropTypes from 'prop-types';
import {
  Collapse,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
// React runtime PropTypes
export const MenuItemPropTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string,
  Icon: PropTypes.elementType,
  items: PropTypes.array,
};

// TypeScript compile-time props type, infered from propTypes
// https://dev.to/busypeoples/notes-on-typescript-inferring-react-proptypes-1g88
type MenuItemPropTypes = PropTypes.InferProps<typeof MenuItemPropTypes>;
type MenuItemPropsWithoutItems = Omit<MenuItemPropTypes, 'items'>;

// Improve child items declaration
export type MenuItemProps = MenuItemPropsWithoutItems & {
  items?: MenuItemProps[];
};

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { name, Icon, items = [] } = props;
  const isExpandable = items && items.length > 0;
  const [open, setOpen] = React.useState(false);

  function handleClick() {
    setOpen(!open);
  }

  const MenuItemRoot = (
    <ListItemButton onClick={handleClick}>
      {/* Display an icon if any */}
      {!!Icon && (
        <ListItemIcon>
          <Icon />
        </ListItemIcon>
      )}
      <ListItemText primary={name} inset={!Icon} />
      {/* Display the expand menu if the item has children */}
      {isExpandable && !open && <ExpandMore />}
      {isExpandable && open && <ExpandLess />}
    </ListItemButton>
  );

  const MenuItemChildren = isExpandable ? (
    <Collapse in={open} timeout="auto" unmountOnExit>
      <Divider />
      <List component="div" disablePadding>
        {items.map((item, index) => (
          <MenuItem {...item} key={index} />
        ))}
      </List>
    </Collapse>
  ) : null;

  return (
    <>
      {MenuItemRoot}
      {MenuItemChildren}
    </>
  );
};

export default MenuItem;
