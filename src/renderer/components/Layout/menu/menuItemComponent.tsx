/* eslint-disable react/require-default-props */
/* eslint-disable react/no-children-prop */
/* eslint-disable react/function-component-definition */
import React, { forwardRef } from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import { NavLink, NavLinkProps } from 'react-router-dom';

export interface MenuItemComponentProps {
  className?: string;
  link?: string | null; // because the InferProps props allows alows null value
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

const MenuItemComponent: React.FC<MenuItemComponentProps> = (props) => {
  const { className, onClick, link } = props;

  // If link is not set return the orinary ListItem
  if (!link || typeof link !== 'string') {
    return (
      <ListItemButton
        button
        className={className}
        children={children}
        onClick={onClick}
      />
    );
  }

  // Return a LitItem with a link component
  return (
    <ListItem
      button
      className={className}
      children={children}
      component={forwardRef((props: NavLinkProps, ref: any) => (
        <NavLink exact {...props} innerRef={ref} />
      ))}
      to={link}
    />
  );
};

export default MenuItemComponent;
