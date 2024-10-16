
// import Header from '@/app/components/Header';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
import Job from '../components/Job';

// import JobCard from '@/app/components/JobCard';

export default function Jobs() {
 

  return (
    <div className="bg-secondary min-h-screen">
      {/* <Header /> */}
      <main className="container mx-auto py-20">
        <h2 className="text-3xl font-bold text-primary mb-6">Job Listings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Job />
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
}
