"use client";
import { useState } from 'react';

export default function EmployerEnquiryForm() {
  const [formData, setFormData] = useState({
    website: '',
    employees: '',
    numEmployees: '',
    resourceType: '',
    name: '',
    email: '',
    mobile: '',
    company: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/employer-enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Send as JSON
      });

      if (response.ok) {
        console.log('Enquiry submitted successfully');
        setFormData({
          website: '',
          employees: '',
          numEmployees: '',
          resourceType: '',
          name: '',
          email: '',
          mobile: '',
          company: '',
          message: '',
        });
        alert('Enquiry submitted successfully!');
      } else {
        console.error('Failed to submit enquiry');
        alert('Failed to submit enquiry');
      }
    } catch (error) {
      console.error('Error submitting enquiry:', error);
      alert('Error submitting enquiry');
    }
  };

  return (
    <div className="py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg rounded-lg">
        <h1 className="text-center text-2xl font-semibold mb-6">Employer Enquiry Form</h1>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Form Fields */}
          <div>
            <label className="block mb-2 font-medium">Website Address<span className="text-red-500">*</span></label>
            <input
              type="text"
              name="website"
              value={formData.website}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg p-2"
              placeholder="Enter Website Address"
            />
          </div>

          {/* Employees */}
          <div>
            <label className="block mb-2 font-medium">Employees</label>
            <input
              type="text"
              name="employees"
              value={formData.employees}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg p-2"
              placeholder="Enter Number of Employees"
            />
          </div>

          {/* Type of Resource to be Hired */}
          <div className="md:col-span-2">
            <label className="block mb-2 font-medium">Type of Resource to be Hired</label>
            <textarea
              name="resourceType"
              value={formData.resourceType}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg p-2 h-24"
              placeholder="Type of Resource to be Hired"
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
