import React from 'react';
import { AppBar, Toolbar, Typography, Box, TextField, Button, IconButton, Card, CardContent, Avatar, List, ListItem, ListItemText } from '@mui/material';
import { Search, Edit, Delete } from '@mui/icons-material';

function Dashboard() {
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
            <ListItemText primary="Printing Shop" />
          </ListItem>
        </List>
        <Button variant="contained" color="secondary" sx={{ mt: 2 }}>Logout</Button>
      </Box>

      {/* Main Content */}
      <Box sx={{ flexGrow: 1, p: 3, bgcolor: '#f5f5f5' }}>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Dashboard
            </Typography>
            <IconButton color="inherit">
              <Search />
            </IconButton>
          </Toolbar>
        </AppBar>
        
        <Box sx={{ my: 2 }}>
          <TextField
            fullWidth
            placeholder="What design is in your mind?"
            variant="outlined"
            sx={{ bgcolor: 'white', borderRadius: 1 }}
          />
          <Button variant="outlined" sx={{ mt: 1 }}>Import Image</Button>
        </Box>

        {/* Example Cards */}
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <Card sx={{ width: 300 }}>
            <CardContent>
              <Avatar src="/path/to/avatar1.jpg" />
              <Typography variant="body1">Ad by Veronica White</Typography>
              <Typography variant="body2">Logo, LLC</Typography>
              <Button variant="contained" sx={{ mt: 1 }}>Chat Me</Button>
            </CardContent>
          </Card>
          <Card sx={{ width: 300 }}>
            <CardContent>
              <Avatar src="/path/to/avatar2.jpg" />
              <Typography variant="body1">Ad by Ivan Camus</Typography>
              <Typography variant="body2">Marigondon, LLC</Typography>
              <Button variant="contained" sx={{ mt: 1 }}>Visit</Button>
            </CardContent>
          </Card>
        </Box>

        {/* Posts Section */}
        <Box sx={{ mt: 3 }}>
          <Typography variant="h6">Your Post</Typography>
          <List>
            <ListItem>
              <ListItemText primary="Looking for a designer to create custom artwork..." />
              <IconButton color="primary"><Edit /></IconButton>
              <IconButton color="secondary"><Delete /></IconButton>
            </ListItem>
            <ListItem>
              <ListItemText primary="Need a custom t-shirt design..." />
              <IconButton color="primary"><Edit /></IconButton>
              <IconButton color="secondary"><Delete /></IconButton>
            </ListItem>
          </List>
        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard;
        
