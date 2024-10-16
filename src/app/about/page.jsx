// app/about/page.js
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div className="bg-secondary min-h-screen">
      
      <main className="container mx-auto px-4 py-16 bg-white">
      {/* About Section */}
      <section className="about-section text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Us</h1>
        <p className="text-lg text-gray-700 mb-6">
          At <strong>ASK Professionals</strong>, we specialize in bridging the gap between exceptional talent and leading organizations. Whether you’re an employer seeking the perfect candidate or a job seeker looking for your next career move, we’re here to help.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us-section ">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">Why Choose Us?</h2>
        <div className="max-w-3xl mx-auto">
          <ul className="space-y-4">
            <li className="text-lg text-gray-700">
              <strong>Expertise Across Industries:</strong> Our team of experienced recruiters understands the unique needs of various sectors, from tech to healthcare, finance to creative industries.
            </li>
            <li className="text-lg text-gray-700">
              <strong>Personalized Approach:</strong> We take the time to understand your specific requirements, ensuring a tailored experience that leads to successful placements.
            </li>
            <li className="text-lg text-gray-700">
              <strong>Extensive Network:</strong> With access to a vast pool of candidates and employers, we connect you with opportunities that align with your skills and ambitions.
            </li>
            <li className="text-lg text-gray-700">
              <strong>Commitment to Success:</strong> Your goals are our priority. We are dedicated to building lasting relationships and supporting your journey, whether you’re hiring or job hunting.
            </li>
          </ul>
        </div>
      </section>

      {/* Combined Section for Job Seekers and Get Started */}
      <section className="combined-section py-16 bg-gradient-to-r ">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* For Job Seekers */}
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">For Job Seekers</h2>
            <p className="text-lg text-gray-700 mb-4">
              Looking for your dream job? Our dedicated team provides guidance through every step of the job search process—from resume optimization to interview preparation. We empower you to showcase your skills and land the position you’ve always wanted.
            </p>
          </div>

          {/* Get Started Section */}
          <div className="p-6 bg-white rounded-lg shadow-lg text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Started Today!</h2>
            <p className="text-lg text-gray-700 mb-6">
              Whether you’re an employer or a job seeker, we’re here to help you navigate the recruitment landscape. Contact us today to learn how we can work together to achieve your goals.
            </p>
            <a href="/contact" className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors duration-300">
              Contact Us
            </a>
          </div>

        </div>
      </section>
    </main>
     
    </div>
  );
}
