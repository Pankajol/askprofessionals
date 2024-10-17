import { connect } from '../../../dbConfig/dbConfig';
import User from '../../../models/userModel';
import jwt from 'jsonwebtoken';
import bcryptjs from 'bcryptjs';
import { NextResponse } from 'next/server';

connect();

export async function POST(request) {
    try {
        const reqBody = await request.json(); 
        const { email, password } = reqBody;

        if (!email || !password) {
            return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
        }

        const user = await User.findOne({ email });

        if (!user) {
            return NextResponse.json({ error: 'User not found' }, { status: 400 });
        }

        const isPasswordValid = await bcryptjs.compare(password, user.password);

        if (!isPasswordValid) {
            return NextResponse.json({ error: 'Invalid password' }, { status: 400 });
        }

        // Generate JWT token
        const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, {
            expiresIn: '1h', // Token expires in 1 hour
        });

        const { password: _, ...userWithoutPassword } = user._doc;

        return NextResponse.json({ 
            message: 'SignIn successful', 
            user: userWithoutPassword, 
            token 
        });

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
