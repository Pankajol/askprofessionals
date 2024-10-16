import { connect } from '../../../dbConfig/dbConfig';
import User from '../../../models/userModel';

import { NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs';

connect();

export async function POST(request) {
    try {
        const reqBody = await request.json();  // Parse the JSON data from the request
        const { email, password } = reqBody;

        console.log('Request Body:', reqBody);

        // Validate if email and password are provided
        if (!email || !password) {
            return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
        }

        // Find the user by email
        const user = await User.findOne({ email });

        // If the user does not exist, return an error
        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 400 });
        }

        // Check if the password matches the hashed password stored in the database
        const isPasswordValid = await bcryptjs.compare(password, user.password);

        // If the password is invalid, return an error
        if (!isPasswordValid) {
            return NextResponse.json({ error: "Invalid password" }, { status: 400 });
        }

        // If authentication is successful, return user data (you can also generate a JWT here if needed)
        console.log('User authenticated:', user);
        
        // For security reasons, don’t return the password in the response
        const { password: _, ...userWithoutPassword } = user._doc; // Extract and omit password

        return NextResponse.json({ message: "SignIn successful", user: userWithoutPassword });

    } catch (error) {
        console.error('Error:', error.message);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}