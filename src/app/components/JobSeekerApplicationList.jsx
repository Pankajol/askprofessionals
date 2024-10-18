"use client";
import React, { useState, useEffect } from "react";

const JobSeekerApplicationList = () => {
  const [applications, setApplications] = useState([]);

  // Fetch all applications
  const fetchApplications = async () => {
    try {
      const response = await fetch("/api/seekerapplication");
      const data = await response.json();
      setApplications(data.jobseekerapplications);
      console.log(data.jobseekerapplications);
    } catch (error) {
      console.error("Error fetching jobseekerapplications:", error);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []); // Run once when the component mounts

  const handleViewResume = (resumeUrl) => {
    // Open the resume URL in a new tab for viewing
    window.open(resumeUrl, "_blank");
  };

  const handleDownloadResume = (resumeUrl) => {
    // Create a temporary link to trigger the download
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "resume.pdf"; // You can customize this name if needed
    link.click();
  };

  return (
    <div className="space-y-4">
      {/* Applications List */}
      {applications.length === 0 ? (
        <p>No Job Seeker applications found</p>
      ) : (
        applications.map((application) => (
          <div
            key={application._id}
            className="p-4 bg-white shadow-md rounded-lg"
          >
            <h3 className="text-xl font-semibold">
              Job: {application.jobTitle}
            </h3>
            <p className="text-gray-600">Applicant: {application.name}</p>
            <p className="text-gray-600">Email: {application.email}</p>
            <p className="text-gray-600">Location: {application.location}</p>
            <p className="text-gray-600">Message: {application.message}</p>

            {/* Resume View and Download Buttons */}
            {application.resume && (
              <div className="mt-4 space-x-2">
                <button
                  onClick={() => handleViewResume(application.resume)}
                  className="text-blue-600 hover:underline"
                >
                  View Resume
                </button>

                <button
                  onClick={() =>
                    window.open(
                      application.resume,
                      "_blank",
                      "noopener noreferrer"
                    )
                  }
                  className="text-blue-600 hover:underline"
                >
                  Download
                </button>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default JobSeekerApplicationList;
