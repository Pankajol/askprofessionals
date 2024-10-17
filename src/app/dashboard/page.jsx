

"use client";
import React, { useState, useEffect } from "react";
import JobPostForm from "../components/JobPostForm";
import JobList from "../components/JobList";
import JobApplicationList from "../components/JobApplicationList";
import { useRouter } from 'next/navigation'; // Used for redirecting
import {jwtDecode} from 'jwt-decode'; // To decode JWT tokens

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState("jobs"); // Default active tab is 'jobs'
    const [applications, setApplications] = useState([]);
    const [searchTitle, setSearchTitle] = useState("");
    const [searchCategory, setSearchCategory] = useState("");
    const [user, setUser] = useState(null); // To store user details
    const router = useRouter();

    // Check if user is authenticated by verifying the token
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            router.push('/sign-in'); // Redirect to sign-in if no token
        } else {
            try {
                const decodedToken = jwtDecode(token); // Decode token to get user info
                setUser(decodedToken); // Set user data
            } catch (error) {
                console.error('Invalid token', error);
                localStorage.removeItem('token');
                // router.push('/dashboard'); // Redirect if token is invalid
            }
        }
    }, []);

    // Fetch job applications (can use user info if necessary)
    const fetchApplications = async () => {
        try {
            const response = await fetch("/api/application");
            const data = await response.json();
            setApplications(data.applications);
        } catch (error) {
            console.error("Error fetching applications:", error);
        }
    };

    useEffect(() => {
        fetchApplications();
    }, []);

    // Handle tab change
    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    // Logout function to clear token and redirect to sign-in
    const handleLogout = () => {
        localStorage.removeItem('token');
        router.push('/sign-in');
    };

    return (
        <div className="min-h-screen flex flex-col items-center bg-gray-100">
            <header className="w-full bg-blue-600 text-white p-6 flex justify-between">
                <h1 className="text-3xl font-bold text-center">Dashboard</h1>
                {user && (
                    <div className="flex items-center">
                        <span className="mr-4">Welcome, {user.email}</span>
                        <button
                            onClick={handleLogout}
                            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                        >
                            Logout
                        </button>
                    </div>
                )}
            </header>

            <main className="w-full max-w-4xl p-8">
                {/* Tab Navigation */}
                <section className="my-6 flex space-x-4">
                    <button
                        onClick={() => handleTabChange("jobs")}
                        className={`p-2 ${activeTab === "jobs" ? "bg-blue-600 text-white" : "bg-gray-300"}`}
                    >
                        Job Posts
                    </button>
                    <button
                        onClick={() => handleTabChange("applications")}
                        className={`p-2 ${activeTab === "applications" ? "bg-blue-600 text-white" : "bg-gray-300"}`}
                    >
                        All Applications
                    </button>
                </section>

                {/* Tab Content */}
                {activeTab === "jobs" && (
                    <>
                        <section className="my-6">
                            <h2 className="text-2xl font-semibold mb-4">Post a New Job</h2>
                            <JobPostForm />
                        </section>
                        <section className="my-6">
                            <h2 className="text-2xl font-semibold mb-4">All Jobs</h2>
                            <JobList />
                        </section>
                    </>
                )}

                {activeTab === "applications" && (
                    <>
                        {/* Application List Section */}
                        <section className="my-6">
                            <h2 className="text-2xl font-semibold mb-4">All Applications</h2>
                            <JobApplicationList
                                applications={applications}
                                searchTitle={searchTitle}
                                searchCategory={searchCategory}
                            />
                        </section>
                    </>
                )}
            </main>
        </div>
    );
};

export default Dashboard;

