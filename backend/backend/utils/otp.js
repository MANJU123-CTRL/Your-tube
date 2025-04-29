
        const nodemailer = require('nodemailer');
        const twilio = require('twilio');
        
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD
          }
        });

        const sendEmailOTP = async (email) => {
          const otp = Math.floor(100000 + Math.random() * 900000);
          const mailOptions = {
            from: process.env.EMAIL,
            to: email,
            subject: 'Your OTP Code',
            text: `Your OTP code is: ${otp}`
          };
          
          await transporter.sendMail(mailOptions);
        };

        const sendSMSOTP = async (phone) => {
          const otp = Math.floor(100000 + Math.random() * 900000);
          const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);
          await client.messages.create({
            body: `Your OTP code is: ${otp}`,
            from: process.env.TWILIO_PHONE,
            to: phone
          });
        };

        module.exports = { sendEmailOTP, sendSMSOTP };
    