import React from 'react';
import { Box, Card, CardContent, Typography, Avatar, Grid, Container } from '@mui/material';

function TeamMember({ name, role, description, image }) {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '2rem',
          backgroundColor: '#f5f5f5',
          borderRadius: '1rem',
          boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.15)',
          transition: 'transform 0.3s',
          '&:hover': {
            transform: 'translateY(-0.5rem)',
          },
        }}
      >
        <Avatar
          src={image}
          alt={name}
          sx={{
            width: '6rem',
            height: '6rem',
            marginBottom: '1rem',
            border: '4px solid #1976d2',
          }}
        />
        <Typography variant="h6" sx={{ marginBottom: '0.5rem', color: '#1976d2' }}>
          {name}
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: '1rem', color: '#616161' }}>
          {role}
        </Typography>
        <Typography variant="body2" sx={{ color: '#424242' }}>
          {description}
        </Typography>
      </Card>
    </Grid>
  );
}

function MeetOurTeam() {
  const teamMembers = [
    {
      name: 'Mel Anthony',
      role: 'Designer',
      description:
        'Responsible for creating visually appealing designs for our clients.',
      image: '/path/to/alex-smith.jpg',
    },
    {
      name: 'Kyle Dave',
      role: 'Designer',
      description:
        'Specializes in user interface design and ensuring a seamless user experience.',
      image: '/path/to/may-brown.jpg',
    },
    {
      name: 'John Andre',
      role: 'Designer',
      description:
        'Responsible for assisting and maintaining the clients desired designs.',
      image: '/path/to/ann-richmond.jpg',
    },
    {
      name: 'Charles Lee',
      role: 'Printing Provider',
      description:
        'Handles all our printing needs and ensures high-quality, on-time deliveries.',
      image: '/path/to/roxie-swanson.jpg',
    },
    {
      name: 'Ivan Jezzryl',
      role: 'Web Developer',
      description:
        'Crafts efficient and user-friendly web applications for our clients.',
      image: '/path/to/john-doe.jpg',
    },
  ];

  return (
    <Box sx={{ padding: '4rem 0', backgroundColor: '#f5f5f5' }}>
      <Container maxWidth="lg">
        <Typography variant="h4" sx={{ marginBottom: '2rem', color: '#1976d2', textAlign: 'center' }}>
          Meet Our Team
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              role={member.role}
              description={member.description}
              image={member.image}
            />
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default MeetOurTeam;