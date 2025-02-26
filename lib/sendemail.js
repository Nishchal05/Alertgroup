import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const sendEmail = async (userEmail, subject, message) => {
  try {
    console.log(userEmail,subject,message)
    // Create a transporter using nodemailer with your email provider details
    const transporter = nodemailer.createTransport({
     host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "abd0ab7ce3ddac",
    pass: "22397b0788b238"
  }
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
