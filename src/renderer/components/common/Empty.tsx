import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { IllustrationIcon } from '../../constants/systemIcons';
import { WithFlexGrow } from '../Styles';

interface EmptyProps {
  showIcon?: boolean;
  title: string;
  description?: any;
  onActionClick?: () => void;
  actionLabel?: string;
}

const Root = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(4),
  textAlign: 'center',
}));

const Title = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(1),
  fontSize: '16px',
  fontWeight: 700,
  lineHeight: '22.4px',
  textAlign: 'center',
  color: '#909090',
}));

const Description = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  fontSize: '16px',
  fontWeight: 600,
  lineHeight: '22.4px',
  textAlign: 'center',
  color: '#909090',
}));

const Empty: React.FC<EmptyProps> = ({
  showIcon = false,
  title,
  description,
  onActionClick,
  actionLabel,
}) => {
  return (
    <WithFlexGrow>
      <Root>
        {showIcon && <IllustrationIcon />}
        <Title variant="h5">{title}</Title>
        {description && (
          <Description variant="body1">{description}</Description>
        )}
        {onActionClick && actionLabel && (
          <Button variant="contained" color="primary" onClick={onActionClick}>
            {actionLabel}
          </Button>
        )}
      </Root>
    </WithFlexGrow>
  );
};

export default Empty;
