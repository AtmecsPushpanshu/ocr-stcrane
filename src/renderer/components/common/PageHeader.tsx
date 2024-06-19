import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import {
    PageTitle
} from '../Styles';
interface PageHeaderProps {
  title?: string;
  showBackIcon?: boolean;
  rightSection?: React.ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, showBackIcon = false, rightSection }) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '10px'
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        {showBackIcon && (
          <IconButton onClick={handleBackClick} color="" edge="start" color="inherit" aria-label="back">
            <ArrowBackIcon />
          </IconButton>
        )}
        {title && (
          <PageTitle sx={{ marginLeft: showBackIcon ? '8px' : '0' }}>
            {title}
          </PageTitle>
        )}
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        {rightSection}
      </Box>
    </Box>
  );
};

export default PageHeader;
