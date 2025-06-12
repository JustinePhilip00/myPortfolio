import { useState } from 'react';
import { Box, Typography, List, ListItem, ListItemText, Collapse, IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const experiences = [
  {
    title: 'Front-End Developer - React',
    company: 'Vosyn Inc.',
    location: 'Toronto, Canada',
    period: 'October 2024 - March 2025',
    details: [
      'Developed and tested responsive front-end components using React, ensuring functionality across devices.',
      'Performed unit testing with Jest, identifying and documenting edge case bugs and UI inconsistencies.',
      'Worked closely with UI/UX designers and product managers to validate interface behavior against requirements.',
      'Optimized web app performance, increasing responsiveness and reducing latency by 15%.',
      'Assisted in the integration of backend APIs and ensuring communication between frontend and backend systems.',
      'Participated in documentation, code reviews and contributed to a scalable front-end architecture supporting platform growth in an AI startup environment.'
    ]
  },
  {
    title: 'IT Assistant - Technical Support',
    company: 'York University',
    location: 'Toronto, Canada',
    period: 'May 2023 - May 2024',
    details: [
      'Resolved technical and software issues across departments, reducing average resolution time by 30%.',
      'Conducted routine system monitoring and documented incident reports for trend analysis and improvement.'
    ]
  }
];

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleExpandClick = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <Box sx={{
      bgcolor: '#f5f1e9',
      color: '#4a3f35',
      p: 4,
      borderRadius: 3,
      width: '100%',
      // maxWidth: 'auto',
      margin: '40px auto',
      fontFamily: "'Courier New', Courier, monospace",
      boxShadow: '4px 4px 0 #c9b99a',
    }}>
      <Typography variant="h4" sx={{
        mb: 3,
        textAlign: 'center',
        letterSpacing: '0.15em',
        fontWeight: 'bold',
        fontFamily: "'Press Start 2P', cursive",
        color: '#4a3f35',
        textShadow: '1px 1px 0 #c9b99a',
      }}>
        Experience
      </Typography>
      {experiences.map((exp, index) => (
        <Box key={index} sx={{ mb: 4 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#5a4a2a' }}>
              {exp.title}
            </Typography>
            <IconButton
              onClick={() => handleExpandClick(index)}
              aria-expanded={expandedIndex === index}
              aria-label="show more"
              sx={{ color: '#5a4a2a' }}
            >
              <ExpandMoreIcon
                sx={{
                  transform: expandedIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease',
                  marginRight: 3
                }}
              />
            </IconButton>
          </Box>
          <Typography variant="subtitle1" sx={{ fontStyle: 'italic', color: '#7a6a4a' }}>
            {exp.company} - {exp.location}
          </Typography>
          <Typography variant="caption" sx={{ fontStyle: 'italic', color: '#7a6a4a', display: 'block', mb: 1 }}>
            {exp.period}
          </Typography>
          <Collapse in={expandedIndex === index} timeout="auto" unmountOnExit>
            <List dense sx={{ pl: 2, color: '#5a4a2a' }}>
              {exp.details.map((detail, i) => (
                <ListItem key={i} sx={{ pl: 0 }}>
                  <ListItemText primary={`• ${detail}`} />
                </ListItem>
              ))}
            </List>
          </Collapse>
        </Box>
      ))}
    </Box>
  );
};

export default Experience;
