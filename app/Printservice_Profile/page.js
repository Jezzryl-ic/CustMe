import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Avatar,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from '@mui/material';
import { Message, ContactMail, AccountCircle, Notifications, Close } from '@mui/icons-material';

function ProfileDashboard() {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: '#f0f0f0' }}>
      {/* Sidebar */}
      <Box
        sx={{
          width: 250,
          bgcolor: '#1f1f1f', // Dark gray for a sleek look
          color: '#ffffff',
          p: 3,
          boxShadow: '2px 0 10px rgba(0,0,0,0.2)',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Avatar src="/path/to/avatar.jpg" alt="User" sx={{ width: 60, height: 60 }} />
          <Typography variant="h6" sx={{ ml: 2 }}>Ivan Camus</Typography>
        </Box>
        <List>
          {['Dashboard', 'Chats', 'My Purchases', 'Designer', 'Printing Shops'].map((text) => (
            <ListItem button key={text} sx={{ '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.1)' } }}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Button variant="contained" color="error" sx={{ mt: 2, width: '100%' }}>Logout</Button>
      </Box>

      {/* Main Content */}
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <AppBar position="static" sx={{ bgcolor: '#ffffff', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', mb: 3 }}>
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>Profile</Typography>
            <IconButton color="inherit">
              <Notifications />
            </IconButton>
            <IconButton color="inherit">
              <Close />
            </IconButton>
          </Toolbar>
        </AppBar>
        
        {/* Profile Header */}
        <Card sx={{ mb: 3, borderRadius: 2, boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
          <CardContent sx={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
            <Box sx={{ width: '100%', height: 200, bgcolor: '#3f51b5', position: 'absolute', top: 0, left: 0, borderRadius: '2px 2px 0 0' }} />
            <Avatar src="/path/to/profile.jpg" sx={{ width: 100, height: 100, mt: 15, ml: 3, border: '4px solid white' }} />
            <Box sx={{ ml: 3 }}>
              <Typography variant="h5" sx={{ color: '#ffffff' }}>Ivan Camus</Typography>
              <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
                <Button variant="contained" startIcon={<Message />} sx={{ bgcolor: '#ff4081', color: '#ffffff' }}>Message</Button>
                <Button variant="outlined" startIcon={<ContactMail />} sx={{ borderColor: '#ff4081', color: '#ff4081' }}>Contact Me</Button>
                <Button variant="outlined" startIcon={<AccountCircle />} sx={{ borderColor: '#3f51b5', color: '#3f51b5' }}>View Profile</Button>
              </Box>
            </Box>
          </CardContent>
        </Card>

        {/* Portfolio Section */}
        <Box>
          <Typography variant="h6" sx={{ color: '#333', mb: 2 }}>My Portfolio <Box component="span" sx={{ color: 'red', fontSize: '0.75rem', ml: 1 }}>NEW</Box></Typography>
          <Box sx={{ display: 'flex', gap: 2, overflowX: 'auto' }}>
            {[
              {
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaW00qe6KCC22-NsR3Lj5GgAzID3T33wm1UA&s",
                title: "Australian Mastermind Logo"
              },
              {
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKy5BbZG_BuFvZ76iSsRyEhNtSvcLDKg8Siw&s",
                title: "Book Bailey"
              }
            ].map((item, index) => (
              <Card key={index} sx={{ minWidth: 300, borderRadius: 2, boxShadow: '0 2px 10px rgba(0,0,0,0.1)', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
                <CardContent>
                  <img src={item.img} alt={item.title} style={{ width: '100%', borderRadius: 4 }} />
                  <Typography variant="body1" sx={{ mt: 1, color: '#333' }}>{item.title}</Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ProfileDashboard;