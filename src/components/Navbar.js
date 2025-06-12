import { AppBar, Toolbar, Button } from '@mui/material';

const sections = [
  { id: 'header', label: 'Home' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const handleClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
<AppBar position="fixed" sx={{
      bgcolor: '#121212',
      boxShadow: 'none',
      fontFamily: "'Courier New', Courier, monospace",
      zIndex: 1300,
      height: '64px',
      justifyContent: 'center',
    }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'center', gap: 4, minHeight: '64px !important' }}>
        {sections.map((section) => (
          <Button
            key={section.id}
            onClick={() => handleClick(section.id)}
            sx={{
              color: '#4a90e2',
              fontWeight: 'bold',
              letterSpacing: '0.1em',
              '&:hover': {
                backgroundColor: '#4a90e2',
                color: '#f0f0f0',
                boxShadow: 'none',
                transform: 'scale(1.1)',
              },
              textTransform: 'none',
            }}
          >
            {section.label}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
