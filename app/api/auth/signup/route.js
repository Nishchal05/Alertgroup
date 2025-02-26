import UserModel from "@/app/models/User";
import DBConnect from "@/lib/Database";
import { sendEmail } from "@/lib/sendemail";
import { VerificationemailTemplate } from "@/lib/VerificationemailTemplate";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    DBConnect();
    const { name, email, password } = await req.json();
    
    // Check for missing fields
    if (!name || !password || !email) {
      return NextResponse.json(
        { message: "Please provide all fields." },
        { status: 400 }
      );
    }
    
    // Check if user already exists
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists." },
        { status: 409 }
      );
    }

    // Create new user instance
    const newUser = new UserModel({ name, email, password });

    // Generate verification token and save it to the user instance
    const verificationToken = newUser.generateVerificationToken();

    // Email verification link
    const verificationLink = `${process.env.NEXT_PUBLIC_URL}/verify-email/${verificationToken}/${newUser?._id}`;
    const message=VerificationemailTemplate(verificationLink)

    // Send verification email
    await sendEmail(newUser?.email, "Email Verification", message);

    // Save the user only after successfully sending the email
    await newUser.save();

    return NextResponse.json(
      { message: "User created successfully. Please check your email for verification." },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { message: "Server error, please try again later." },
      { status: 500 }
    );
  }
};
