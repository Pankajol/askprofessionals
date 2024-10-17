"use client";
import Link from 'next/link';
import { useState } from 'react';
import { LogIn, User, ChevronDown } from 'lucide-react';

export default function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="bg-primary p-4 mb-1 shadow relative z-50">
      <nav className="container mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/">
          <img 
            src="/logo/ask_logo.jpg" 
            alt="Ask Professionals Logo" 
            className=" pl-10 h-14 w-auto"
          />
        </Link>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-14 items-center">
          <li>
            <Link href="/" className="hover:text-blue-500">Home</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-500">About</Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-blue-500">Services</Link>
          </li>
          {/* Industry Dropdown */}
          <li className="relative">
            <button 
              onClick={toggleDropdown} 
              className="flex items-center space-x-1 hover:text-blue-500 focus:outline-none"
            >
             <Link href="/industry" className="hover:text-blue-500">Industry</Link>
             {/* <span>Industry</span> */}
              <ChevronDown className="h-5 w-5 hover:text-blue-500 relative z-50" />
            </button>

            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg">
                <ul className="py-2">
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <p >Information Technology</p>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <p >Manufacturing</p>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <p>Trading</p>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <p>Banks</p>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <p >NBFC</p>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <p>Insurance</p>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <p>Shipping</p>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <p>Edtech</p>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li>
            <Link href="/employer" className="hover:text-blue-500">Employer</Link>
          </li>
          <li>
            <Link href="/job-seeker" className="hover:text-blue-500">Job Seeker</Link>
          </li>
          <li>
            <Link href="/job" className="hover:text-blue-500">Job Listings</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-blue-500">Contact</Link>
          </li>
        </ul>

        {/* Icons for Sign-in and Sign-up */}
        <div className="flex items-center space-x-6">
          <Link href="/sign-in" className="flex items-center space-x-1 hover:text-blue-500">
            <LogIn className="h-5 w-5" />
            <span>Sign In</span>
          </Link>
          {/* <Link href="/sign-up" className="flex items-center space-x-1 hover:text-blue-500">
            <User className="h-5 w-5" />
            <span>Sign Up</span>
          </Link> */}
        </div>
      </nav>
    </header>
  );
}
