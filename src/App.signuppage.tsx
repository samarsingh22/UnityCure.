import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { 
  Container, 
  Paper, 
  Typography, 
  TextField, 
  Button, 
  Select, 
  MenuItem, 
  FormControl, 
  InputLabel, 
  Stack, 
  Box,
  IconButton,
  InputAdornment,
  Divider,
  Link,
  Alert
} from '@mui/material';
import { 
  Visibility, 
  VisibilityOff, 
  GitHub, 
  Square,
  Warning
} from '@mui/icons-material';

// Create theme matching the login page design
const theme = createTheme({
  palette: {
    primary: {
      main: '#111827',
      light: '#1f2937',
      dark: '#0f172a',
    },
    secondary: {
      main: '#3b82f6',
      light: '#60a5fa',
      dark: '#2563eb',
    },
    background: {
      default: '#f8f9fa',
      paper: '#ffffff',
    },
    text: {
      primary: '#111827',
      secondary: '#6b7280',
    },
    grey: {
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
    },
  },
  typography: {
    fontFamily: '"Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    h4: {
      fontWeight: 600,
      fontSize: '1.875rem',
      lineHeight: 1.2,
      letterSpacing: '-0.025em',
    },
    body2: {
      fontSize: '0.875rem',
      color: '#6b7280',
      lineHeight: 1.4,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
              borderColor: '#9ca3af',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#3b82f6',
              boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.1)',
            },
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 500,
          borderRadius: 8,
          padding: '0.75rem 1rem',
          transition: 'all 0.2s ease',
          '&:hover': {
            transform: 'translateY(-1px)',
          },
        },
        contained: {
          boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(17, 24, 39, 0.15)',
            transform: 'translateY(-1px)',
          },
        },
        outlined: {
          '&:hover': {
            backgroundColor: '#f9fafb',
            borderColor: '#9ca3af',
            transform: 'translateY(-1px)',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
          },
        },
      },
    },
  },
});

const SignupPage: React.FC = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [formData, setFormData] = React.useState({
    fullName: '',
    identifier: '',
    phone: '',
    role: '',
    password: '',
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleInputChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [field]: event.target.value
    }));
  };

  const handleRoleChange = (event: any) => {
    setFormData(prev => ({
      ...prev,
      role: event.target.value
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Signup form submitted:', formData);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          background: '#f8f9fa',
        }}
      >
        {/* Left Side - Branding (Hidden on mobile) */}
        <Box
          sx={{
            flex: 1,
            background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
            position: 'relative',
            display: { xs: 'none', lg: 'flex' },
            alignItems: 'center',
            justifyContent: 'center',
            padding: 4,
            overflow: 'hidden',
          }}
        >
          {/* Background Image */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: 'url("https://via.placeholder.com/600x800/4f46e5/ffffff?text=Branding+Image")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              zIndex: 0,
              opacity: 0.8,
            }}
          />
          <Box sx={{ textAlign: 'center', zIndex: 3, position: 'relative' }}>
            <Stack direction="row" alignItems="center" spacing={1.5} justifyContent="center" mb={4}>
              <Box
                sx={{
                  width: 32,
                  height: 32,
                  backgroundColor: '#333',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                }}
              >
                <Square sx={{ fontSize: 16 }} />
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  color: '#333',
                  letterSpacing: '-0.02em',
                }}
              >
                Acme Inc.
              </Typography>
            </Stack>
          </Box>
          
          {/* Decorative pattern overlay */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: `
                radial-gradient(circle at 25% 25%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)
              `,
              zIndex: 2,
            }}
          />
        </Box>

        {/* Right Side - Signup Form */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 4,
            backgroundColor: 'white',
          }}
        >
          <Container maxWidth="sm">
            <Paper
              elevation={0}
              sx={{
                padding: 0,
                backgroundColor: 'transparent',
                maxWidth: 400,
                margin: '0 auto',
              }}
            >
              {/* Mobile Logo (Visible only on mobile) */}
              <Box sx={{ display: { xs: 'block', lg: 'none' }, textAlign: 'center', mb: 4 }}>
                <Stack direction="row" alignItems="center" spacing={1.5} justifyContent="center">
                  <Box
                    sx={{
                      width: 32,
                      height: 32,
                      backgroundColor: '#333',
                      borderRadius: '6px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                    }}
                  >
                    <Square sx={{ fontSize: 16 }} />
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      color: '#333',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    Acme Inc.
                  </Typography>
                </Stack>
              </Box>

              {/* Signup Header */}
              <Box sx={{ textAlign: 'center', mb: 4 }}>
                <Typography
                  variant="h4"
                  component="h1"
                  sx={{
                    fontWeight: 600,
                    color: '#111827',
                    mb: 1,
                    lineHeight: 1.2,
                    letterSpacing: '-0.025em',
                  }}
                >
                  Create your account
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#6b7280',
                    lineHeight: 1.4,
                  }}
                >
                  Join UnityCure to access your role-specific dashboard
                </Typography>
              </Box>

              {/* System feedback area */}
              <Alert 
                severity="error" 
                sx={{ 
                  mb: 2, 
                  display: 'none',
                  borderRadius: 2,
                }}
              >
                Registration failed. Please check your input and try again.
              </Alert>

              {/* Signup Form */}
              <Box component="form" onSubmit={handleSubmit}>
                <Stack spacing={3}>
                  {/* Full Name Input */}
                  <TextField
                    fullWidth
                    label="Full Name"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={handleInputChange('fullName')}
                    required
                    helperText="Enter your complete name as it appears on official documents."
                  />

                  {/* Email/Mobile Input */}
                  <TextField
                    fullWidth
                    label="Email or Mobile Number"
                    placeholder="m@example.com or 10-digit mobile"
                    value={formData.identifier}
                    onChange={handleInputChange('identifier')}
                    required
                    helperText="Use a valid email address or a 10-digit mobile number."
                  />

                  {/* Contact Number Input (Optional) */}
                  <TextField
                    fullWidth
                    label="Contact Number (optional)"
                    placeholder="Optional 10-digit number"
                    value={formData.phone}
                    onChange={handleInputChange('phone')}
                    helperText="Additional contact number for emergency purposes."
                  />

                  {/* Role Selection */}
                  <FormControl fullWidth required>
                    <InputLabel>Select Role</InputLabel>
                    <Select
                      value={formData.role}
                      label="Select Role"
                      onChange={handleRoleChange}
                    >
                      <MenuItem value="">Choose role...</MenuItem>
                      <MenuItem value="Citizen">Citizen</MenuItem>
                      <MenuItem value="Hospital Staff">Hospital Staff</MenuItem>
                      <MenuItem value="Doctor">Doctor</MenuItem>
                      <MenuItem value="Dispatcher">Dispatcher</MenuItem>
                      <MenuItem value="Platform Admin">Platform Admin</MenuItem>
                    </Select>
                  </FormControl>

                  {/* Password Input */}
                  <TextField
                    fullWidth
                    label="Password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="At least 6 characters"
                    value={formData.password}
                    onChange={handleInputChange('password')}
                    required
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />

                  {/* Create Account Button */}
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    size="large"
                    sx={{
                      backgroundColor: '#111827',
                      color: 'white',
                      '&:hover': {
                        backgroundColor: '#1f2937',
                      },
                    }}
                  >
                    Create account
                  </Button>

                  {/* Divider */}
                  <Box sx={{ position: 'relative', textAlign: 'center', my: 3 }}>
                    <Divider sx={{ '&::before, &::after': { borderColor: '#e5e7eb' } }}>
                      <Typography variant="caption" sx={{ color: '#6b7280', px: 2 }}>
                        Or continue with
                      </Typography>
                    </Divider>
                  </Box>

                  {/* GitHub Signup Button */}
                  <Button
                    fullWidth
                    variant="outlined"
                    size="large"
                    startIcon={<GitHub />}
                    sx={{
                      borderColor: '#d1d5db',
                      color: '#374151',
                    }}
                  >
                    Sign up with GitHub
                  </Button>

                  {/* Login Link */}
                  <Box sx={{ textAlign: 'center', mt: 3 }}>
                    <Typography variant="body2" component="span" sx={{ color: '#6b7280' }}>
                      Already have an account?{' '}
                    </Typography>
                    <Link
                      href="#"
                      sx={{
                        color: '#3b82f6',
                        textDecoration: 'none',
                        fontWeight: 500,
                        '&:hover': {
                          color: '#2563eb',
                          textDecoration: 'underline',
                        },
                      }}
                    >
                      Log in
                    </Link>
                  </Box>
                </Stack>
              </Box>
            </Paper>
          </Container>
        </Box>

        {/* SOS Button */}
        <Button
          variant="contained"
          sx={{
            position: 'fixed',
            right: 16,
            bottom: 16,
            borderRadius: '50px',
            backgroundColor: '#ffa500',
            color: 'white',
            minWidth: 'auto',
            padding: '12px 16px',
            boxShadow: '0 6px 20px rgba(0,0,0,.2)',
            '&:hover': {
              backgroundColor: '#e69500',
              transform: 'scale(1.05)',
            },
          }}
          startIcon={<Warning />}
        >
          SOS
        </Button>
      </Box>
    </ThemeProvider>
  );
};

export default SignupPage;