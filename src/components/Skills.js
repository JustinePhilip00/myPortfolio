import { Box, Typography, Grid, Paper } from '@mui/material';

const skills = [
  'React',
  'Node.js',
  'Python',
  'Java',
  'JavaScript',
  'MongoDB',
  'SQL',
  'Next.js',
  'Git',
  'Express.js',
];

const Skills = () => {
  return (
    <Box sx={{  color: '#4a90e2', p: 4, fontFamily: "'Courier New', Courier, monospace" }}>
      <Typography variant="h4" sx={{ mb: 3, textAlign: 'center', letterSpacing: '0.1em' }}>
        Languages & Tools
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {skills.map((skill, index) => (
          <Grid item key={index}>
            <Paper elevation={6} sx={{
              bgcolor: '#121212',
              border: '1.5px solid #4a90e2',
              px: 3,
              py: 1,
              borderRadius: 2,
              color: '#4a90e2',
              fontWeight: 'bold',
              letterSpacing: '0.05em',
              cursor: 'default',
              userSelect: 'none',
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: '#4a90e2',
                color: '#f0f0f0',
                boxShadow: 'none',
                transform: 'scale(1.1)',
              },
            }}>
              {skill}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
