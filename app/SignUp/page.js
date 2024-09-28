import React from 'react';
import {Container,Typography,TextField, Button,Box,Grid,IconButton,} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';

const SignUp = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: 'white',
      }}
    >
      <Container
        maxWidth="xs"
        sx={{
          backgroundColor: '#00aaff',
          borderRadius: 2,
          padding: 3,
          boxShadow: 3,
          textAlign: 'center',
        }}
      >
        <Typography variant="h4" component="h1" sx={{ color: 'white', marginBottom: 1 }}>
          CustMe
        </Typography>
        <Typography variant="h6" sx={{ marginBottom: 1, color: 'white' }}>
          Register Account
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: 2, color: 'white' }}>
          Connect with designers and printing providers
        </Typography>

        {/* Social Media Buttons */}
        <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 1 }}>
          <IconButton variant="outlined" sx={{ margin: 0.5 }} disabled>
            <GoogleIcon />
          </IconButton>
          <IconButton variant="outlined" sx={{ margin: 0.5 }} disabled>
            <FacebookIcon />
          </IconButton>
        </Box>

        <Typography variant="body2" sx={{ margin: 1, color: 'white' }}>
          OR
        </Typography>
        
        {/* Registration Form */}
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="First Name"
              variant="outlined"
              required
              InputProps={{ readOnly: true }} 
              sx={{ backgroundColor: 'white' }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Last Name"
              variant="outlined"
              required
              InputProps={{ readOnly: true }}
              sx={{ backgroundColor: 'white' }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Username"
              variant="outlined"
              required
              InputProps={{ readOnly: true }}
              sx={{ backgroundColor: 'white' }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              type="email"
              required
              InputProps={{ readOnly: true }}
              sx={{ backgroundColor: 'white' }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Password"
              variant="outlined"
              type="password"
              required
              InputProps={{ readOnly: true }}
              sx={{ backgroundColor: 'white' }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Confirm Password"
              variant="outlined"
              type="password"
              required
              InputProps={{ readOnly: true }}
              sx={{ backgroundColor: 'white' }}
            />
          </Grid>
        </Grid>
        
        <Button
          variant="contained"
          sx={{ marginTop: 2, backgroundColor: '#00aaff', color: 'white' }}
          fullWidth
          disabled // Make the button non-pressable
        >
          Register
        </Button>
        
        <Typography variant="body2" sx={{ marginTop: 1, color: 'white' }}>
          Already have an account? <span style={{ color: 'white' }}>Log in</span>
        </Typography>
      </Container>
    </Box>
  );
};

export default SignUp;