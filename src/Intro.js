import React from 'react';
import { Grid, Typography, Button, Box, Container } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Intro = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Grid container spacing={4} alignItems="center" display="flex" flexDirection="column" justifyContent="center">
        
        {/* Left Side */}
        <Grid item xs={12} md={6}>
          <Typography variant="h3" gutterBottom>
            Hey, I'm Justine 👋
          </Typography>
          <Typography variant="body1" color="text.secondary">
            I'm a Computer Engineer with a passion for building innovative solutions in web development, IoT, and software systems.
          </Typography>
        </Grid>

        {/* Right Side */}
        <Grid item xs={12} md={6}>
          <Box display="flex" flexDirection="column" gap={2}>
            <Box display="flex" gap={2}>
              <Button
                variant="outlined"
                startIcon={<GitHubIcon />}
                href="https://github.com/yourusername"
                target="_blank"
              >
                GitHub
              </Button>
              <Button
                variant="outlined"
                startIcon={<LinkedInIcon />}
                href="https://linkedin.com/in/yourusername"
                target="_blank"
              >
                LinkedIn
              </Button>
            </Box>
            <Box>
              <Typography variant="subtitle1" fontWeight="bold">
                Tools & Languages:
              </Typography>
              <Typography variant="body2" color="text.secondary">
                React, Node.js, Python, Java, Firebase, MongoDB, SQL, Docker
              </Typography>
            </Box>
          </Box>
        </Grid>

      </Grid>
    </Container>
  );
};

export default Intro;
