
"use client"
import { useState } from 'react';

export default function JobSeekerEnquiryForm() {
  const [formData, setFormData] = useState({
    jobSeeker: '',
    name: '',
    email: '',
    mobile: '',
    location: '',
    resume: null,
    message: '',
    
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className=" py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg rounded-lg">
        <h1 className="text-center text-2xl font-semibold mb-6">Job Seeker Enquiry Form</h1>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Job Seeker */}
          {/* <div>
            <label className="block mb-2 font-medium">Job Seeker<span className="text-red-500">*</span></label>
            <select
              name="jobSeeker"
              value={formData.jobSeeker}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg p-2"
            >
              <option>Select Job Seeker</option>
             
            </select>
          </div> */}

          {/* Name */}
          <div>
            <label className="block mb-2 font-medium">Name<span className="text-red-500">*</span></label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg p-2"
              placeholder="Enter Name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 font-medium">Email ID<span className="text-red-500">*</span></label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg p-2"
              placeholder="Enter Email ID"
            />
          </div>

          {/* Mobile */}
          <div>
            <label className="block mb-2 font-medium">Mobile Number<span className="text-red-500">*</span></label>
            <input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg p-2"
              placeholder="Enter Mobile Number"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block mb-2 font-medium">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg p-2"
              placeholder="Enter Your Location"
            />
          </div>

          {/* Resume Upload */}
          <div className="md:col-span-2">
            <label className="block mb-2 font-medium">Kindly Attach Your Resume (PDF format only)</label>
            <input
              type="file"
              name="resume"
              onChange={handleFileChange}
              accept=".pdf"
              className="w-full border border-gray-300 rounded-lg p-2"
            />
            <p className="text-gray-500 text-sm">File(s) size limit is 20MB.</p>
          </div>

          {/* Message */}
          <div className="md:col-span-2">
            <label className="block mb-2 font-medium">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg p-2 h-24"
              placeholder="Enter Your Message"
            />
          </div>

{/*         
          <div className="md:col-span-2">
            <label className="block mb-2 font-medium">Captcha</label>
            <div className="flex items-center space-x-4">
              <input
                type="text"
                name="captcha"
                value={formData.captcha}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg p-2"
                placeholder="Enter Captcha"
              />
              <div className="bg-gray-100 p-2 rounded">
              
                <img src="/images/captcha.png" alt="Captcha" />
              </div>
              <button type="button" className="bg-gray-300 p-2 rounded-lg">🔄</button>
            </div>
          </div> */}

          {/* Email Opt Out */}
          <div className="md:col-span-2 flex items-center space-x-2">
            <input type="checkbox" id="optOut" className="w-5 h-5" />
            <label htmlFor="optOut" className="font-medium">Email Opt Out</label>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
