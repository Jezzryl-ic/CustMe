import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button, Avatar, Paper, List, ListItem, ListItemText, TextField, IconButton, Card, CardContent } from '@mui/material';
import { Search, Notifications } from '@mui/icons-material';

function Dashboard() {
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
      <Box sx={{ flexGrow: 1, p: 3, bgcolor: '#e3f2fd' }}>
        <AppBar position="static" color="default" sx={{ mb: 3 }}>
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Dashboard
            </Typography>
            <TextField
              variant="outlined"
              size="small"
              placeholder="Search..."
              sx={{ bgcolor: 'white', borderRadius: 1 }}
              InputProps={{
                endAdornment: (
                  <IconButton>
                    <Search />
                  </IconButton>
                ),
              }}
            />
            <IconButton color="inherit">
              <Notifications />
            </IconButton>
          </Toolbar>
        </AppBar>

        {/* Job Listings */}
        <Box>
          {["Nadiye Ainara", "Mairenn LaToya", "Epa Mireille"].map((name, index) => (
            <Card sx={{ mb: 3 }} key={index}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Avatar src={`/path/to/avatar${index + 1}.jpg`} sx={{ mr: 2 }} />
                  <Box>
                    <Typography variant="h6">{name}</Typography>
                    <Typography variant="caption" color="textSecondary">1m ago</Typography>
                  </Box>
                </Box>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  {index === 0 && "I need a custom logo design for my new business. Please contact me if you're interested in creating a unique and professional logo. Looking forward to collaborating!"}
                  {index === 1 && "Looking for a designer to create a unique wedding invitation. Please reach out if you have experience with elegant and personalized designs."}
                  {index === 2 && "I need a custom T-shirt design for our upcoming family reunion. Interested designers, please message me with your ideas and portfolio."}
                </Typography>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Button variant="contained" color="success">Apply</Button>
                  <Button variant="contained" color="error">I'm not Interested</Button>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard;