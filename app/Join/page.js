import React from 'react';
import {Container,Typography,Grid,Card,CardContent,Box} from '@mui/material';
import PaletteIcon from '@mui/icons-material/Palette';
import PrintIcon from '@mui/icons-material/Print';

const Join = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh', 
        backgroundColor: 'white'
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          textAlign: 'center',
          padding: 4,
          borderRadius: 2,
          boxShadow: 3,
          backgroundColor: '#00aaff' 
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          sx={{ color: '#f8e71c', marginBottom: 2 }}
        >
          CustMe
        </Typography>
        <Typography
          variant="h5"
          sx={{ marginBottom: 4, color: 'white' }}
        >
          Join our community
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Card sx={{ backgroundColor: 'white', borderRadius: 2 }}>
              <CardContent sx={{ textAlign: 'center' }}>
                <PaletteIcon sx={{ fontSize: 50 }} />
                <Typography variant="body1">I AM DESIGNER</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card sx={{ backgroundColor: 'white', borderRadius: 2 }}>
              <CardContent sx={{ textAlign: 'center' }}>
                <PrintIcon sx={{ fontSize: 50 }} />
                <Typography variant="body1">I AM PRINTING PROVIDER</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Join;