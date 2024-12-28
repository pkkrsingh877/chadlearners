import db from '@/lib/db';
import User from '@/models/user';
import { NextRequest, NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Connects to the Database
db();

// Functions for Route handling

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { email, password } = reqBody;

        // Find the user by email
        const user = await User.findOne({ email });

        if (user) {
            // Check if password matches
            const match = await bcryptjs.compare(password, user.password);

            if (match) {
                // Generate JWT Token after Instructor is found
                const token = jwt.sign({ userId: user._id, email: user.email, name: user.name }, process.env.JWT_SECRET!, { expiresIn: '30d' });

                // Success case: Return success response with a message
                const response = NextResponse.json({
                    success: true,
                    message: "Instructor Logged In",
                    token,
                    status: 200
                });

                response.cookies.set("token", token, {
                    httpOnly: true,
                    maxAge: 30 * 24 * 60 * 60,
                });

                return response;
            }
        }

        // Failure case: Return failure response if credentials don't match
        return NextResponse.json({
            success: false,
            message: "Invalid credentials",
            status: 400
        });
    } catch (error: any) {
        console.log(error);
        // Error case: Return error response with message
        return NextResponse.json({
            success: false,
            message: error.message,
            status: 500
        });
    }
}
