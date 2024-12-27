import db from '@/lib/db';
import Instructor from '@/models/instructor';
import { NextRequest, NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Connects to the Database
db();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { name, email, password } = reqBody;

        const user = await Instructor.findOne({ email });

        if (user) {
            return NextResponse.json({
                success: false,
                message: "User already exists!",
                status: 400
            });
        }

        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);
        const newUser = new Instructor({ name, email, password: hashedPassword });
        const savedUser = await newUser.save();

        // Generate JWT Token after New User is saved
        const token = jwt.sign({ userId: savedUser._id, email: savedUser.email, name: savedUser.name }, process.env.JWT_SECRET!, { expiresIn: '30d' });

        // Success case: Return success response with a message
        const response = NextResponse.json({
            success: true,
            message: "Instructor Created Successfully",
            token,
            status: 200,
            data: savedUser
        });


        response.cookies.set("token", token, {
            httpOnly: true,
            maxAge: 30 * 24 * 60 * 60,
        });

        return response;
    } catch (error: any) {
        console.log(error);
        return NextResponse.json({
            success: false,
            message: error.message,
            status: 500
        });
    }
}
