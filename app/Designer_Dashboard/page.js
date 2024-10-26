import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Avatar,
  List,
  ListItem,
  ListItemText,
  TextField,
  IconButton,
  Card,
  CardContent,
} from '@mui/material';
import { Search, Notifications } from '@mui/icons-material';

function Dashboard() {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: '#f9f9f9' }}>
      {/* Sidebar */}
      <Box
        sx={{
          width: 250,
          bgcolor: '#2196f3', // Original blue color
          color: 'white',
          p: 3,
          boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Avatar src="/path/to/avatar.jpg" alt="User" />
          <Typography variant="h6" sx={{ ml: 2 }}>
            Mel Anthony Rusiana
          </Typography>
        </Box>
        <List>
          {['Dashboard', 'Chats', 'Orders'].map((text) => (
            <ListItem button key={text} sx={{ '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.1)' } }}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Button variant="contained" color="error" sx={{ mt: 2, width: '100%' }}>
          Logout
        </Button>
      </Box>

      {/* Main Content */}
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <AppBar position="static" sx={{ bgcolor: '#ffffff', boxShadow: 'none', mb: 3 }}>
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Dashboard
            </Typography>
            <TextField
              variant="outlined"
              size="small"
              placeholder="Search..."
              sx={{ bgcolor: 'white', borderRadius: 1, width: '250px', '& .MuiOutlinedInput-root': { borderRadius: 1 } }}
              InputProps={{
                endAdornment: (
                  <IconButton>
                    <Search />
                  </IconButton>
                ),
              }}
            />
            <IconButton color="inherit" sx={{ ml: 2 }}>
              <Notifications />
            </IconButton>
          </Toolbar>
        </AppBar>

        {/* Job Listings */}
        <Box>
          {["Nadiye Ainara", "Mairenn LaToya", "Epa Mireille"].map((name, index) => (
            <Card
              sx={{
                mb: 2,
                borderRadius: 2,
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.2)',
                },
              }}
              key={index}
            >
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Avatar src={`/path/to/avatar${index + 1}.jpg`} sx={{ mr: 2 }} />
                  <Box>
                    <Typography variant="h6">{name}</Typography>
                    <Typography variant="caption" color="text.secondary">1m ago</Typography>
                  </Box>
                </Box>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  {index === 0 && "I need a custom logo design for my new business. Please contact me if you're interested in creating a unique and professional logo. Looking forward to collaborating!"}
                  {index === 1 && "Looking for a designer to create a unique wedding invitation. Please reach out if you have experience with elegant and personalized designs."}
                  {index === 2 && "I need a custom T-shirt design for our upcoming family reunion. Interested designers, please message me with your ideas and portfolio."}
                </Typography>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Button variant="contained" color="success" sx={{ flex: 1 }}>Apply</Button>
                  <Button variant="outlined" color="error" sx={{ flex: 1 }}>I'm not Interested</Button>
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