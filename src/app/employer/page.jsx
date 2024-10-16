// src/app/employer/page.js
"use client"
import { useState } from 'react';

export default function EmployerEnquiryForm() {
  const [formData, setFormData] = useState({
    employer: '',
    website: '',
    employees: '',
    numEmployees: '',
    resourceType: '',
    name: '',
    email: '',
    mobile: '',
    company: '',
    message: '',
    captcha: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className=" py-10 px-4">
      
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg rounded-lg">
        <h1 className="text-center text-2xl font-semibold mb-6">Employer Enquiry Form</h1>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Employer */}
          {/* <div>
            <label className="block mb-2 font-medium">Employer<span className="text-red-500">*</span></label>
            <select
              name="employer"
              value={formData.employer}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg p-2"
            >
              <option>Employer</option>
              <option>Deputees/Employee</option>
              <option>Job Seeker</option>
             
            </select>
          </div> */}

          {/* Website Address */}
          <div>
            <label className="block mb-2 font-medium">Website Address<span className="text-red-500">*</span></label>
            <input
              type="text"
              name="website"
              value={formData.website}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg p-2"
              placeholder="Web Address"
            />
          </div>

          {/* Employees */}
          <div>
            <label className="block mb-2 font-medium">Employees</label>
            <select
              name="employees"
              value={formData.employees}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg p-2"
            >
              <option>Select Employees</option>
              {/* Add options here */}
            </select>
          </div>

          {/* Number of Employees */}
          <div>
            <label className="block mb-2 font-medium">Number of Employees to be Recruited</label>
            <select
              name="numEmployees"
              value={formData.numEmployees}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg p-2"
            >
              <option>Choose Number of Employees</option>
              {/* Add options here */}
            </select>
          </div>

          {/* Type of Resource to be Hired */}
          <div className="md:col-span-2">
            <label className="block mb-2 font-medium">Type of Resource to be Hired</label>
            <textarea
              name="resourceType"
              value={formData.resourceType}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg p-2 h-24"
              placeholder="Type of Resource"
            />
          </div>

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

          {/* Company Name */}
          <div>
            <label className="block mb-2 font-medium">Company Name</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg p-2"
              placeholder="Enter Company Name"
            />
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

          {/* Captcha */}
          <div className="md:col-span-2">
            <label className="block mb-2 font-medium">Enter Captcha</label>
            <div className="flex items-center space-x-4">
              <input
                type="text"
                name="captcha"
                value={formData.captcha}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg p-2"
                placeholder="Enter Captcha"
              />
              <div className="bg-red-500 p-2 rounded">
                {/* Add Captcha Image */}
                <img src="/images/captcha.png" alt="Captcha" />
              </div>
              <button type="button" className="bg-gray-300 p-2 rounded-lg">🔄</button>
            </div>
          </div>

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
              SUBMIT FORM
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
