import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const sendEmail = async (userEmail, subject, message) => {
  try {
    const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: process.env.EMAIL_USER, // Reads from your .env
              pass: process.env.EMAIL_PASS  // Use the App Password here
            },
          });

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER, 
      to: userEmail, 
      subject: subject, 
      html: message,
    };

    
    await transporter.sendMail(mailOptions);

    // Return success response
    return NextResponse.json({
      message: 'Email sent successfully!',
    }, {
      status: 200,
    });
  } catch (error) {
    // Return error response
    return NextResponse.json({
      message: `Something went wrong: ${error.message}`,
    }, {
      status: 500,
    });
  }
};
