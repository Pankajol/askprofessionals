// "use client";
// import React, { useState } from "react";
// import JobPostForm from "../../components/JobPostForm";
// import JobList from "../../components/JobList";

// const Dashboard = () => {
//   const [jobPosted, setJobPosted] = useState(false);

//   const handleJobPosted = () => {
//     setJobPosted(!jobPosted);
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center bg-gray-100">
//       <header className="w-full bg-blue-600 text-white p-6">
//         <h1 className="text-3xl font-bold text-center">Dashboard</h1>
//       </header>

//       <main className="w-full max-w-4xl p-8">
//         {/* Job Post Form Section */}
//         <section className="my-6">
//           <h2 className="text-2xl font-semibold mb-4">Post a New Job</h2>
//           <JobPostForm onJobPosted={handleJobPosted} />
//         </section>

//         {/* Job List Section */}
//         <section className="my-6">
//           <h2 className="text-2xl font-semibold mb-4">All Jobs</h2>
//           <JobList />
//         </section>
//       </main>

//       <footer className="w-full bg-blue-600 text-white p-4 text-center mt-auto">
//         © 2024 Your Company
//       </footer>
//     </div>
//   );
// };

// export default Dashboard;


"use client";
import React, { useState, useEffect } from "react";
import JobPostForm from "../../components/JobPostForm";
import JobList from "../../components/JobList";
import JobApplicationList from "../../components/JobApplicationList";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("jobs"); // Default active tab is 'jobs'
  const [applications, setApplications] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [searchCategory, setSearchCategory] = useState("");

  // Fetch job applications
  const fetchApplications = async () => {
    try {
      const response = await fetch("/api/applications"); // Assume we have an API for applications
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

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      <header className="w-full bg-blue-600 text-white p-6">
        <h1 className="text-3xl font-bold text-center">Dashboard</h1>
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
            {/* Search Section */}
         

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
