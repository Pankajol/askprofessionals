"use client";
import React, { useState, useEffect } from "react";
import JobSeekerEnquiryForm from "./JobSeekerEnquiryForm"; // Import the form component

const Job = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null); // Track selected job

  // Fetch all jobs
  const fetchJobs = async () => {
    try {
      const response = await fetch("/api/jobs");
      const data = await response.json();
      setJobs(data.jobs);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  // Handle Apply button click
  const handleApplyClick = (job) => {
    setSelectedJob(job); // Set selected job
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <>
      <div className="space-y-4">
        {jobs.length === 0 ? (
          <p>No jobs available</p>
        ) : (
          jobs.map((job) => (
            <div key={job._id} className="p-4 bg-white shadow-md rounded-lg">
              <h3 className="text-xl font-semibold">{job.jobTitle}</h3>
              <p className="text-gray-600">{job.description}</p>
              <h3 className="text-xl font-semibold">{job.AdditionalQuestionType}</h3>
              <h3 className="text-xl font-semibold">{job.EmploymentType}</h3>
              <h3 className="text-xl font-semibold">{job.InterviewDateType}</h3>
              <h3 className="text-xl font-semibold">{job.location}</h3>

              <div className="flex">
                <button
                  onClick={() => handleApplyClick(job)} // Handle Apply button click
                  className="bg-green-600 rounded-md p-2 text-white font-semibold"
                >
                  Apply
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Render the form when a job is selected */}
      {selectedJob && (
        <div className="mt-8">
          <JobSeekerEnquiryForm selectedJob={selectedJob} />
        </div>
      )}
    </>
  );
};

export default Job;
