import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button, Avatar, Paper, List, ListItem, ListItemText, IconButton } from '@mui/material';
import { Create, Message, Notifications } from '@mui/icons-material';

function ProfileDashboard() {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      {/* Sidebar */}
      <Box sx={{ width: 250, bgcolor: '#2196f3', color: 'white', p: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Avatar src="/path/to/avatar.jpg" alt="User" />
          <Typography variant="h6" sx={{ ml: 2 }}>Mel Anthony Rusiana</Typography>
        </Box>
        <List>
          <ListItem button>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Chats" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Orders" />
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
          </Toolbar>
        </AppBar>

        {/* Profile Header */}
        <Paper sx={{ mb: 3, p: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
            <Box sx={{ width: '100%', height: 150, bgcolor: '#000', borderRadius: 1, mb: 8 }}></Box>
            <Avatar src="https://www.google.com/imgres?q=landscape&imgurl=https%3A%2F%2Fcdn.prod.website-files.com%2F63a02e61e7ffb565c30bcfc7%2F65ea99845e53084280471b71_most%2520beautiful%2520landscapes%2520in%2520the%2520world.webp&imgrefurl=https%3A%2F%2Fwww.arkaenergy.com%2Flearn%2Fbeautiful-landscapes&docid=KzD_rF0Jf8f3UM&tbnid=yNAW-cLzpAq50M&vet=12ahUKEwjGsa7N_t-JAxV3mq8BHSe9KmwQM3oECFwQAA..i&w=2304&h=1248&hcb=2&ved=2ahUKEwjGsa7N_t-JAxV3mq8BHSe9KmwQM3oECFwQAA" sx={{ width: 100, height: 100, position: 'absolute', top: 100, left: 20, border: '3px solid white' }} />
            <Box sx={{ ml: 15 }}>
              <Typography variant="h5">Mel Anthony Rusiana</Typography>
              <Button variant="outlined" sx={{ mt: 1 }}>Edit Profile</Button>
            </Box>
            <Button variant="contained" startIcon={<Message />} sx={{ ml: 'auto' }}>Message me</Button>
          </Box>
        </Paper>

        {/* About Me and Portfolio */}
        <Paper sx={{ p: 2, display: 'flex', gap: 3 }}>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6">About Me</Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Hello there! You are welcome to minimalist business logo design gig.
              No logo, no business identity. I'm Alpa, running loftydesignshop studio on the CustMe platform with more than 5 years of experience.
              I help buyers to provide their business identity through their logo.
            </Typography>
          </Box>
          <Box sx={{ flex: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="h6">My Portfolio <Box component="span" sx={{ color: 'red', fontSize: '0.75rem', ml: 1 }}>NEW</Box></Typography>
              <Button variant="outlined" startIcon={<Create />}>Create Post</Button>
            </Box>
            <Box sx={{ display: 'flex', gap: 2, overflowX: 'auto' }}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN8hy2bKMrXY2-a2Cw2P8-j5M9PDgGdfVUrQ&s" style={{ width: '100%', maxWidth: '150px', borderRadius: 4 }} />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYEpF4wiQzQP4dEqF8xisjzJ8yWzzHUbE8sQ&s" style={{ width: '100%', maxWidth: '150px', borderRadius: 4 }} />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV530P4EmevxpD1RGmRKVBlZBy3D9xG06E8A&s" style={{ width: '100%', maxWidth: '150px', borderRadius: 4 }} />
            </Box>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}

export default ProfileDashboard;

