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
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AssessmentIcon from '@mui/icons-material/Assessment';
import PrintIcon from '@mui/icons-material/Print';

const users = [
  { id: 1, name: 'MEL123', email: 'MElanthony@gmail.com', role: 'Admin', verified: 'YES' },
  { id: 3, name: 'Charles000', email: 'CharlesLee@gmail.com', role: 'User', verified: 'NO' },
  { id: 2, name: 'Ivan234', email: 'ivancamus@gmail.com', role: 'Designer', verified: 'YES' },
];

const ManageAccounts = () => {
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
          height: '100vh',
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
        <Typography variant="body2" sx={{ textAlign: 'center', marginBottom: 4 }}>
          Admin
        </Typography>
        <Button
          startIcon={<ManageAccountsIcon />}
          variant="text"
          sx={{ color: 'Black', justifyContent: 'flex-start', fontWeight: 'bold' }}
        >
          Manage Accounts
        </Button>
        <Button
          startIcon={<AssessmentIcon />}
          variant="text"
          sx={{ color: 'white', justifyContent: 'flex-start' }}
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
        <AppBar position="static" sx={{ backgroundColor: '#ffffff', boxShadow: 'none' }}>
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Manage Account
            </Typography>
          </Toolbar>
        </AppBar>

        <TableContainer component={Paper} sx={{ marginTop: 4 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Role</TableCell>
                <TableCell>Verified</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>{user.verified}</TableCell>
                  <TableCell>
                    <Button variant="outlined" color="success" sx={{ marginRight: 1 }}>
                      Accept
                    </Button>
                    <Button variant="outlined" color="error" sx={{ marginRight: 1 }}>
                      Reject
                    </Button>
                    <Button variant="outlined" color="warning" sx={{ marginRight: 1 }}>
                      Disable
                    </Button>
                    <Button variant="outlined" color="primary">
                      Enable
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
};

export default ManageAccounts;