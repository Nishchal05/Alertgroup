import SecurityService from "@/app/models/SecurityServices";
import DBConnect from "@/lib/Database";
import { NextResponse } from "next/server";

export async function GET(req,res) {
    await DBConnect();
    try {
        const services = await SecurityService.find();
        return NextResponse.json({ services }, { status: 200 });
      } catch (error) {
        return NextResponse.json({ message: "Failed to fetch security services", error });
      }
    
}