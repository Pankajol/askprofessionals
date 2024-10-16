import { useState } from "react";

export default function JobSeekerEnquiryForm({ selectedJob }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    location: "",
    message: "",
    resume: null,
  });
  const [uploading, setUploading] = useState(false);
  const [uploadMessage, setUploadMessage] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.mobile || !formData.resume) {
      setError("All fields are required!");
      return false;
    }
    setError("");
    return true;
  };

  const uploadResume = async () => {
    const formDataForUpload = new FormData();
    formDataForUpload.append("file", formData.resume);

    const uploadResponse = await fetch("/api/uploadResume", {
      method: "POST",
      body: formDataForUpload,
    });

    const uploadData = await uploadResponse.json();

    if (!uploadResponse.ok || !uploadData.url) {
      throw new Error("Failed to upload resume.");
    }

    return uploadData.url;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setUploading(true);
    setUploadMessage("Uploading resume...");

    try {
      const resumeUrl = await uploadResume();

      // Now submit the rest of the form with the uploaded resume URL
      const applicationData = new FormData();
      applicationData.append("job", selectedJob._id);
      applicationData.append("jobTitle", selectedJob.jobTitle);
      applicationData.append("name", formData.name);
      applicationData.append("email", formData.email);
      applicationData.append("mobile", formData.mobile);
      applicationData.append("location", formData.location);
      applicationData.append("message", formData.message);
      applicationData.append("resume", resumeUrl); // Use the Cloudinary URL

      const response = await fetch("/api/application", {
        method: "POST",
        body: applicationData,
      });

      if (response.ok) {
        alert("Application submitted successfully");
        setFormData({
          name: "",
          email: "",
          mobile: "",
          location: "",
          message: "",
          resume: null,
        });
      } else {
        alert("Failed to submit application");
      }
    } catch (error) {
      console.error("Error:", error);
      setUploadMessage("Error occurred. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg rounded-lg">
        <h1 className="text-center text-2xl font-semibold mb-6">
          Apply for {selectedJob.jobTitle}
        </h1>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Name */}
          <div>
            <label className="block mb-2 font-medium">
              Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg p-2"
              placeholder="Enter Name"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 font-medium">
              Email ID<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg p-2"
              placeholder="Enter Email ID"
              required
            />
          </div>

          {/* Mobile */}
          <div>
            <label className="block mb-2 font-medium">
              Mobile Number<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg p-2"
              placeholder="Enter Mobile Number"
              required
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
            <label className="block mb-2 font-medium">
              Attach Your Resume (PDF format only)
            </label>
            <input
              type="file"
              name="resume"
              onChange={handleFileChange}
              accept=".pdf"
              className="w-full border border-gray-300 rounded-lg p-2"
              required
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
              disabled={uploading}
            >
              {uploading ? "Uploading..." : "Submit"}
            </button>
            {uploadMessage && (
              <p className="text-center mt-2 text-green-500">{uploadMessage}</p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
