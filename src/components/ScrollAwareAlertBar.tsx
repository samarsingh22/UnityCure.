import React, { useState, useEffect } from 'react';
import { Box, Stack, Button, Typography, Fade, useScrollTrigger } from '@mui/material';
import { styled } from '@mui/material/styles';
import CancelIcon from '@mui/icons-material/Cancel';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';

const AlertBarContainer = styled(Box)(({ theme }) => ({
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: 1300,
  padding: '16px',
  background: 'rgba(10, 10, 10, 0.95)',
  backdropFilter: 'blur(10px)',
  borderTop: '2px solid rgba(0, 255, 136, 0.2)',
  boxShadow: '0 -8px 32px rgba(0, 255, 136, 0.15)',
}));

const CancelButton = styled(Button)(({ theme }) => ({
  background: 'transparent',
  border: '2px solid rgba(255, 68, 68, 0.5)',
  color: '#ff4444',
  padding: '12px 24px',
  borderRadius: '25px',
  fontWeight: 600,
  textTransform: 'none',
  fontSize: '1rem',
  minWidth: '120px',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'rgba(255, 68, 68, 0.1)',
    transform: 'translateY(-2px)',
    borderColor: '#ff4444',
    boxShadow: '0 4px 15px rgba(255, 68, 68, 0.3)',
  },
}));

const AlertButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(135deg, #00ff88, #00cc6a)',
  border: 'none',
  color: '#000000',
  padding: '15px 30px',
  borderRadius: '25px',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '1px',
  fontSize: '1rem',
  minWidth: '200px',
  transition: 'all 0.3s ease',
  boxShadow: '0 6px 20px rgba(0, 255, 136, 0.4)',
  '&:hover': {
    background: 'linear-gradient(135deg, #00cc6a, #00aa55)',
    transform: 'translateY(-3px) scale(1.05)',
    boxShadow: '0 12px 35px rgba(0, 255, 136, 0.6)',
  },
  '& .MuiButton-startIcon': {
    animation: 'pulse 2s infinite',
  },
  '@keyframes pulse': {
    '0%': {
      transform: 'scale(1)',
    },
    '50%': {
      transform: 'scale(1.1)',
    },
    '100%': {
      transform: 'scale(1)',
    },
  },
}));

const ConsentText = styled(Typography)(({ theme }) => ({
  color: '#b0b0b0',
  fontSize: '0.9rem',
  lineHeight: 1.4,
  maxWidth: '400px',
  flex: 1,
}));

interface ScrollAwareAlertBarProps {
  onCancel?: () => void;
  onAlert?: () => void;
  consentText?: string;
}

const ScrollAwareAlertBar: React.FC<ScrollAwareAlertBarProps> = ({
  onCancel,
  onAlert,
  consentText = "By submitting, you consent to share the provided data for emergency response as per DPDP Act 2023."
}) => {
  const [isVisible, setIsVisible] = useState(false);
  
  // Custom scroll trigger that shows the bar when scrolled down
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100, // Show after scrolling 100px
  });

  useEffect(() => {
    setIsVisible(trigger);
  }, [trigger]);

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    }
  };

  const handleAlert = () => {
    if (onAlert) {
      onAlert();
    }
  };

  return (
    <Fade in={isVisible} timeout={300}>
      <AlertBarContainer>
        <Stack 
          direction={{ xs: 'column', md: 'row' }} 
          alignItems={{ xs: 'stretch', md: 'center' }}
          justifyContent="space-between"
          spacing={3}
        >
          <ConsentText variant="body2">
            {consentText}
          </ConsentText>
          
          <Stack direction="row" spacing={2} alignItems="center">
            <CancelButton
              startIcon={<CancelIcon />}
              onClick={handleCancel}
              variant="outlined"
            >
              Cancel
            </CancelButton>
            
            <AlertButton
              startIcon={<ReportProblemIcon />}
              onClick={handleAlert}
              variant="contained"
            >
              Alert Emergency Services
            </AlertButton>
          </Stack>
        </Stack>
      </AlertBarContainer>
    </Fade>
  );
};

export default ScrollAwareAlertBar;