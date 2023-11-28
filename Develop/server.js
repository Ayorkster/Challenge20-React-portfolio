const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
const port = 3001;

app.use(express.json());

app.post('/submit-form', (req, res) => {
  const { name, email, message } = req.body;

  // Validate and sanitize data (implement your own validation logic)

  // Send email
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'cicconeworldwide@gmail.com', // Replace with your Gmail email address
      pass: 'your-app-password', // Replace with the App Password generated for Mail/Other
    },
  });
  
  const mailOptions = {
    from: 'cicconeworldwide@gmail.com', // Replace with your Gmail email address
    to: formData.email, // Use the email provided by the user
    subject: 'New Form Submission',
    text: `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
  };
  

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Form submitted successfully');
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});