import { connect } from '../../../dbConfig/dbConfig';
import SeekerApplication from '../../../models/jobSeekerModel';
import { NextResponse } from 'next/server';

connect(); // Connect to the database

// Handle the POST request for job applications
export async function POST(request) {
  try {
    const reqBody = await request.formData(); // Get the FormData from the request
    
    // Extracting fields from the form data
    const name = reqBody.get('name');
    const email = reqBody.get('email');
    const mobile = reqBody.get('mobile');
    const location = reqBody.get('location');
    const resume = reqBody.get('resume'); // This should be a URL after upload to Cloudinary
    const message = reqBody.get('message');

    // Validate the data
    if (!name || !email || !mobile || !resume) {
      return NextResponse.json(
        { error: 'Name, Email, Mobile, and Resume are required fields.' }, 
        { status: 400 }
      );
    }

    // Create a new application
    const newSeekerApplication = new SeekerApplication({
      name,
      email,
      mobile,
      location,
      resume, // Save the URL of the uploaded resume
      message,
    });

    // Save the application to the database
    const savedSeekerApplication = await newSeekerApplication.save();

    // Return success response
    return NextResponse.json(
      { message: 'Application submitted successfully', application: savedSeekerApplication },
      { status: 201 }
    );

  } catch (error) {
    // Log error details for debugging
    console.error('Error in job application submission:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}


export async function GET() {
  try {
    // Fetch all applications from the database
    const jobseekerapplications = await SeekerApplication.find({});

    // Return the applications as a JSON response
    return NextResponse.json({ jobseekerapplications }, { status: 200 });
  } catch (error) {
    // Handle any errors
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}