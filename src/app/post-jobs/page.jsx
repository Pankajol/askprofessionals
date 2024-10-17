"use client";
import React, { useState } from "react";
import { Pencil } from "lucide-react";

const JobPostForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    jobTitle: "",
    jobType: "",
    EmploymentType: "",
    AdditionalQuestionType: "",
    InterviewDateType: "",
    location: "",
    salary: "",
    experience: "",
    description: "",
  });

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('/api/jobs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert('Job posted successfully!');
      } else {
        console.error(data.error);
        alert('Error posting the job: ' + data.error);
      }
    } catch (error) {
      console.error('Error submitting job post', error);
      alert('Something went wrong!');
    }
  };
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-md p-8">
        {step === 1 && (
          <>
            <h2 className="text-2xl font-bold mb-6">
              Lets start with title of the role.
            </h2>
            <div className="grid grid-cols-2 gap-6">
              <div className="col-span-2 md:col-span-1">
                <label htmlFor="jobTitle" className="block text-gray-700">
                  Job Title
                </label>
                <input
                  type="text"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                  placeholder="Enter job title"
                />
              </div>
              <div className="col-span-2 md:col-span-1">
                <label htmlFor="jobType" className="block text-gray-700">
                  Job Type
                </label>
                <div className="flex items-center space-x-4">
                  <div>
                    <input
                      type="radio"
                      id="fullTime"
                      name="jobType"
                      value="Full time"
                      checked={formData.jobType === "Full time"}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label htmlFor="fullTime" className="text-gray-700">
                      Full time
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="partTime"
                      name="jobType"
                      value="Part time"
                      checked={formData.jobType === "Part time"}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label htmlFor="partTime" className="text-gray-700">
                      Part time
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="temporary"
                      name="jobType"
                      value="Temporary"
                      checked={formData.jobType === "Temporary"}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label htmlFor="temporary" className="text-gray-700">
                      Temporary
                    </label>
                  </div>
                </div>
              </div>
              {/*  Employment Type */}
              <div className="col-span-2 md:col-span-1">
                <label htmlFor="jobType" className="block text-gray-700">
                  Employment type
                </label>
                <div className="flex items-center space-x-4">
                  <div>
                    <input
                      type="radio"
                      id="on-site"
                      name="EmploymentType"
                      value="On-site"
                      checked={formData.EmploymentType === "On-site"}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label htmlFor="on-site" className="text-gray-700">
                      On-site
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="remote"
                      name="EmploymentType"
                      value="Remote"
                      checked={formData.EmploymentType === "Remote"}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label htmlFor="partTime" className="text-gray-700">
                      Remote
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="hybrid"
                      name="EmploymentType"
                      value="Hybrid"
                      checked={formData.EmploymentType === "Hybrid"}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label htmlFor="hybrid" className="text-gray-700">
                      Hybrid
                    </label>
                  </div>
                </div>
              </div>
              {/* Interview  date  */}

              <div className="col-span-2 md:col-span-1">
                <label htmlFor="jobType" className="block text-gray-700">
                  When are you looking to start interviews?
                </label>
                <div className="flex items-center space-x-4">
                  <div>
                    <input
                      type="radio"
                      id="1-14 day"
                      name="InterviewDateType"
                      value="1-14 days"
                      checked={formData.InterviewDateType === "1-14 days"}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label htmlFor="1-14 day" className="text-gray-700">
                      1-14 days
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="14+days"
                      name="InterviewDateType"
                      value="14+ days"
                      checked={formData.InterviewDateType === "14+ days"}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label htmlFor="14+day" className="text-gray-700">
                      14+days
                    </label>
                  </div>
                </div>
              </div>
              {/* Desception  */}
              <div>
                <label htmlFor="job-description" className="text-gray-700">
                  Job Description
                </label>

                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                  placeholder="Enter job description"
                />
              </div>

              {/* location */}

              <div>
                <label htmlFor="location" className="block text-gray-700">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                  placeholder="Enter location"
                />
              </div>
            </div>
            <div className="flex justify-end mt-6">
              <button
                onClick={handleNext}
                className="px-4 py-2 bg-indigo-600 text-white rounded-md"
              >
                Next
              </button>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <div className="col-span-2 md:col-span-1">
              <h2 className="text-2xl font-semibold mb-2">
                Additional Question
              </h2>
              <p className="text-gray-600 mb-6">
                Choose questions to gather more details about your candidate.
                Add up to 4 screening questions.
              </p>
            </div>

            <div className="col-span-2 md:col-span-1">
              <label htmlFor="jobType" className="block text-gray-700 mb-2">
                When are you looking to start interviews?
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Salary Expectations Radio */}
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="What are your salary expectations?"
                    name="AdditionalQuestionType"
                    value="What are your salary expectations?"
                    checked={
                      formData.AdditionalQuestionType ===
                      "What are your salary expectations?"
                    }
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <label
                    htmlFor="What are your salary expectations?"
                    className="text-gray-700"
                  >
                    What are your salary expectations?
                  </label>
                </div>

                {/* Years of Experience Radio */}
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="How many years of experience do you have in a similar role?"
                    name="AdditionalQuestionType"
                    value="How many years of experience do you have in a similar role?"
                    checked={
                      formData.AdditionalQuestionType ===
                      "How many years of experience do you have in a similar role?"
                    }
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <label
                    htmlFor="How many years of experience do you have in a similar role?"
                    className="text-gray-700"
                  >
                    How many years of experience do you have in a similar role?
                  </label>
                </div>

                {/* Location Radio */}
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="Where are you located?"
                    name="AdditionalQuestionType"
                    value="Where are you located?"
                    checked={
                      formData.AdditionalQuestionType ===
                      "Where are you located?"
                    }
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <label
                    htmlFor="Where are you located?"
                    className="text-gray-700"
                  >
                    Where are you located?
                  </label>
                </div>

                {/* Video Application Radio */}
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="Request video applications?"
                    name="AdditionalQuestionType"
                    value="Request video applications?"
                    checked={
                      formData.AdditionalQuestionType ===
                      "Request video applications?"
                    }
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <label
                    htmlFor="Request video applications?"
                    className="text-gray-700"
                  >
                    Request video applications?
                  </label>
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-6">
              <button
                onClick={handleBack}
                className="px-4 py-2 bg-gray-500 text-white rounded-md"
              >
                Back
              </button>
              <button
                onClick={handleNext}
                className="px-4 py-2 bg-indigo-600 text-white rounded-md"
              >
                Next
              </button>
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <div className="flex justify-between mt-6">
              
            <h2 className="text-2xl font-bold mb-6">Review Your Job Post</h2>
              <button
                onClick={handleSubmit}
                className="px-4  bg-yellow-500 rounded-md"
              >
                Post Job
              </button>
            </div>
            <div className="grid grid-cols-1 gap-6">
              
              <div>
                <label className="block text-gray-700">Job Title</label>
                <div className="flex justify-between">
                <p className="text-gray-500">{formData.jobTitle}</p>
                <button
                  onClick={() => setStep(1)}
                  className="text-gray-700 hover:underline"
                >
                  <Pencil />
                </button>
                </div>
              </div>
              <div>
                <label className="block text-gray-700">Job Type</label>
                <div className="flex justify-between">
                <p className="text-gray-500">{formData.jobType}</p>
                <button
                  onClick={() => setStep(1)}
                  className="text-gray-700 hover:underline"
                >
                  <Pencil />
                </button>
                </div>
              </div>
              <div>
                <label className="block text-gray-700">Employment Type</label>
               <div className="flex justify-between">
               <p className="text-gray-500">{formData.EmploymentType}</p>
                <button
                  onClick={() => setStep(1)}
                  className="text-gray-700 hover:underline"
                >
                  <Pencil />
                </button>
               </div>
              </div>
              <div>
                <label className="block text-gray-700">Interview Date</label>
               <div className="flex justify-between">
               <p className="text-gray-500">{formData.InterviewDateType}</p>
                <button
                  onClick={() => setStep(1)}
                  className="text-gray-700 hover:underline"
                >
                  <Pencil />
                </button>
               </div>
              </div>
              
              <div>
                <label className="block text-gray-700">Location</label>
               <div className="flex justify-between">
               <p className="text-gray-500">{formData.location}</p>
                <button
                  onClick={() => setStep(1)}
                  className="text-gray-700 hover:underline"
                >
                 <Pencil />
                </button>
               </div>
              </div>
              <div>
                <label className="block text-gray-700">Description</label>
               <div className="flex justify-between">
               <p className="text-gray-500">{formData.description}</p>
                <button
                  onClick={() => setStep(1)}
                  className="text-gray-700 hover:underline"
                >
                  <Pencil />
                </button>
               </div>
              </div>

              <div>
                <label className="block text-gray-700">
                  Additional Questions
                </label>
               <div className="flex justify-between">
               <p className="text-gray-500">
                  {formData.AdditionalQuestionType}
                </p>
                <button
                  onClick={() => setStep(2)}
                  className="text-gray-700 hover:underline"
                >
                  <Pencil />
                </button>
               </div>
              </div>
            </div>

            
          </>
        )}
      </div>
    </div>
  );
};

export default JobPostForm;
