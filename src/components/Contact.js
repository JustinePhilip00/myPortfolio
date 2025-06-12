import { useState } from 'react';
import { Box, Typography, TextField, Button, Alert } from '@mui/material';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all fields.');
      return;
    }
    setError('');
    setLoading(true);

    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const userID = process.env.REACT_APP_EMAILJS_USER_ID;

    emailjs.send(serviceID, templateID, formData, userID)
      .then(() => {
        setSubmitted(true);
        setLoading(false);
      }, (err) => {
        setError('Failed to send message. Please try again later.');
        setLoading(false);
      });
  };

  return (
    <Box sx={{
      bgcolor: '#f0e6d2',
      color: '#3e2f1c',
      p: 4,
      fontFamily: "'Courier New', Courier, monospace",
      textAlign: 'center',
      mt: 6,
      borderRadius: 3,
      width: "100%",
      margin: '0 auto',
      boxShadow: '4px 4px 0 #b8a56e',
    }}>
      <Typography variant="h5" sx={{ mb: 3, letterSpacing: '0.1em', fontFamily: "'Press Start 2P', cursive", color: '#3e2f1c' }}>
        Get in Touch
      </Typography>
      {submitted ? (
        <Alert severity="success">Thank you for your message! I will get back to you soon.</Alert>
      ) : (
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="outlined"
            sx={{ backgroundColor: '#e6d8b7', borderRadius: 1 }}
            disabled={loading}
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="outlined"
            sx={{ backgroundColor: '#e6d8b7', borderRadius: 1 }}
            disabled={loading}
          />
          <TextField
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="outlined"
            multiline
            rows={4}
            sx={{ backgroundColor: '#e6d8b7', borderRadius: 1 }}
            disabled={loading}
          />
          {error && <Typography color="error" sx={{ mt: 1 }}>{error}</Typography>}
          <Button type="submit" variant="contained" sx={{ mt: 3, backgroundColor: '#b8a56e', fontFamily: "'Press Start 2P', cursive" }} disabled={loading}>
            {loading ? 'Sending...' : 'Send'}
          </Button>
        </form>
      )}
    </Box>
  );
};

export default Contact;
