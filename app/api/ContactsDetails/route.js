const { default: Counselling } = require("@/app/models/CounsellingData");
const { default: DBConnect } = require("@/lib/Database");
const { NextResponse } = require("next/server");
const nodemailer = require("nodemailer");

async function POST(req) {
    DBConnect()
  try {
    const res = await req.json();
    const { firstName, lastName, email, phone, company, additionalInfo, duration, assistance, city, state, canadaProvinces, UserId} = res;
    console.log(firstName, lastName, email, phone, company, additionalInfo, duration, assistance, city, state, canadaProvinces,UserId)
    if (!firstName || !lastName || !email || !phone || !company || !additionalInfo || !duration || !assistance || !city || !state || !canadaProvinces) {
        return NextResponse.json({
            message: 'All required fields must be provided'
        });
    }

    // Create the Counselling entry
    const contact = new Counselling({
        firstName,
        lastName,
        email,
        phone,
        company,
        additionalInfo,
        duration,
        assistance,
        city,
        state,
        canadaProvinces,
        UserId
    });
    const data= await contact.save();
    if (data) {
      await sendEmail(res);

      return NextResponse.json({
        message: 'Contact Data Saved and Email Sent'
      });
    }
  } catch (error) {
    console.error("Error saving data or sending email: ", error);
    return NextResponse.json({ message: 'Error occurred', error });
  }
}async function sendEmail(userData) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // Reads from your .env file
      pass: process.env.EMAIL_PASS  // Use the App Password here
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER, // Reference your env variable correctly
    to: process.env.EMAIL_USER,   // Use your recipient's email address
    subject: 'New Contact Form Submission',
    text: `You have a new form submission:
      Name: ${userData.firstName} ${userData.lastName}
      Email: ${userData.email}
      Phone: ${userData.phone}
      Company: ${userData.company}
      Canada Provinces: ${userData.canadaProvinces}
      State: ${userData.state}
      City: ${userData.city}
      Assistance: ${userData.assistance}
      Duration: ${userData.duration}
      Additional Info: ${userData.additionalInfo}`
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
  } catch (error) {
    console.log('Error while sending email: ', error);
  }
}

module.exports = { POST };
