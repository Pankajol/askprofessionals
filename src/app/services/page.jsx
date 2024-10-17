
import { Briefcase, Users, Settings } from 'lucide-react';
import Image from 'next/image';


export default function Services() {
  return (
    <div className="bg-secondary min-h-screen">
    
      {/* <main className="container mx-auto py-20 bg-slate-900"> */}
          {/* services section */}
      <section className="services-section p-8 ">
      <div className="flex justify-center mb-8">
        <img src="https://aitsind.com/wp-content/uploads/2021/09/top-image.jpg" alt="Services" className="max-w-full h-auto" />
      </div>
        <div className="container mx-auto text-center">

          <h2 className="text-3xl font-bold text-gray-900  ">Our Services</h2>
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
      {/* </main> */}
  
    </div>
  );
}
