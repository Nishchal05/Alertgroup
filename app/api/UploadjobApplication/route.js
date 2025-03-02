const JobApplication = require("@/app/models/JobApplication");
const { NextResponse } = require("next/server");
const nodemailer = require("nodemailer");
async function POST(req) {
    try {
        // Parse incoming request data
        const { firstName, lastName, email, phone, position, message, resumeFile } = await req.json();
        if(!firstName||!lastName||!email||!phone||!position||!message||!resumeFile){
            return NextResponse.json({
                message:'Provide All Details'
            })
        }
        // Create new job application instance
        const data = await JobApplication.create({
            firstName,
            lastName,
            email,
            phone,
            position,
            message,
            resumeFile
        });

        // If the data is saved successfully, return a success response
        if (data) {
            await sendEmail(data);
            return NextResponse.json({
                message: 'Submission Successful',
                data // Optionally return the saved data
            });
        }
    } catch (error) {
        console.error("Error submitting job application:", error);

        // Return an error response if something goes wrong
        return NextResponse.json(
            {
                error: 'Failed to submit the job application. Please try again later.'
            },
            { status: 500 } // Internal Server Error
        );
    }
    async function sendEmail(data) {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: process.env.EMAIL_USER, // Reads from your .env
              pass: process.env.EMAIL_PASS  // Use the App Password here
            },
          });
          
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,   
        subject: 'Job Application',
        text: `Job Application:
          Name: ${data.firstName} ${data.lastName}
          Email: ${data.email}
          Phone: ${data.phone}
          positon: ${data.position}
          message: ${data.message}
          resumeFile:${data.resumeFile}`
      };
      
      await transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log('Error while sending email: ', error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
    }
}

module.exports = { POST };
