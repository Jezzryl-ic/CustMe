import React from 'react';
import {
  Box,
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  AppBar,
  Toolbar,
  Button,
  IconButton,
  CssBaseline,
  Grid,
  Avatar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const purchases = [
  {
    item: 'Black mug learn as by playing.',
    price: 'P150',
    quantity: '1 pc',
    status: 'Pending...',
  },
  {
    item: 'Black mug learn as by playing.',
    price: 'P150',
    quantity: '1 pc',
    status: 'Completed',
  },
];

const Purchase = () => {
  return (
    <Box sx={{ display: 'flex' }}>
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
        }}
      >
        <Avatar alt="User" src="/path/to/image.jpg" sx={{ width: 56, height: 56, margin: '0 auto' }} />
        <Typography variant="h6" sx={{ textAlign: 'center', marginY: 1 }}>
          Charles Lee Cathagoyn
        </Typography>
        <Typography variant="subtitle1" sx={{ textAlign: 'center', marginBottom: 2 }}>
          USER
        </Typography>
        <Button variant="text" sx={{ color: 'white' }}>Dashboard</Button>
        <Button variant="text" sx={{ color: 'white' }}>Chats</Button>
        <Button variant="text" sx={{ color: 'white', fontWeight: 'bold' }}>My Purchases</Button>
        <Button variant="text" sx={{ color: 'white' }}>Logout</Button>
      </Box>

      {/* Main content */}
      <Container sx={{ flexGrow: 1, padding: 3 }}>
        <AppBar position="static" sx={{ backgroundColor: '#f8f8f8', boxShadow: 'none' }}>
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              My Purchases
            </Typography>
          </Toolbar>
        </AppBar>

        <Box sx={{ marginTop: 2 }}>
          {purchases.map((purchase, index) => (
            <List key={index}>
              <ListItem>
                <ListItemText
                  primary={purchase.item}
                  secondary={
                    <>
                      <Typography component="span" variant="body2" color="text.primary">
                        {purchase.price} - {purchase.quantity}
                      </Typography>
                      <Typography
                        component="span"
                        variant="body2"
                        sx={{
                          color: purchase.status === 'Pending...' ? 'red' : 'green',
                          marginLeft: 1,
                        }}
                      >
                        {purchase.status}
                      </Typography>
                    </>
                  }
                />
              </ListItem>
            </List>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Purchase;