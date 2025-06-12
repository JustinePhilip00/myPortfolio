import { Box, IconButton, Tooltip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const SocialLinks = () => {
  return (
    <Box sx={{
      position: 'fixed',
      top: '50%',
      right: 0,
      transform: 'translateY(-50%)',
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      bgcolor: 'transparent',
      zIndex: 1400,
      p: 1,
    }}>
      <Tooltip title="GitHub" arrow>
        <IconButton
          component="a"
          href="https://github.com/JustinePhilip00"
          target="_blank"
          sx={{
            color: '#61dafb',
            border: '1.5px solid #61dafb',
            '&:hover': {
              backgroundColor: '#61dafb',
              color: '#f0f0f0',
              boxShadow: 'none',
              transform: 'scale(1.1)',
            },
            transition: 'all 0.3s ease',
          }}
        >
          <GitHubIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="LinkedIn" arrow>
        <IconButton
          component="a"
          href="https://www.linkedin.com/in/justine-philip-b327891b2/"
          target="_blank"
          sx={{
            color: '#61dafb',
            border: '1.5px solid #61dafb',
            '&:hover': {
              backgroundColor: '#61dafb',
              color: '#f0f0f0',
              boxShadow: 'none',
              transform: 'scale(1.1)',
            },
            transition: 'all 0.3s ease',
          }}
        >
          <LinkedInIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default SocialLinks;
