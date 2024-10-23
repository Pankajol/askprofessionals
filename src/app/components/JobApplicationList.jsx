

"use client";
import React, { useState, useEffect } from "react";

const JobApplicationList = () => {
  const [applications, setApplications] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  // Fetch all applications
  const fetchApplications = async () => {
    try {
      const response = await fetch("/api/application");
      const data = await response.json();
      setApplications(data.applications);
      console.log(data.applications);
    } catch (error) {
      console.error("Error fetching applications:", error);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []); // Run once when the component mounts

  const filteredApplications = applications.filter((application) =>
    application.jobTitle.toLowerCase().includes(searchTitle.toLowerCase())
  );

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
      {/* Search Input */}
      <div className="mb-4">
        <input
          type="text"
          value={searchTitle}
          onChange={(e) => setSearchTitle(e.target.value)}
          placeholder="Search by Job Title"
          className="w-full border border-gray-300 rounded-lg p-2"
        />
      </div>

      {/* Applications List */}
      {filteredApplications.length === 0 ? (
        <p>No applications found</p>
      ) : (
        filteredApplications.map((application) => (
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
            {/* <p className="text-gray-600">Status: {application.status}</p> */}

            {/* <img src={application.resume} alt="resume" /> */}

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
                {/* <button
                  onClick={() => handleDownloadResume(application.resume)}
                  className="text-blue-600 hover:underline"
                >
                  Download Resume
                </button> */}
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default JobApplicationList;
