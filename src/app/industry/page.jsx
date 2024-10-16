"use cleint"
import React from 'react';
import Carousel from '../components/Carousel'; // Assuming you have a Carousel component

const IndustryPage = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Main Image Section */}
      <div className="flex justify-center mb-8">
        <img src="https://aitsind.com/wp-content/uploads/2024/04/industry-banner.jpg" alt="Industry" className="max-w-full h-auto" />
      </div>

      {/* Text Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Industries We Serve</h1>
        <p className="text-lg">We offer a range of solutions to meet your industry-specific needs. With real-time data analytics, cloud-based technology, and seamless integration capabilities, we enable organizations to streamline processes, reduce costs, and improve productivity. No matter which industry you are in, our solutions can help you stay ahead of the competition, drive innovation, and drive growth. With industry-specific features and modules, we can provide ideal solution for organizations looking to transform their business and achieve long-term success.</p>
      </div>

      {/* Carousel Section */}
      <div className="carousel-section w-full">
        <Carousel />
      </div>
    </div>
  );
};

export default IndustryPage;
