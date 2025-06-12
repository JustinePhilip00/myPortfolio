import { Box, Typography } from '@mui/material';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Header = () => {
  const [text] = useTypewriter({
    words: ['Hi, I\'m Justine Philip'],
    loop: 0, // infinite
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });

  return (
    <Box sx={{
      bgcolor: '#fffdd0',
      color: 'black',
      p: 4,
      width: '100%',
      fontFamily: "'Courier New', Courier, monospace",
      textAlign: 'center',
      boxShadow: 'none',
      borderRadius: 3,
    }}>
      <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 1, letterSpacing: '0.1em', minHeight: '3rem' }}>
        {text}
        <Cursor cursorStyle="|" />
      </Typography>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Computer Engineer | York University
      </Typography>
      {/* <Typography variant="body1" sx={{ mb: 3, maxWidth: 600, margin: '0 auto' }}>
        I design and develop scalable web, IoT, and software systems. Passionate about code that speaks.
      </Typography> */}
    </Box>
  );
};

export default Header;
