import { useState } from 'react';
import { Box, Typography, Grid, Paper, Collapse, Link } from '@mui/material';

const projects = [
  {
    title: 'YelpCamp',
    description: 'A responsive full-stack web application for discovering and reviewing campgrounds, featuring secure user authentication, image uploads, and dynamic map integration.',
    tech: 'Node.js, Express, MongoDB, Cloudinary, Passport.js, Mapbox, BootStrap, CSS, HTML',
    details: 'Designed and built a Node.js and Express backend with MongoDB for data storage. Integrated Passport.js for user authentication, Cloudinary for image hosting, and Mapbox for real-time map rendering. Enabled CRUD operations for campground listings with an intuitive UI using Bootstrap.',
    link: 'https://github.com/JustinePhilip00/yelpCamp',
    webpage: 'https://yelpcamp-jdm9.onrender.com/'
  },
  {
    title: 'NLP App Review Analyzer',
    description: 'A data-driven Python poject that extracts insights from app reviews through natural language processing techniques.',
    tech: 'Python, BeautifulSoup, NLTK, pandas',
    details: 'With the help of a web scraper using BeautifulSoup and automated data preprocessing with pandas. Applied sentiment analysis and LDA topic modeling using NLTK to identify user sentiment trends and recurring themes across thousands of app reviews. Presented findings via Jupyter Notebook visualizations.',
    link: 'https://github.com/JustinePhilip00/App-Review-Analysis-and-Insights'
  },
  {
    title: 'IoT Enabled Smart Home Automation-System',
    description: 'A scalable, Firebase-backed IoT system enabling smart device automation, real-time control, and predictive behavior learning through a mobile interface.',
    tech: 'React Native, Google Firebase, Node.js, LSTM, Arduino, IoT devices',
    details: 'Developed a React Native mobile app integrated with Google Firebase for real-time updates and device synchronization. Used LSTM models in Node.js to learn device usage patterns and automate actions. Connected and controlled smart devices using Arduino, enhancing user convenience and energy efficiency.',
    link: 'https://github.com/JustinePhilip00/Capstone-IoT-Enabled-Smart-Home-Automation-System'
  },
  {
    title: 'Obstacle Detection and Alert System for the Visually Impaired',
    description: 'A hardware prototype providing real-time obstacle alerts through haptic feedback, designed to aid navigation for visually impaired users.',
    tech: 'Arduino Due, ultrasonic sensors, vibration motors, Arduino IDE.',
    details: 'Built using Arduino Due, ultrasonic sensors, and vibration motors to detect and signal nearby obstacles. Programmed in Arduino IDE for responsive, low-latency feedback. Improved user safety by providing directional alerts in unfamiliar environments.',
    link: 'https://github.com/JustinePhilip00/Obstacle-Detection-and-Alert-System-for-the-Visually-Impaired'
  }
];

const Projects = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleExpandClick = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <Box sx={{
      bgcolor: '#f0e6d2',
      color: '#3e2f1c',
      p: 4,
      width: '100%',
      borderRadius: 3,
      fontFamily: "'Courier New', Courier, monospace",
      backgroundImage: 'repeating-linear-gradient(45deg, #e0d4b7 0, #e0d4b7 10px, #f0e6d2 10px, #f0e6d2 20px)',
    }}>
      <Typography variant="h4" sx={{
        mb: 3,
        textAlign: 'center',
        letterSpacing: '0.15em',
        color: '#3e2f1c',
        fontWeight: 'bold',
        textShadow: '1px 1px 0 #b8a56e',
        fontFamily: "'Press Start 2P', cursive",
      }}>
        Projects
      </Typography>
      <Grid container spacing={4} justifyContent="center" direction="column">
        {projects.map((project, index) => (
          <Grid item xs={12} key={index}>
            <Paper
              elevation={6}
              sx={{
                bgcolor: '#e6d8b7',
                border: '3px solid #b8a56e',
                borderRadius: '12px',
                p: 3,
                width: '95%',
                boxShadow: '4px 4px 0 #b8a56e',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer',
                '&:hover': {
                  transform: 'translate(-4px, -4px)',
                  boxShadow: '8px 8px 0 #b8a56e',
                },
              }}
              onClick={() => handleExpandClick(index)}
            >
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="h6" sx={{
                mb: 1,
                fontWeight: 'bold',
                letterSpacing: '0.1em',
                color: '#3e2f1c',
                fontFamily: "'Press Start 2P', cursive",
              }}>
                {project.title}
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'space-between'}}> 
                <Link href={project.link} target="_blank" rel="noopener noreferrer"> GitHub</Link>
              
                {project.webpage && (
                  <Link href={project.webpage} target="_blank" rel="noopener noreferrer" sx={{ ml: 2 }}>
                    Webpage
                  </Link>
                )}
              </Box>
              
              
              </Box>
              <Typography variant="body2" sx={{ mb: 1, color: '#5a4a2a' }}>
                {project.description}
              </Typography>
              <Typography variant="caption" sx={{ fontStyle: 'italic', color: '#7a6a4a' }}>
                Tech: {project.tech}
              </Typography>
              <Collapse in={expandedIndex === index} timeout="auto" unmountOnExit>
                <Typography variant="body2" sx={{ mt: 2, color: '#5a4a2a' }}>
                  {project.details}
                </Typography>
              </Collapse>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
