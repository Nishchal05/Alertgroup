export const VerificationemailTemplate = (verificationLink) => {
    return `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #dddddd; border-radius: 10px; background-color: #f9f9f9;">
        <header style="text-align: center; margin-bottom: 30px;">
          <img src="https://your-logo-url.com/logo.png" alt="Your Company Logo" style="width: 100px;"/>
          <h2 style="color: #333333;">Welcome to [Your Company Name]</h2>
        </header>
  
        <section>
          <h3 style="color: #333333;">Verify Your Email Address</h3>
          <p style="font-size: 16px; color: #555555;">
            Hello, <br/>
            Thank you for signing up at [Your Company Name]! To complete your registration, please verify your email address by clicking the button below:
          </p>
          
          <div style="text-align: center; margin: 20px 0;">
            <a href="${verificationLink}" style="text-decoration: none; background-color: #4CAF50; color: white; padding: 10px 20px; font-size: 16px; border-radius: 5px;">
              Verify Email
            </a>
          </div>
  
          <p style="font-size: 14px; color: #777777;">
            If the button above doesn't work, copy and paste the following link into your browser:
          </p>
          <p style="word-break: break-all; color: #4CAF50;">${verificationLink}</p>
        </section>
  
        <footer style="margin-top: 30px; text-align: center; font-size: 12px; color: #999999;">
          <p>&copy; ${new Date().getFullYear()} [Your Company Name]. All rights reserved.</p>
          <p>[Your Company Address]</p>
        </footer>
      </div>
    `;
  };
  