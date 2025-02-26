import { NextResponse } from 'next/server';
import dbConnect from '@/lib/Database'; // Import your DB connection logic
import UserModel from '@/app/models/User';   // Import your User model

export async function POST(req) {
  try {
    // Parse request body to extract token and id
    const { token, id } = await req.json();

    // Connect to the database
    await dbConnect();

    // Find the user by id and token (assuming the token is stored in the DB)
    const user = await UserModel.findOne({ _id: id, 
        verificationToken: token });

    if (!user) {
      // User not found or invalid token
      return NextResponse.json({
        message: 'Invalid token or user not found.',
      }, {
        status: 404,
      });
    }

    // Check if the email is already verified
    if (user.isEmailVerified) {
      return NextResponse.json({
        message: 'Email is already verified.',
      }, {
        status: 200,
      });
    }

    
    user.isVerified = true;
    user.emailVerificationToken = null;
    await user.save();

    return NextResponse.json({
      message: 'Email verified successfully!',
    }, {
      status: 200,
    });
  } catch (error) {
    // Handle errors
    console.error('Error verifying email:', error);
    return NextResponse.json({
      message: `Error verifying email: ${error.message}`,
    }, {
      status: 500,
    });
  }
}
