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
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

const orders = [
  { id: 1, customer: 'Charles Lee', total: 2, date: '07-23-24', status: 'Pending' },
  { id: 2, customer: 'Kyle Doe', total: 5, date: '07-24-24', status: 'Pending' },
];

const Orders = () => {
  return (
    <Box sx={{ display: 'flex', height: '100vh', backgroundColor: '#e0f7fa' }}>
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
          Printing Shop
        </Typography>
        <Button variant="text" sx={{ color: 'white', justifyContent: 'flex-start' }}>
          Dashboard
        </Button>
        <Button variant="text" sx={{ color: 'white', justifyContent: 'flex-start' }}>
          Chats
        </Button>
        <Button variant="text" sx={{ color: 'white', justifyContent: 'flex-start', fontWeight: 'bold' }}>
          Orders
        </Button>
        <Button variant="text" sx={{ color: 'white', justifyContent: 'flex-start', marginTop: 'auto' }}>
          Logout
        </Button>
      </Box>

      {/* Main content */}
      <Container sx={{ flexGrow: 1, padding: 3 }}>
        <AppBar position="static" sx={{ backgroundColor: '#ffffff', boxShadow: 'none' }}>
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Orders
            </Typography>
            <TextField
              variant="outlined"
              placeholder="Search..."
              sx={{ marginLeft: 2, width: '300px' }}
            />
          </Toolbar>
        </AppBar>

        <TableContainer component={Paper} sx={{ marginTop: 4 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Customer</TableCell>
                <TableCell>Total</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>{order.id}</TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell>{order.total}</TableCell>
                  <TableCell>{order.date}</TableCell>
                  <TableCell>
                    <Button variant="contained" color="success" sx={{ marginRight: 1 }}>
                      Accept
                    </Button>
                    <Button variant="contained" color="error">
                      Reject
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

export default Orders;