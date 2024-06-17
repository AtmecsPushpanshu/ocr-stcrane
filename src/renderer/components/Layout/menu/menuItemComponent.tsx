import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

export const MenuItemPropTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string,
  Icon: PropTypes.elementType,
  items: PropTypes.array,
};

type MenuItemPropTypes = PropTypes.InferProps<typeof MenuItemPropTypes>;
type MenuItemPropsWithoutItems = Omit<MenuItemPropTypes, 'items'>;

export type MenuItemProps = MenuItemPropsWithoutItems & {
  items?: MenuItemProps[];
};

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { name, link, Icon, items = [] } = props;
  const isExpandable = items && items?.length > 0;
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  function handleClick() {
    if (isExpandable) {
      setOpen(!open);
      return;
    }
    navigate(link);
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
