import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import AppointmentBookingPage from './components/AppointmentBookingPage';

// Create theme with the eye-pleasing colors from user dashboard
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00ff88',
      light: '#00cc6a',
      dark: '#00aa55',
      contrastText: '#000000',
    },
    secondary: {
      main: '#00aaff',
      light: '#0088cc',
      dark: '#0066aa',
      contrastText: '#ffffff',
    },
    error: {
      main: '#ff4444',
      light: '#ff6666',
      dark: '#cc3333',
      contrastText: '#ffffff',
    },
    warning: {
      main: '#ff8c42',
      light: '#ffaa66',
      dark: '#cc6633',
      contrastText: '#ffffff',
    },
    background: {
      default: '#0a0a0a',
      paper: '#1a1a1a',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0b0b0',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12,
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppointmentBookingPage />
    </ThemeProvider>
  );
};

export default App;