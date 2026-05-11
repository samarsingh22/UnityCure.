import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Stack, 
  Paper,
  Button,
  Card,
  CardContent,
  Grid,
  Chip
} from '@mui/material';
import { styled } from '@mui/material/styles';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import ScrollAwareAlertBar from './ScrollAwareAlertBar';

const PageContainer = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, rgba(10,10,10,0.95) 0%, rgba(26,26,46,0.95) 50%, rgba(22,33,62,0.95) 100%), url("https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80") center/cover',
  minHeight: '200vh', // Make it scrollable to demonstrate the alert bar
  position: 'relative',
  paddingTop: '2rem',
  paddingBottom: '6rem', // Space for the alert bar
}));

const ContentOverlay = styled(Box)(({ theme }) => ({
  background: 'rgba(10, 10, 10, 0.85)',
  backdropFilter: 'blur(10px)',
  padding: '2rem',
  borderRadius: '20px',
  margin: '2rem 0',
}));

const StyledCard = styled(Card)(({ theme }) => ({
  background: 'linear-gradient(135deg, #1a1a1a, rgba(0,255,136,0.05))',
  border: '2px solid rgba(0,255,136,0.2)',
  borderRadius: '20px',
  boxShadow: '0 8px 30px rgba(0,255,136,0.15)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-3px)',
    boxShadow: '0 12px 40px rgba(0,255,136,0.25)',
  },
}));

const ActionButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(45deg, #00ff88, #00cc6a)',
  color: '#000000',
  padding: '12px 24px',
  borderRadius: '25px',
  fontWeight: 600,
  textTransform: 'none',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'linear-gradient(45deg, #00cc6a, #00aa55)',
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 25px rgba(0,255,136,0.5)',
  },
}));

const AppointmentBookingPage: React.FC = () => {
  const [showAlert, setShowAlert] = useState(true);

  const handleCancelAlert = () => {
    console.log('Cancel clicked');
    setShowAlert(false);
  };

  const handleEmergencyAlert = () => {
    console.log('Emergency alert triggered');
    // In real implementation, this would trigger emergency services
    alert('Emergency services have been alerted!');
  };

  return (
    <PageContainer>
      <Container maxWidth="lg">
        {/* Header Section */}
        <ContentOverlay>
          <Stack spacing={3}>
            <Box>
              <Typography 
                variant="h2" 
                sx={{ 
                  color: '#ffffff', 
                  fontWeight: 700, 
                  textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                  mb: 1
                }}
              >
                <CalendarTodayIcon sx={{ color: '#00ff88', mr: 2, fontSize: '2.5rem' }} />
                Book Appointment
              </Typography>
              <Typography variant="h6" sx={{ color: '#b0b0b0' }}>
                Select a time, enter patient details, and confirm your booking.
              </Typography>
            </Box>

            {/* Doctor Info Card */}
            <StyledCard>
              <CardContent sx={{ p: 3 }}>
                <Stack direction="row" spacing={3} alignItems="center">
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: '50%',
                      background: 'linear-gradient(45deg, #00aaff, #0088cc)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                      fontSize: '2rem',
                    }}
                  >
                    👩‍⚕️
                  </Box>
                  <Box flex={1}>
                    <Typography variant="h5" sx={{ color: '#ffffff', fontWeight: 700, mb: 1 }}>
                      Dr. Ananya Basu
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#00aaff', mb: 1 }}>
                      Cardiologist • <span style={{ color: '#00ff88' }}>City Medical Center</span>
                    </Typography>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Chip 
                        icon={<LocalHospitalIcon />} 
                        label="Profile verified" 
                        size="small"
                        sx={{ 
                          background: 'rgba(0,255,136,0.2)', 
                          color: '#00ff88',
                          border: '1px solid rgba(0,255,136,0.3)'
                        }}
                      />
                      <Typography variant="caption" sx={{ color: '#b0b0b0' }}>
                        updated 5 mins ago
                      </Typography>
                    </Stack>
                  </Box>
                </Stack>
              </CardContent>
            </StyledCard>

            {/* Appointment Options */}
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <StyledCard>
                  <CardContent sx={{ p: 3, textAlign: 'center' }}>
                    <VideoCallIcon sx={{ fontSize: '3rem', color: '#00aaff', mb: 2 }} />
                    <Typography variant="h6" sx={{ color: '#ffffff', mb: 2 }}>
                      Telemedicine
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#b0b0b0', mb: 3 }}>
                      Consult from the comfort of your home via video call
                    </Typography>
                    <ActionButton fullWidth>
                      Book Telemedicine
                    </ActionButton>
                  </CardContent>
                </StyledCard>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <StyledCard>
                  <CardContent sx={{ p: 3, textAlign: 'center' }}>
                    <LocalHospitalIcon sx={{ fontSize: '3rem', color: '#ff8c42', mb: 2 }} />
                    <Typography variant="h6" sx={{ color: '#ffffff', mb: 2 }}>
                      In-Person Visit
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#b0b0b0', mb: 3 }}>
                      Visit the hospital for physical examination and consultation
                    </Typography>
                    <ActionButton fullWidth>
                      Book In-Person
                    </ActionButton>
                  </CardContent>
                </StyledCard>
              </Grid>
            </Grid>

            {/* Sample Content to Enable Scrolling */}
            <Box sx={{ mt: 4 }}>
              <Typography variant="h4" sx={{ color: '#ffffff', mb: 3 }}>
                Available Time Slots
              </Typography>
              {[...Array(10)].map((_, index) => (
                <StyledCard key={index} sx={{ mb: 2 }}>
                  <CardContent>
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                      <Box>
                        <Typography variant="h6" sx={{ color: '#ffffff' }}>
                          {new Date(Date.now() + index * 24 * 60 * 60 * 1000).toLocaleDateString()}
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#b0b0b0' }}>
                          Available slots: {Math.floor(Math.random() * 8) + 1}
                        </Typography>
                      </Box>
                      <ActionButton>
                        Select Time
                      </ActionButton>
                    </Stack>
                  </CardContent>
                </StyledCard>
              ))}
            </Box>

            {/* More content to demonstrate scrolling */}
            <Box sx={{ mt: 4 }}>
              <Typography variant="h4" sx={{ color: '#ffffff', mb: 3 }}>
                Patient Information
              </Typography>
              <StyledCard>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="body1" sx={{ color: '#b0b0b0', lineHeight: 1.8 }}>
                    Please scroll down to see the emergency alert bar appear. The alert bar will only show 
                    when you scroll down the page, implementing the requested functionality. The color scheme 
                    has been updated to use the eye-pleasing colors from the user dashboard: green (#00ff88), 
                    blue (#00aaff), orange (#ff8c42), and red (#ff4444) instead of the previous orangish/brownish 
                    neon theme.
                  </Typography>
                  <br />
                  <Typography variant="body1" sx={{ color: '#b0b0b0', lineHeight: 1.8 }}>
                    The emergency alert functionality remains intact while only the UI has been modified 
                    as requested. The bars now use a modern glassmorphism design with proper contrast ratios 
                    for accessibility.
                  </Typography>
                </CardContent>
              </StyledCard>
            </Box>
          </Stack>
        </ContentOverlay>
      </Container>

      {/* Scroll-aware Alert Bar */}
      {showAlert && (
        <ScrollAwareAlertBar
          onCancel={handleCancelAlert}
          onAlert={handleEmergencyAlert}
        />
      )}
    </PageContainer>
  );
};

export default AppointmentBookingPage;