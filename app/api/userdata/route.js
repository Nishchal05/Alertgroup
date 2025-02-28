import { NextResponse } from "next/server";
import UserModel from "@/app/models/User";

export async function GET(req) {
    try {
        // Extract the query parameters from the URL
        const { searchParams } = new URL(req.url);
        const email = searchParams.get('email');  // Get the email from the query string

        if (!email) {
            return NextResponse.json({ message: "Email is required" }, { status: 400 });
        }

        // Find the user by email in the database
        const data = await UserModel.findOne({ email });

        if (data) {
            return NextResponse.json({ data }, { status: 200 });
        } else {
            return NextResponse.json({ message: 'User Not Found' }, { status: 404 });
        }
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Server error" }, { status: 500 });
    }
}
