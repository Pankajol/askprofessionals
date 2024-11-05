"use client"
import React, { useState } from 'react';

export default function Contact() {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("");
    setLoading(true);

    const formData = {
      name: event.target.name.value,
      email: event.target.email.value,
      message: event.target.message.value,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setResult("Form submitted successfully.");
      } else {
        setResult(`Error: ${data.error}`);
      }
    } catch (error) {
      setResult("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
      event.target.reset();
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-10 px-4">
      <h1 className="text-3xl font-semibold mb-6 text-center">Contact Us</h1>

      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8">
        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label className="text-lg font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              className="mt-2 p-3 border border-gray-300 rounded-md"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-lg font-medium">Email Address</label>
            <input
              type="email"
              name="email"
              className="mt-2 p-3 border border-gray-300 rounded-md"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-lg font-medium">Message</label>
            <textarea
              name="message"
              className="mt-2 p-3 border border-gray-300 rounded-md"
              rows="5"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className={`bg-blue-500 text-white py-3 px-8 rounded-md transition-colors duration-300 ${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"}`}
              disabled={loading}
            >
              {loading ? "Sending..." : "Submit Form"}
            </button>
          </div>
        </form>
        <div className="mt-4 text-center">
          <span className="text-sm text-gray-500">{result}</span>
        </div>
      </div>
    </div>
  );
}
