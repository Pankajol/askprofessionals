import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export function middleware(req) {
    const token = req.cookies.get('token') || req.headers.get('Authorization').split(' ')[1];

    if (!token) {
        return NextResponse.redirect(new URL('/admin/sign-in', req.url));
    }

    try {
        // Verify the token
        jwt.verify(token, process.env.JWT_SECRET);
        return NextResponse.next();
    } catch (error) {
        return NextResponse.redirect(new URL('/admin/sign-in', req.url));
    }
}

// Protect dashboard route
export const config = {
    matcher: ['/dashboard'],
};
