// app/page.js
"use client"
import { useState, useEffect } from 'react';
import Contact from './components/Contact'
import { ChevronLeft, ChevronRight,Briefcase, Users, Settings } from 'lucide-react';







export default function Home() {


  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { url: 'http://aitsind.com/wp-content/uploads/2021/09/banner2.jpg', title: 'Slide 1' },
    { url: 'https://okcredit-blog-images-prod.storage.googleapis.com/2020/12/shutterstock_195102122.jpg', title: 'Slide 2' },
    { url: 'http://aitsind.com/wp-content/uploads/2021/09/banner1.jpg', title: 'Slide 3' },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };



useEffect(() => {
  const interval = setInterval(() => {
    nextSlide();
  }, 3000); // Change slides every 3 seconds

  return () => clearInterval(interval);
}, [currentIndex]);


  return (
    <div className="bg-secondary">
      {/* <Header /> */}
      <main className="">
      {/* Carousel Section */}
      <div className="carousel-container relative w-full h-screen overflow-hidden ">
        <div className="relative w-full h-full">
          <img
            src={slides[currentIndex].url}
            alt={slides[currentIndex].title}
            className="w-full h-full object-cover rounded-lg transition-all duration-300"
          />

          {/* Previous and Next Buttons */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-0 transform -translate-y-1/2  text-white p-4 rounded-full shadow-lg"
          >
            <ChevronLeft className="w-6 h-6" /> 
          </button>

          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 transform -translate-y-1/2  text-white p-4 rounded-full shadow-lg"
          >
            <ChevronRight className="w-6 h-6" /> 
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 mx-1 rounded-full ${
                index === currentIndex ? 'bg-primary' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
        {/* services section */}
      <section className="services-section p-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 ">Our Services</h2>
          <p className=' text-gray-900 mb-10'>Be it Contractual Role or Full-Time Hires,our service offering are guaranteed to meet all your talent acquistion needs.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            
            {/* Staffing Services */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Briefcase className="w-12 h-12  mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Staffing Services</h3>
              <p className="text-gray-600">
                We provide top-quality staffing solutions to meet your business needs and fill the gap in your workforce.
              </p>
            </div>

            {/* Recruitment Services */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Users className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Recruitment Services</h3>
              <p className="text-gray-600">
                We connect talented professionals with leading organizations to support growth and success.
              </p>
            </div>

            {/* Managed Services */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Settings className="w-12 h-12  mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Managed Services</h3>
              <p className="text-gray-600">
                Our managed services ensure smooth operations and optimal performance, tailored to your specific needs.
              </p>
            </div>

          </div>
        </div>
      </section>
      {/* Contact Us Section */}
      <section className="contact-section py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Contact Information */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Get in Touch</h3>
              <p className="text-gray-600 mb-4">GA-50,Lakecity Mall, Kapurbawdi, Thane west 400607</p>
              <p className="text-gray-600 mb-4">Phone: +91-9004902553</p>
              <p className="text-gray-600">Email: info@askprofessionals.in</p>
              <div className="mt-6">
              <iframe 
                className="w-full h-64 rounded-md shadow-md" 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.829645697237!2d72.9666143152433!3d19.218330987002246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be795b4f5b8ba73%3A0xb1234abcd1234567!2sA-5%2C+Highstreet%2C+Kapurbawdi%2C+Thane+West%2C+400607!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin" 
                allowFullScreen="" 
                loading="lazy"
                title="Google Maps Embed"
              ></iframe>
            </div>
            </div>
            

            {/* Contact Form */}
            {/* <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact Form</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700">Phone No.</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Enter your email"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors duration-300"
                >
                  Submit
                </button>
              </form>
            </div> */}
            <Contact /> 
          </div>
        </div>
      </section>

      {/* Other content on the home page */}
      <div className="text-center mt-8">
        <a href="/services" className="bg-accent text-white px-6 py-3 rounded">
          Explore Our Services
        </a>
      </div>
    </main>
      {/* <Footer /> */}
    </div>
  );
}
