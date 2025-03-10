import Job from "@/app/models/Jonschema";
import DBConnect from "@/lib/Database";

const JobApplication = require("@/app/models/JobApplication");
const { NextResponse } = require("next/server");
const nodemailer = require("nodemailer");

export async function POST(req) {
    await DBConnect
    try {
        const { firstName, lastName, email, phone, position, message, resumeFile } = await req.json();
        if (!firstName || !lastName || !email || !phone || !position || !message || !resumeFile) {
            return NextResponse.json({
                message: 'Provide All Details'
            }, { status: 400 });
        }
        const newApplication = new JobApplication({
            firstName,
            lastName,
            email,
            phone,
            position,
            message,
            resumeFile
        });

        // Save the job application data
        const data = await newApplication.save();
        
        if (data) {
            await sendEmail(data); // Send email notification after saving the data
            return NextResponse.json({
                message: 'Submission Successful',
                data // Optionally return the saved data
            }, { status: 200 }); // Send 200 status for success
        }

    } catch (error) {
        console.error("Error submitting job application:", error);

        // Return an error response if something goes wrong
        return NextResponse.json({
            error: 'Failed to submit the job application. Please try again later.'
        }, { status: 500 }); // Internal Server Error
    }
}

// Helper function to send email using nodemailer
async function sendEmail(data) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,  // Send the email to yourself
        subject: 'New Job Application Submission',
        text: `Job Application:
          Name: ${data.firstName} ${data.lastName}
          Email: ${data.email}
          Phone: ${data.phone}
          Position: ${data.position}
          Message: ${data.message}
          Resume: ${data.resumeFile}`
    };

    // Send the email
    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
    } catch (error) {
        console.log('Error while sending email: ', error);
    }
}


export async function GET(req,res) {
    await DBConnect();
    try {
        const services = await Job.find();
        return NextResponse.json({ services }, { status: 200 });
      } catch (error) {
        return NextResponse.json({ message: "Failed to fetch security services", error });
      }
    
}