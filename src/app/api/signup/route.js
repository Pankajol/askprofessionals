import { connect } from '../../../dbConfig/dbConfig';
import User from '../../../models/userModel';

import { NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs';

connect();

export async function POST(request) {
    try {
        const reqBody = await request.json();  // Await the JSON data from the request
        const { username, email, password } = reqBody;

        console.log('Request Body:', reqBody);

        // Check if any required fields are missing
        if (!username || !email || !password) {
            return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
        }

        // Check if the user already exists
        const user = await User.findOne({ email });
        if (user) {
            return NextResponse.json({ error: "User already exists" }, { status: 400 });
        }

        // Hash the password
        const salt = await bcryptjs.genSalt(10);
        if (!salt) {
            throw new Error("Salt generation failed");
        }

        console.log('Salt:', salt);

        const hashedPassword = await bcryptjs.hash(password, salt);
        if (!hashedPassword) {
            throw new Error("Password hashing failed");
        }

        console.log('Hashed Password:', hashedPassword);

        // Create a new user
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        });

        const savedUser = await newUser.save();

        console.log('Saved User:', savedUser);

        // Return success response
        return NextResponse.json({ message: "User created successfully", user: savedUser });

    } catch (error) {
        console.error('Error:', error.message);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}