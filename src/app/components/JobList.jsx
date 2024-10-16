"use client";
import React, { useState, useEffect } from "react";

const JobList = () => {
  const [jobs, setJobs] = useState([]);

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
  
  
  // Delete a job
  const deleteJob = async (id) => {
    try {
      const response = await fetch("/api/jobs", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      if (response.ok) {
        fetchJobs(); // Refresh job list after deletion
      } else {
        console.error("Failed to delete job");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Update job status (activate/deactivate)
  const toggleJobStatus = async (id, isActive) => {
    try {
      const response = await fetch(`/api/jobs/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ isActive: !isActive }),
      });

      if (response.ok) {
        fetchJobs(); // Refresh job list after updating status
      } else {
        console.error("Failed to update job status");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  // console.log(jobs);
  

  useEffect(() => {
    
    fetchJobs();
  }, []);

  return (
    <div className="space-y-4">
      {jobs.length === 0 ? (
        <p>No jobs available</p>
      ) : (
        jobs.map((job) => (
          <div key={job._id} className="p-4 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold">{job.jobTitle}</h3>
            <p className="text-gray-600">{job.description}</p>
            <h3 className="text-xl font-semibold">{job.AdditionalQuestionType }</h3>
            <h3 className="text-xl font-semibold">{job.EmploymentType }</h3>
            <h3 className="text-xl font-semibold">{job.InterviewDateType }</h3>
            <h3 className="text-xl font-semibold">{job.location }</h3>
            
            <p>Status: {job.isActive ? "Active" : "Inactive"}</p>
            <div className="flex space-x-4 mt-2">
              <button
                onClick={() => toggleJobStatus(job._id, job.isActive)}
                className={`px-4 py-2 text-white rounded-md ${
                  job.isActive ? "bg-red-500" : "bg-green-500"
                }`}
              >
                {job.isActive ? "Deactivate" : "Activate"}
              </button>
              <button
                onClick={() => deleteJob(job._id)}
                className="px-4 py-2 bg-red-600 text-white rounded-md"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default JobList;
