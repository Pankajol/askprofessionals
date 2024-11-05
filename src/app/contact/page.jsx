// app/contact/page.js
"use client"
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin } from 'lucide-react';
import Contact from '../components/Contact';


export default function ContactPage() {
  return (
    <div className="bg-secondary min-h-screen">
   
      <div className="min-h-screen  p-6 md:p-12">
      <div className="container mx-auto">
        {/* Contact Us Header */}
        <h1 className="text-4xl font-bold text-center mb-8 ">Contact Us</h1>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Contact Form */}
          <div className="bg-white shadow-md rounded-lg p-8 w-full md:w-2/3">
            <h2 className="text-2xl font-semibold mb-6 text-gray-700">Get in Touch</h2>
           {/*  <form className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6">
                
                <div className="w-full">
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input 
                    type="text" 
                    className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
                    placeholder="Your Name" 
                  />
                </div>

                
                <div className="w-full">
                  <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                  <input 
                    type="tel" 
                    className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
                    placeholder="Your Phone Number" 
                  />
                </div>
              </div>

              
              <div className="w-full">
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input 
                  type="email" 
                  className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
                  placeholder="Your Email" 
                />
              </div>

            
              <div className="w-full">
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea 
                  className="mt-1 p-2 w-full h-32 border rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
                  placeholder="Write your message here..."
                />
              </div>

              <div>
                <button 
                  type="submit" 
                  className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-600 transition-all duration-200"
                >
                  Send Message
                </button>
              </div>
            </form>*/}
          <Contact />
          </div> 

          {/* Contact Information */}
          <div className="bg-primary  shadow-md rounded-lg p-8 w-full md:w-1/3 space-y-6">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>

            <div className="flex items-center space-x-3">
              <MapPin className="h-6 w-6" />
              <p>GA-50, Lakecity Mall, Kapurbawdi, Thane West 400607</p>
            </div>

            <div className="flex items-center space-x-3">
              <Phone className="h-6 w-6" />
              <p>+91-9004902553</p>
            </div>

            <div className="flex items-center space-x-3">
              <Mail className="h-6 w-6" />
              <p>info@askprofessionals.in</p>
            </div>

            {/* Google Maps Embed (Optional) */}
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
        </div>
      </div>
    </div>
    
    </div>
  );
}
