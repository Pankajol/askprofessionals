'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

// import Link from 'next/link';

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [signedIn, setSignedIn] = useState(false);
    const router = useRouter();

   

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const res = await fetch('/api/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || 'Something went wrong');
            }

            // Set signedIn to true when sign-in is successful
            setSignedIn(true);
            router.push('/dashboard');

        } catch (error) {
            setError(error.message);
            console.error('SignIn Error:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-md p-5 mx-auto">
            <h1 className="text-2xl font-bold">Sign In</h1>
            {error && <p className="text-red-500">{error}</p>}
            <form onSubmit={handleSubmit} className="mt-4">
                <div className="mb-4">
                    <label className="block text-gray-700">Email</label>
                    <input
                        type="email"
                        className="w-full p-2 border border-gray-300 rounded"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Password</label>
                    <input
                        type="password"
                        className="w-full p-2 border border-gray-300 rounded"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {/* <Link href="/dashboard"> */}
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                    disabled={loading}
                >
                    {loading ? 'Signing In...' : 'Sign In'}
                </button>
                {/* </Link> */}
            </form>

            {/* {signedIn && (
                <div className="mt-4">
                    <p>Sign-in successful! Go to your dashboard:</p>
                    <Link href="/post-jobs">
                        <p className="text-blue-500 hover:underline">Dashboard</p>
                    </Link>
                </div>
            )} */}
        </div>
    );
}
