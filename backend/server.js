const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const emailjs = require('emailjs-com');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please fill in all fields.' });
  }

  // EmailJS is primarily a client-side library; for server-side email sending,
  // consider using nodemailer or other SMTP libraries.
  // Here, you can implement your email sending logic using nodemailer or other services.

  // For demonstration, we just return success.
  res.status(200).json({ message: 'Message received. Email sending logic to be implemented.' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
