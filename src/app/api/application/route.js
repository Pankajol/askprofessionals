// import { connect } from '../../../dbConfig/dbConfig';
// import Application from '../../../models/JobApplication';
// import { NextResponse } from 'next/server';

// connect(); // Connect to the database

// // Handle the POST request for job applications
// export async function POST(request) {
//   try {
//     const reqBody = await request.json();
//     const { job,jobTitle, name, email, mobile, location, resume, message } = reqBody;

//     if (!job) {
//       return NextResponse.json({ error: 'Job ID is required' }, { status: 400 });
//     }

//     // Create a new application
//     const newApplication = new Application({
//       job, // Add job reference here
//       jobTitle,
//       name,
//       email,
//       mobile,
//       location,
//       resume,
//       message,
//     });

//     // Save the application to the database
//     const savedApplication = await newApplication.save();

//     // Return the success response
//     return NextResponse.json(
//       { message: 'Application submitted successfully', application: savedApplication },
//       { status: 201 }
//     );

//   } catch (error) {
//     // Handle any errors
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }


// export async function GET() {
//   try {
//     // Fetch all applications from the database
//     const applications = await Application.find({});
    
//     // Return the applications as a JSON response
//     return NextResponse.json({ applications }, { status: 200 });
//   } catch (error) {
//     // Handle any errors
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }

// Cloudinary configuration
// cloudinary.config({
//   cloud_name: 'dz1gfppll',
//   api_key: '325483142165169',
//   api_secret: '0X_L4yeXrMjcgwXP4Xt5GGx3RuM',
// });
import { connect } from '../../../dbConfig/dbConfig';
import Application from '../../../models/JobApplication';
import { NextResponse } from 'next/server';

connect(); // Connect to the database

// Handle the POST request for job applications
export async function POST(request) {
  try {
    const reqBody = await request.formData(); // Get the FormData from the request
    const job = reqBody.get('job');
    const jobTitle = reqBody.get('jobTitle');
    const name = reqBody.get('name');
    const email = reqBody.get('email');
    const mobile = reqBody.get('mobile');
    const location = reqBody.get('location');
    const resume = reqBody.get('resume'); // This will be the URL from Cloudinary
    const message = reqBody.get('message');

    if (!job || !resume) {
      return NextResponse.json({ error: 'Job ID and Resume URL are required' }, { status: 400 });
    }

    // Create a new application
    const newApplication = new Application({
      job,
      jobTitle,
      name,
      email,
      mobile,
      location,
      resume, // Save the URL of the uploaded resume
      message,
    });

    // Save the application to the database
    const savedApplication = await newApplication.save();

    // Return success response
    return NextResponse.json(
      { message: 'Application submitted successfully', application: savedApplication },
      { status: 201 }
    );

  } catch (error) {
    // Handle any errors
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}








// Handle the GET request to fetch all job applications
export async function GET() {
  try {
    // Fetch all applications from the database
    const applications = await Application.find({});

    // Return the applications as a JSON response
    return NextResponse.json({ applications }, { status: 200 });
  } catch (error) {
    // Handle any errors
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

