'use client'
import { useEffect, useState } from 'react';

const EmployerEnquiries = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [error, setError] = useState(null);

  // Fetch enquiries when the component mounts
  useEffect(() => {
    const fetchEnquiries = async () => {
      try {
        const response = await fetch('/api/employer-enquiry'); // Adjust the endpoint based on your setup
        const data = await response.json();

        if (response.ok) {
          setEnquiries(data.enquiries);
        } else {
          setError(data.error || 'Failed to fetch enquiries');
        }
      } catch (err) {
        setError('An error occurred while fetching data');
      }
    };

    fetchEnquiries();
  }, []);

  return (
    <div className="py-10 px-4">
      {/* <div className="max-w-4xl mx-auto  p-8 shadow-lg rounded-lg"> */}
    
        {error && <p className="text-red-500">{error}</p>}
        <div className="space-y-4">
          {enquiries.length > 0 ? (
            enquiries.map((enquiry) => (
              <div key={enquiry._id} className="bg-white p-4 rounded-lg shadow">
                {/* <h2 className="text-xl font-semibold"></h2> */}
                <p><strong>Name:</strong> {enquiry.name}</p>
                <p><strong>Website:</strong> {enquiry.website}</p>
                <p><strong>Employees:</strong> {enquiry.employees}</p>
                <p><strong>Resource Type:</strong> {enquiry.resourceType}</p>
                <p><strong>Email:</strong> {enquiry.email}</p>
                <p><strong>Mobile:</strong> {enquiry.mobile}</p>
                <p><strong>Message:</strong> {enquiry.message}</p>
              </div>
            ))
          ) : (
            <p>No enquiries found.</p>
          )}
        </div>
      </div>
    // </div>
  );
};

export default EmployerEnquiries;
