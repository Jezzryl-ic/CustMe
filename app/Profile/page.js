import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button, Avatar, Card, CardContent, List, ListItem, ListItemText, IconButton } from '@mui/material';
import { Message, ContactMail, AccountCircle, Notifications, Close } from '@mui/icons-material';

function ProfileDashboard() {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      {/* Sidebar */}
      <Box sx={{ width: 250, bgcolor: '#2196f3', color: 'white', p: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Avatar src="/path/to/avatar.jpg" alt="User" />
          <Typography variant="h6" sx={{ ml: 2 }}>Ivan Camus</Typography>
        </Box>
        <List>
          <ListItem button>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Chats" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="My Purchases" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Designer" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Printing Shops" />
          </ListItem>
        </List>
        <Button variant="contained" color="secondary" sx={{ mt: 2 }}>Logout</Button>
      </Box>

      {/* Main Content */}
      <Box sx={{ flexGrow: 1, p: 3, bgcolor: '#f5f5f5' }}>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Profile
            </Typography>
            <IconButton color="inherit">
              <Notifications />
            </IconButton>
            <IconButton color="inherit">
              <Close />
            </IconButton>
          </Toolbar>
        </AppBar>
        
        {/* Profile Header */}
        <Card sx={{ mb: 3 }}>
          <CardContent sx={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
            <Box sx={{ width: '100%', height: 200, bgcolor: '#000', position: 'absolute', top: 0, left: 0, zIndex: -1 }}></Box>
            <Avatar src="/path/to/profile.jpg" sx={{ width: 100, height: 100, mt: 15, ml: 3 }} />
            <Box sx={{ ml: 3 }}>
              <Typography variant="h5">Ivan Camus</Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Button variant="contained" startIcon={<Message />}>Message</Button>
                <Button variant="outlined" startIcon={<ContactMail />}>Contact Me</Button>
                <Button variant="outlined" startIcon={<AccountCircle />}>View Profile</Button>
              </Box>
            </Box>
          </CardContent>
        </Card>

        {/* Portfolio Section */}
        <Box>
          <Typography variant="h6" sx={{ mb: 2 }}>My Portfolio <Box component="span" sx={{ color: 'red', fontSize: '0.75rem', ml: 1 }}>NEW</Box></Typography>
          <Box sx={{ display: 'flex', gap: 2, overflowX: 'auto' }}>
            <Card sx={{ minWidth: 300 }}>
              <CardContent>
                <img src="/path/to/project1.jpg" alt="Project 1" style={{ width: '100%', borderRadius: 4 }} />
                <Typography variant="body1" sx={{ mt: 1 }}>Australian Mastermind Logo</Typography>
              </CardContent>
            </Card>
            <Card sx={{ minWidth: 300 }}>
              <CardContent>
                <img src="/path/to/project2.jpg" alt="Project 2" style={{ width: '100%', borderRadius: 4 }} />
                <Typography variant="body1" sx={{ mt: 1 }}>Book Bailey</Typography>
              </CardContent>
            </Card>
            {/* Add more cards as needed */}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ProfileDashboard;