import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  AppBar,
  Toolbar,
  Avatar,
  CssBaseline,
} from '@mui/material';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AssessmentIcon from '@mui/icons-material/Assessment';
import PrintIcon from '@mui/icons-material/Print';

const GenerateReports = () => {
  return (
    <Box sx={{ display: 'flex', height: '100vh', backgroundColor: '#f0f0f0' }}>
      <CssBaseline />
      {/* Sidebar */}
      <Box
        sx={{
          width: '250px',
          backgroundColor: '#00aaff',
          color: 'white',
          padding: 2,
          display: 'flex',
          flexDirection: 'column',
          height: '100vh', // Full height for sidebar
        }}
      >
        <Avatar
          alt="User"
          src="/path/to/image.jpg" // Update with actual image path
          sx={{ width: 56, height: 56, margin: '0 auto', marginBottom: 2 }}
        />

        <Typography variant="subtitle1" sx={{ textAlign: 'center', marginBottom: 2 }}>
          Camus Ivan
        </Typography>
        <Typography variant="body2" sx={{ textAlign: 'center', marginBottom: 2 }}>
          Admin
        </Typography>
        <Button
          startIcon={<ManageAccountsIcon />}
          variant="text"
          sx={{ color: 'white', justifyContent: 'flex-start' }}
        >
          Manage Accounts
        </Button>
        <Button
          startIcon={<AssessmentIcon />}
          variant="text"
          sx={{ color: 'black', justifyContent: 'flex-start', fontWeight: 'bold' }}
        >
          Generate Reports
        </Button>
        <Button
          startIcon={<PrintIcon />}
          variant="text"
          sx={{ color: 'white', justifyContent: 'flex-start', marginTop: 'auto' }}
        >
          Logout
        </Button>
      </Box>

      {/* Main content */}
      <Container sx={{ flexGrow: 1, padding: 3 }}>
        <AppBar position="static" sx={{ backgroundColor: '#1c1818', boxShadow: 'none' }}>
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Generate Reports
            </Typography>
          </Toolbar>
        </AppBar>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginTop: 4,
            height: '100%', // Full height for buttons
          }}
        >
          <Button
            variant="outlined"
            sx={{ padding: 2, width: '150px', textAlign: 'center' }}
          >
            <Typography variant="h6">CLIENT</Typography>
          </Button>
          <Button
            variant="outlined"
            sx={{ padding: 2, width: '150px', textAlign: 'center' }}
          >
            <Typography variant="h6">DESIGNER</Typography>
          </Button>
          <Button
            variant="outlined"
            sx={{ padding: 2, width: '150px', textAlign: 'center' }}
          >
            <Typography variant="h6">PRINTING SHOPS</Typography>
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default GenerateReports;