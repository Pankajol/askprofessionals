// "use client";
// import Link from 'next/link';
// import { useState } from 'react';
// import { LogIn, User, ChevronDown } from 'lucide-react';

// export default function Header() {
//   const [isDropdownOpen, setDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setDropdownOpen(!isDropdownOpen);
//   };

//   return (
//     <header className="bg-primary p-4 mb-1 shadow relative z-50">
//       <nav className="container mx-auto flex justify-between items-center">
        
//         {/* Logo */}
//         <Link href="/">
//           <img 
//             src="/logo/ask_logo.jpg" 
//             alt="Ask Professionals Logo" 
//             className=" pl-10 h-14 w-auto"
//           />
//         </Link>

//         {/* Navigation Links */}
//         <ul className="hidden md:flex space-x-14 items-center">
//           <li>
//             <Link href="/" className="hover:text-blue-500">Home</Link>
//           </li>
//           <li>
//             <Link href="/about" className="hover:text-blue-500">About</Link>
//           </li>
//           <li>
//             <Link href="/services" className="hover:text-blue-500">Services</Link>
//           </li>
//           {/* Industry Dropdown */}
//           <li className="relative">
//             <button 
//               onClick={toggleDropdown} 
//               className="flex items-center space-x-1 hover:text-blue-500 focus:outline-none"
//             >
//              <Link href="/industry" className="hover:text-blue-500">Industry</Link>
//              {/* <span>Industry</span> */}
//               <ChevronDown className="h-5 w-5 hover:text-blue-500 relative z-50" />
//             </button>

//             {isDropdownOpen && (
//               <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg">
//                 <ul className="py-2">
//                   <li className="px-4 py-2 hover:bg-gray-100">
//                     <p >Information Technology</p>
//                   </li>
//                   <li className="px-4 py-2 hover:bg-gray-100">
//                     <p >Manufacturing</p>
//                   </li>
//                   <li className="px-4 py-2 hover:bg-gray-100">
//                     <p>Trading</p>
//                   </li>
//                   <li className="px-4 py-2 hover:bg-gray-100">
//                     <p>Banks</p>
//                   </li>
//                   <li className="px-4 py-2 hover:bg-gray-100">
//                     <p >NBFC</p>
//                   </li>
//                   <li className="px-4 py-2 hover:bg-gray-100">
//                     <p>Insurance</p>
//                   </li>
//                   <li className="px-4 py-2 hover:bg-gray-100">
//                     <p>Shipping</p>
//                   </li>
//                   <li className="px-4 py-2 hover:bg-gray-100">
//                     <p>Edtech</p>
//                   </li>
//                 </ul>
//               </div>
//             )}
//           </li>
//           <li>
//             <Link href="/employer" className="hover:text-blue-500">Employer</Link>
//           </li>
//           <li>
//             <Link href="/job-seeker" className="hover:text-blue-500">Job Seeker</Link>
//           </li>
//           <li>
//             <Link href="/job" className="hover:text-blue-500">Job Listings</Link>
//           </li>
//           <li>
//             <Link href="/contact" className="hover:text-blue-500">Contact</Link>
//           </li>
//         </ul>

//         {/* Icons for Sign-in and Sign-up */}
//         <div className="flex items-center space-x-6">
//           <Link href="/sign-in" className="flex items-center space-x-1 hover:text-blue-500">
//             <LogIn className="h-5 w-5" />
//             <span>Sign In</span>
//           </Link>
//           {/* <Link href="/sign-up" className="flex items-center space-x-1 hover:text-blue-500">
//             <User className="h-5 w-5" />
//             <span>Sign Up</span>
//           </Link> */}
//         </div>
//       </nav>
//     </header>
//   );
// }



"use client";
import Link from 'next/link';
import { useState } from 'react';
import { LogIn, User, ChevronDown } from 'lucide-react';

export default function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-primary p-4 mb-1 shadow relative z-50">
      <nav className="container mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/">
          <img 
            src="/logo/ask_logo.jpg" 
            alt="Ask Professionals Logo" 
            className="h-14 w-auto"
          />
        </Link>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-black focus:outline-none" 
          onClick={toggleMobileMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-8 items-center">
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
              <span>Industry</span>
              <ChevronDown className="h-5 w-5 hover:text-blue-500 relative z-50" />
            </button>

            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg">
                <ul className="py-2">
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <p>Information Technology</p>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <p>Manufacturing</p>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <p>Trading</p>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <p>Banks</p>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <p>NBFC</p>
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
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/sign-in" className="flex items-center space-x-1 hover:text-blue-500">
            <LogIn className="h-5 w-5" />
            <span>Sign In</span>
          </Link>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4">
          <ul className="space-y-4 text-center">
            <li>
              <Link href="/" className="hover:text-blue-500" onClick={toggleMobileMenu}>Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-500" onClick={toggleMobileMenu}>About</Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-blue-500" onClick={toggleMobileMenu}>Services</Link>
            </li>
            <li>
              <Link href="/industry" className="hover:text-blue-500" onClick={toggleMobileMenu}>Industry</Link>
            </li>
            <li>
              <Link href="/employer" className="hover:text-blue-500" onClick={toggleMobileMenu}>Employer</Link>
            </li>
            <li>
              <Link href="/job-seeker" className="hover:text-blue-500" onClick={toggleMobileMenu}>Job Seeker</Link>
            </li>
            <li>
              <Link href="/job" className="hover:text-blue-500" onClick={toggleMobileMenu}>Job Listings</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-500" onClick={toggleMobileMenu}>Contact</Link>
            </li>
            <li>
              <Link href="/sign-in" className="flex items-center justify-center space-x-1 hover:text-blue-500" onClick={toggleMobileMenu}>
                <LogIn className="h-5 w-5" />
                <span>Sign In</span>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
