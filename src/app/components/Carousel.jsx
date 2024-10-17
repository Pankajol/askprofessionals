"use client"; // Ensures the component is client-side

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
// import Image from 'next/image';

const carouselItems = [
  {
    image: 'https://aitsind.com/wp-content/uploads/2024/04/Construction-300x169.jpg',
    text: 'Construction',
  },
  {
    image: 'https://aitsind.com/wp-content/uploads/2024/04/Automotive-300x169.jpg',
    text: 'Automotive',
  },
  {
    image: 'https://aitsind.com/wp-content/uploads/2024/04/Fashion-300x169.jpg',
    text: 'Fashion',
  },
  {
    image: 'https://aitsind.com/wp-content/uploads/2024/04/Banking-300x180.jpg',
    text: 'Banking',
  },
  {
    image: 'https://aitsind.com/wp-content/uploads/2024/04/Insurance-300x169.jpg',
    text: 'Insurance',
  },
  {
    image: 'https://aitsind.com/wp-content/uploads/2024/04/NBFC-300x169.jpg',
    text: 'NBFC',
  },
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(1);

  // Function to calculate the number of images based on screen size
  const getItemsToShow = () => {
    if (typeof window !== 'undefined') { // Ensure this runs only in the client
      if (window.innerWidth >= 1024) return 3; // Large screens (3 images)
      if (window.innerWidth >= 768) return 2;  // Medium screens (2 images)
    }
    return 1; // Small screens (1 image) or default
  };

  useEffect(() => {
    // Set initial number of items
    setItemsToShow(getItemsToShow());

    // Handle resizing of the window
    const handleResize = () => {
      setItemsToShow(getItemsToShow());
    };

    // Add event listener on window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? carouselItems.length - itemsToShow : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === carouselItems.length - itemsToShow ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full">
      <div className="flex overflow-hidden justify-center">
        {/* Display dynamic number of images */}
        {carouselItems.slice(activeIndex, activeIndex + itemsToShow).map((item, idx) => (
          <div
            key={idx}
            className={`flex-shrink-0 px-2 ${
              itemsToShow === 1 ? 'w-full' : itemsToShow === 2 ? 'w-1/2' : 'w-1/3'
            }`}
          >
            <img src={item.image} alt={item.text} className="w-full h-auto rounded-lg" />
            <div className="text-center mt-2">
              <p className="font-bold">{item.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white px-3 py-1 rounded-full"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white px-3 py-1 rounded-full"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Carousel;
