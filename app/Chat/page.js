import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button, Avatar, List, ListItem, ListItemText, IconButton, TextField, Paper } from '@mui/material';
import { Send } from '@mui/icons-material';

function ChatDashboard() {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      {/* Sidebar */}
      <Box sx={{ width: 250, bgcolor: '#2196f3', color: 'white', p: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Avatar src="/path/to/avatar.jpg" alt="User" />
          <Typography variant="h6" sx={{ ml: 2 }}>Charles Lee</Typography>
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
        </List>
        <Button variant="contained" color="secondary" sx={{ mt: 2 }}>Logout</Button>
      </Box>

      {/* Main Content */}
      <Box sx={{ flexGrow: 1, p: 3, bgcolor: '#f5f5f5' }}>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Chats
            </Typography>
          </Toolbar>
        </AppBar>

        <Box sx={{ display: 'flex', mt: 3 }}>
          {/* Message List */}
          <Paper sx={{ width: 300, mr: 2, p: 2 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>Messages</Typography>
            <List>
              <ListItem button>
                <Avatar src="/path/to/avatar1.jpg" />
                <ListItemText primary="Ivan Camus" secondary="You're looking for something..." />
                <Typography variant="caption" sx={{ ml: 'auto' }}>4:30 PM</Typography>
              </ListItem>
              <ListItem button selected>
                <Avatar src="/path/to/avatar2.jpg" />
                <ListItemText primary="Mel Russiana" secondary="Mel: I'm looking for something..." />
                <Typography variant="caption" sx={{ ml: 'auto' }}>10:30 PM</Typography>
              </ListItem>
            </List>
          </Paper>

          {/* Chat Window */}
          <Box sx={{ flexGrow: 1 }}>
            <Paper sx={{ p: 2, mb: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar src="/path/to/avatar2.jpg" sx={{ mr: 2 }} />
                <Typography variant="h6">Mel Russiana</Typography>
              </Box>
            </Paper>

            <Paper sx={{ p: 2, mb: 2, minHeight: 300 }}>
              <Box sx={{ mb: 2 }}>
                <Typography variant="body2" sx={{ color: 'gray' }}>Mel</Typography>
                <Typography variant="body1" sx={{ bgcolor: '#e0e0e0', p: 1, borderRadius: 1 }}>
                  Hi! Sure, I'd love to. What kind of design are you thinking of?
                </Typography>
              </Box>
              <Box sx={{ mb: 2, display: 'flex', justifyContent: 'flex-end' }}>
                <Typography variant="body2" sx={{ color: 'gray' }}>Charles</Typography>
                <Typography variant="body1" sx={{ bgcolor: '#bbdefb', p: 1, borderRadius: 1 }}>
                  I'm looking for something with a floral pattern and a motivational quote.
                </Typography>
              </Box>
              <Box sx={{ mb: 2 }}>
                <Typography variant="body2" sx={{ color: 'gray' }}>Mel</Typography>
                <img src="/path/to/design.jpg" alt="Design" style={{ maxWidth: '100%', borderRadius: 4 }} />
              </Box>
            </Paper>

            {/* Message Input */}
            <Paper sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
              <TextField
                fullWidth
                placeholder="Send message"
                variant="outlined"
                sx={{ mr: 2 }}
              />
              <IconButton color="primary">
                <Send />
              </IconButton>
            </Paper>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ChatDashboard;